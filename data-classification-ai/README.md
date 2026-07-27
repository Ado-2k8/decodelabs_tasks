# Iris Classifier

A supervised learning pipeline that trains a K-Nearest Neighbors (KNN) classifier to recognize Iris flower species from measurements, and validates it beyond raw accuracy. Built for **Project 2 — Data Classification Using AI** of the DecodeLabs Industrial Training Kit (Batch 2026).

The project ships in two forms:

- **`classifier.py`** — an interactive command-line pipeline with a styled terminal interface, using scikit-learn.
- **`web/`** — a standalone web interface with a live, interactive K-Nearest Neighbors visualizer built in vanilla JavaScript, plus a static report of the trained pipeline's real results.

The web visualizer reimplements the KNN decision rule (Euclidean distance + majority vote) directly in JavaScript over the real 150-sample dataset, so its predictions reflect the same logic as the Python model, even though the two run independently.

## Table of contents

- [Concept](#concept)
- [How the pipeline works](#how-the-pipeline-works)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
  - [Command-line version](#command-line-version)
  - [Web version](#web-version)
- [Dataset](#dataset)
- [Design notes](#design-notes)
- [Known limitations](#known-limitations)
- [Possible extensions](#possible-extensions)

## Concept

Project 1 solved classification with hand-written if-else rules. This project replaces that approach with **supervised learning**: instead of writing the rules by hand, the model is shown 120 already-labeled examples and learns to recognize the pattern that separates the three Iris species, then is tested on 30 examples it has never seen. This is the fundamental shift from heuristics to a model that derives its own decision logic from historical data.

## How the pipeline works

The project follows the input-process-output framework used throughout this training kit.

### Input: dataset and feature scaling

The Iris dataset (150 samples, 4 numeric features, 3 balanced classes of 50 samples each) is loaded and briefly explored — shape, class distribution, and summary statistics — before any modeling happens.

KNN classifies by measuring distances between points, so every feature needs to be on a comparable scale; otherwise a feature with naturally larger raw values (like petal length in centimeters vs. a 0-1 ratio) would dominate the distance calculation regardless of its actual relevance. `StandardScaler` addresses this by rescaling every feature to a mean of 0 and a variance of 1.

### Process: train-test split and the KNN algorithm

The dataset is split into a training set (80%, used to let the model learn) and a test set (20%, held out for validation), with `stratify=y` to keep the class balance identical in both sets and `shuffle=True` to remove any ordering bias in the original data. The scaler is fit only on the training data and then applied to both sets, to avoid leaking information from the test set into the fitting process.

The classifier itself is K-Nearest Neighbors, based on a simple proximity principle: to classify a new point, look at its K closest neighbors among the labeled training data and assign the majority class among them. The scikit-learn workflow follows three verbs:

```python
model = KNeighborsClassifier(n_neighbors=5)  # Instantiate
model.fit(X_train, y_train)                   # Fit
predictions = model.predict(X_test)           # Predict
```

**Choosing K.** The CLI computes an error-rate curve across K = 1 to 20 (the "elbow method"). K = 1 typically shows the lowest error on this dataset, but it is a misleading choice: with only one neighbor consulted, the model reacts to individual noisy points instead of a general pattern (overfitting). K = 5 is used as a more robust default, consistent with the scikit-learn workflow shown in the source material.

### Output: validation beyond accuracy

The project deliberately does not stop at a single accuracy number. On an imbalanced dataset, a model that always predicts the majority class can score a misleadingly high accuracy while being practically useless — referred to in the source material as the "accuracy mirage." To look past that:

- The **confusion matrix** breaks predictions down per class into true positives, false positives (Type I errors), false negatives (Type II errors), and true negatives, showing exactly which classes get confused with which.
- The **F1 score** (macro-averaged, so every class counts equally regardless of size) balances precision (how trustworthy a positive prediction is) against recall (how many actual positives get caught) into a single number.

## Project structure

```
data-classification-ai/
├── classifier.py       Interactive CLI pipeline (Python, scikit-learn, rich)
├── web/
│   ├── index.html        Page structure and embedded dataset/report JSON
│   ├── style.css          Blueprint-inspired visual styling
│   └── script.js          KNN visualizer logic and report rendering
└── README.md               This file
```

## Getting started

### Command-line version

**Requirements:** Python 3.8+, `scikit-learn`, `pandas`, and `rich`.

```bash
pip install scikit-learn pandas rich
python3 classifier.py
```

Running the script prints, in order: a dataset overview panel, the K-selection error curve with a note on why K = 1 is avoided, the trained model's accuracy and F1 score, and a color-coded confusion matrix (correct predictions on the diagonal in green, misclassifications in red).

### Web version

**Requirements:** any modern web browser. No server, build step, or dependency installation is needed — the dataset and the trained pipeline's results are embedded directly as JSON inside `index.html`.

Open `web/index.html` directly in a browser, or serve the folder locally:

```bash
cd web
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

The page has two parts:

1. **Neighborhood voting** — a scatter plot of all 150 real Iris samples (petal length vs. petal width, the two most class-separable features). Click anywhere on the plot to drop a query point; the visualizer computes real Euclidean distances to every sample, connects the K nearest ones, tallies their species as votes, and displays the predicted class. The K slider (1-15) lets you see how the neighborhood size changes the outcome.
2. **Trained pipeline report** — a static summary of the actual Python model's performance (accuracy, F1 score, train/test split size, and the full confusion matrix), generated from a real run of `classifier.py` so the numbers match what the CLI prints.

## Dataset

The Iris dataset is a classic, balanced benchmark: 150 samples split evenly across three species (Setosa, Versicolor, Virginica), each described by four measurements in centimeters (sepal length, sepal width, petal length, petal width). It is loaded directly from `sklearn.datasets.load_iris()`, so no external file is required.

## Design notes

The web interface deliberately mirrors the visual language of the project's own source material, which presents Project 2 through hand-drafted, blueprint-style diagrams (grid paper, navy ink linework, orange highlights) under headings like "Architectural Paradigms" and "The Master Blueprint." The interface reuses that language directly: a cream graph-paper background, navy ink for structure and text, burnt orange for the primary accent (Setosa, key actions), and teal for the secondary accent (Versicolor, positive metrics), set in Space Grotesk for headings, Inter for body copy, and IBM Plex Mono for axis labels, tags, and data. The scatter plot itself is the signature element: rather than illustrating the proximity principle abstractly, it lets the reader trigger it directly against real data.

## Known limitations

- **2D visualization, 4D model.** The web visualizer classifies using only two of the four available features (petal length and width) so the neighborhood can be drawn on a 2D plot. These two happen to separate the three species almost perfectly on their own, but the actual trained Python model (and its reported accuracy/F1/confusion matrix) uses all four features.
- **Small, fixed dataset.** With 150 samples and well-separated classes, Iris is a forgiving benchmark; the same pipeline would need more careful tuning and validation on noisier, less separable, or larger real-world data.
- **Single train-test split.** The reported metrics come from one 80/20 split (fixed random seed for reproducibility) rather than cross-validation, so they carry some variance that a k-fold evaluation would smooth out.

## Possible extensions

- Cross-validation (e.g. k-fold) instead of a single train-test split, for a more stable performance estimate.
- Letting the web visualizer choose between feature pairs (e.g. sepal vs. petal measurements) to compare separability.
- Trying alternative classifiers (logistic regression, decision trees, SVM) on the same pipeline and comparing their confusion matrices.
- Extending toward the "emerging horizons" mentioned in the source material: moving from tabular data classification toward computer vision with convolutional neural networks.
