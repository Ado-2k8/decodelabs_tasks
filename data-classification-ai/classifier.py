"""
Project 2 - Data Classification Using AI (Iris Classifier)
DecodeLabs Industrial Training Kit - Batch 2026

Pipeline IPO :
1. Input   -> charger le dataset Iris + feature scaling
2. Process -> train-test split + algorithme KNN
3. Output  -> confusion matrix + F1 score
"""

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score, f1_score
import pandas as pd

from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich import box
import time

console = Console()


def load_dataset():
    """
    Étape 1a : Ingestion.
    Charge le dataset Iris (150 échantillons, 4 features, 3 classes)
    et le retourne sous forme de DataFrame pandas pour l'exploration,
    plus les tableaux numpy bruts (X, y) pour le pipeline ML.
    """
    iris = load_iris()

    df = pd.DataFrame(iris.data, columns=iris.feature_names)
    df["species"] = pd.Categorical.from_codes(iris.target, iris.target_names)

    return df, iris.data, iris.target, iris.target_names


def explore_dataset(df):
    """
    Affiche un résumé du dataset : dimensions, classes, aperçu des données.
    Sert à "comprendre" le dataset avant tout traitement (exigence du PDF).
    """
    print("=== Iris Dataset Overview ===\n")
    print(f"Shape: {df.shape[0]} samples, {df.shape[1] - 1} features, "
          f"{df['species'].nunique()} classes\n")

    print("First 5 rows:")
    print(df.head(), "\n")

    print("Class distribution:")
    print(df["species"].value_counts(), "\n")

    print("Feature statistics:")
    print(df.describe())


# --------------------------------------------------------------------------
# ÉTAPE 2 : FEATURE SCALING & TRAIN-TEST SPLIT
# --------------------------------------------------------------------------
# Rappel (page 9-10 du PDF) :
#   - "The Gatekeeper Rule": KNN mesure des distances. Si les features ont
#     des échelles différentes, celle avec les plus grandes valeurs domine
#     injustement le calcul de distance. StandardScaler recentre chaque
#     feature à moyenne=0, variance=1.
#   - "Structural Integrity": on sépare les données en un jeu
#     d'entraînement (le modèle apprend les patterns) et un jeu de test
#     (validation sur des données jamais vues). Le split est mélangé
#     (shuffle) pour éviter tout biais d'ordre dans le dataset.


def split_and_scale(X, y, test_size=0.2, random_state=42):
    """
    Étape 2 : Process (partie 1/2).
    - Divise X, y en ensembles d'entraînement et de test (80/20 par défaut)
    - Standardise les features (fit sur le train, transform sur train+test)

    Le scaler est "fit" uniquement sur le train set pour éviter toute fuite
    d'information (data leakage) depuis le test set.
    """
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=test_size, random_state=random_state, shuffle=True, stratify=y
    )

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    return X_train_scaled, X_test_scaled, y_train, y_test, scaler


# --------------------------------------------------------------------------
# ÉTAPE 3 : L'ALGORITHME K-NEAREST NEIGHBORS (KNN)
# --------------------------------------------------------------------------
# Rappel (page 11 et 13 du PDF) :
#   Principe de proximité : des points similaires se trouvent proches les
#   uns des autres dans l'espace des features. Pour classer un nouveau
#   point, KNN regarde ses K voisins les plus proches (déjà connus) et
#   lui attribue la classe majoritaire parmi eux (vote majoritaire).
#
#   Workflow scikit-learn en 3 verbes :
#     1. Instantiate -> construire le modèle avec ses hyperparamètres
#     2. Fit          -> le modèle "mémorise" le train set
#     3. Predict       -> le modèle applique sa logique sur de nouvelles
#                         données (le test set)


def train_knn(X_train, y_train, n_neighbors=5):
    """
    Étape 3a : Instantiate + Fit.
    Construit un classifieur KNN et l'entraîne sur le train set.
    """
    model = KNeighborsClassifier(n_neighbors=n_neighbors)
    model.fit(X_train, y_train)
    return model


def predict(model, X_test):
    """
    Étape 3b : Predict.
    Applique le modèle entraîné sur le test set pour obtenir les
    prédictions de classe.
    """
    return model.predict(X_test)


def compute_elbow_curve(X_train, X_test, y_train, y_test, k_range=range(1, 21)):
    """
    Reproduit la "Tuning the Engine: Choosing K" du PDF (page 12) :
    pour chaque valeur de K, entraîne un modèle et mesure son taux
    d'erreur sur le test set. Sert à visualiser le compromis
    overfitting (K trop petit) / underfitting (K trop grand).
    """
    error_rates = []
    for k in k_range:
        model = train_knn(X_train, y_train, n_neighbors=k)
        preds = predict(model, X_test)
        error_rate = (preds != y_test).mean()
        error_rates.append(error_rate)
    return list(k_range), error_rates


# --------------------------------------------------------------------------
# ÉTAPE 4 : OUTPUT VALIDATION
# --------------------------------------------------------------------------
# Rappel (pages 14-16 du PDF) :
#   "Accuracy Mirage" : sur un dataset déséquilibré, un modèle qui prédit
#   toujours la classe majoritaire peut afficher 99% d'accuracy tout en
#   étant inutile. Il faut regarder plus loin.
#
#   Confusion Matrix : pour chaque classe, on distingue
#     TP (True Positive)  : bien classé comme positif
#     FP (False Positive) : faux positif  -> Erreur de Type I (fausse alerte)
#     FN (False Negative) : faux négatif  -> Erreur de Type II (raté)
#     TN (True Negative)  : bien classé comme négatif
#
#   F1 Score : moyenne harmonique entre Precision et Recall.
#     Precision -> fiabilité des prédictions positives (ex: filtre anti-spam)
#     Recall    -> capacité à détecter tous les positifs (ex: diagnostic médical)


def evaluate_model(y_test, y_pred, target_names):
    """
    Étape 4 : Output.
    Calcule et affiche l'accuracy, la confusion matrix et le F1 score
    (macro-average, pour donner un poids égal à chaque classe).
    """
    accuracy = accuracy_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred, average="macro")
    matrix = confusion_matrix(y_test, y_pred)
    report = classification_report(y_test, y_pred, target_names=target_names)

    return {
        "accuracy": accuracy,
        "f1_macro": f1,
        "confusion_matrix": matrix,
        "report": report,
    }


def render_dataset_panel(df):
    """Panneau d'aperçu du dataset."""
    counts = df["species"].value_counts()
    lines = [
        f"[bold]{df.shape[0]}[/bold] samples · [bold]{df.shape[1] - 1}[/bold] features · "
        f"[bold]{df['species'].nunique()}[/bold] classes",
        "",
    ]
    for species, count in counts.items():
        lines.append(f"  {species:<12} [steel_blue1]{'█' * count}[/steel_blue1] {count}")
    return Panel(
        "\n".join(lines),
        title="[bold steel_blue1]Iris Dataset[/bold steel_blue1]",
        border_style="steel_blue1",
        box=box.ROUNDED,
        padding=(1, 2),
    )


def render_elbow_chart(k_values, error_rates, chosen_k):
    """
    Petit graphique en barres ASCII du taux d'erreur par valeur de K,
    pour visualiser la méthode du coude directement dans le terminal.
    """
    max_err = max(error_rates) if max(error_rates) > 0 else 1
    bar_width = 30
    lines = []
    for k, err in zip(k_values, error_rates):
        filled = round((err / max_err) * bar_width) if max_err > 0 else 0
        marker = " <- chosen" if k == chosen_k else ""
        color = "gold3" if k == chosen_k else "grey50"
        bar = "█" * filled if filled > 0 else ""
        lines.append(f"[{color}]k={k:<3}[/{color}] [{color}]{bar:<30}[/{color}] {err:.1%}{marker}")
    return Panel(
        "\n".join(lines),
        title="[bold gold3]Choosing K — Error Rate by Neighbors[/bold gold3]",
        border_style="gold3",
        box=box.ROUNDED,
        padding=(1, 2),
    )


def render_confusion_matrix(matrix, target_names):
    """Table rich pour la confusion matrix, diagonale mise en valeur."""
    table = Table(
        title="Confusion Matrix",
        box=box.ROUNDED,
        border_style="grey42",
        header_style="bold white on grey15",
        title_style="bold white",
    )
    table.add_column("Actual \\ Predicted", style="bold")
    for name in target_names:
        table.add_column(name, justify="center")

    for i, row in enumerate(matrix):
        cells = []
        for j, val in enumerate(row):
            if i == j:
                cells.append(f"[bold green]{val}[/bold green]")
            elif val > 0:
                cells.append(f"[bold red]{val}[/bold red]")
            else:
                cells.append(f"[grey35]{val}[/grey35]")
        table.add_row(target_names[i], *cells)

    return table


def render_metrics_panel(accuracy, f1):
    return Panel(
        f"[bold]Accuracy[/bold]        {accuracy:.2%}\n"
        f"[bold]F1 Score (macro)[/bold] {f1:.2%}\n\n"
        f"[dim]Accuracy alone can be misleading on imbalanced data —\n"
        f"F1 balances precision (reliability) and recall (coverage).[/dim]",
        title="[bold white]Model Evaluation[/bold white]",
        border_style="green" if accuracy > 0.9 else "gold3",
        box=box.ROUNDED,
        padding=(1, 2),
    )


if __name__ == "__main__":
    console.print()
    console.print(
        Panel(
            "[bold]Supervised learning pipeline[/bold] — train a K-Nearest Neighbors "
            "classifier on the Iris dataset and validate it beyond raw accuracy.",
            title="[bold steel_blue1]Data Classification Using AI[/bold steel_blue1]",
            subtitle="DecodeLabs — Project 2",
            border_style="steel_blue1",
            box=box.ROUNDED,
            padding=(1, 3),
        )
    )
    console.print()

    df, X, y, target_names = load_dataset()
    console.print(render_dataset_panel(df))
    console.print()

    with Progress(
        SpinnerColumn(style="steel_blue1"),
        TextColumn("[progress.description]{task.description}"),
        console=console,
        transient=True,
    ) as progress:
        task = progress.add_task("Splitting and scaling data...", total=None)
        X_train, X_test, y_train, y_test, scaler = split_and_scale(X, y)
        time.sleep(0.3)

        progress.update(task, description="Searching for the best K (elbow method)...")
        k_values, error_rates = compute_elbow_curve(X_train, X_test, y_train, y_test)
        # On évite K=1 : un seul voisin capte le bruit plutôt que le vrai
        # pattern (overfitting, cf. PDF page 12 "K=1 Noise/Overfitting").
        # K=5 est la valeur recommandée par le PDF (page 7 et 13) : elle
        # offre un bon compromis entre sensibilité au bruit et généralisation.
        best_k = 5
        time.sleep(0.3)

        progress.update(task, description=f"Training KNN classifier (k={best_k})...")
        model = train_knn(X_train, y_train, n_neighbors=best_k)
        y_pred = predict(model, X_test)
        time.sleep(0.3)

        progress.update(task, description="Evaluating model performance...")
        results = evaluate_model(y_test, y_pred, target_names)
        time.sleep(0.3)

    console.print(f"[dim]Training set: {X_train.shape[0]} samples · Test set: {X_test.shape[0]} samples[/dim]")
    console.print()
    console.print(render_elbow_chart(k_values, error_rates, best_k))
    console.print(
        "[dim]Note: k=1 often shows the lowest error here, but it overfits to noise "
        "(it memorizes single neighbors instead of learning a general pattern).\n"
        f"k={best_k} is used as a more robust, generalizable choice.[/dim]"
    )
    console.print()
    console.print(render_metrics_panel(results["accuracy"], results["f1_macro"]))
    console.print()
    console.print(render_confusion_matrix(results["confusion_matrix"], target_names))
    console.print()
