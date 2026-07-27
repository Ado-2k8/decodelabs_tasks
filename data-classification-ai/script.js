const IRIS_DATA = [{"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 5.1, "sepal_width": 3.5, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 4.9, "sepal_width": 3.0, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.2, "sepal_length": 4.7, "sepal_width": 3.2, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 4.6, "sepal_width": 3.1, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 5.0, "sepal_width": 3.6, "species": "setosa"}, {"petal_length": 1.7, "petal_width": 0.4, "sepal_length": 5.4, "sepal_width": 3.9, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.3, "sepal_length": 4.6, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 5.0, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 4.4, "sepal_width": 2.9, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.1, "sepal_length": 4.9, "sepal_width": 3.1, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 5.4, "sepal_width": 3.7, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.2, "sepal_length": 4.8, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.1, "sepal_length": 4.8, "sepal_width": 3.0, "species": "setosa"}, {"petal_length": 1.1, "petal_width": 0.1, "sepal_length": 4.3, "sepal_width": 3.0, "species": "setosa"}, {"petal_length": 1.2, "petal_width": 0.2, "sepal_length": 5.8, "sepal_width": 4.0, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.4, "sepal_length": 5.7, "sepal_width": 4.4, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.4, "sepal_length": 5.4, "sepal_width": 3.9, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.3, "sepal_length": 5.1, "sepal_width": 3.5, "species": "setosa"}, {"petal_length": 1.7, "petal_width": 0.3, "sepal_length": 5.7, "sepal_width": 3.8, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.3, "sepal_length": 5.1, "sepal_width": 3.8, "species": "setosa"}, {"petal_length": 1.7, "petal_width": 0.2, "sepal_length": 5.4, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.4, "sepal_length": 5.1, "sepal_width": 3.7, "species": "setosa"}, {"petal_length": 1.0, "petal_width": 0.2, "sepal_length": 4.6, "sepal_width": 3.6, "species": "setosa"}, {"petal_length": 1.7, "petal_width": 0.5, "sepal_length": 5.1, "sepal_width": 3.3, "species": "setosa"}, {"petal_length": 1.9, "petal_width": 0.2, "sepal_length": 4.8, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.2, "sepal_length": 5.0, "sepal_width": 3.0, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.4, "sepal_length": 5.0, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 5.2, "sepal_width": 3.5, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 5.2, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.2, "sepal_length": 4.7, "sepal_width": 3.2, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.2, "sepal_length": 4.8, "sepal_width": 3.1, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.4, "sepal_length": 5.4, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.1, "sepal_length": 5.2, "sepal_width": 4.1, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 5.5, "sepal_width": 4.2, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 4.9, "sepal_width": 3.1, "species": "setosa"}, {"petal_length": 1.2, "petal_width": 0.2, "sepal_length": 5.0, "sepal_width": 3.2, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.2, "sepal_length": 5.5, "sepal_width": 3.5, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.1, "sepal_length": 4.9, "sepal_width": 3.6, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.2, "sepal_length": 4.4, "sepal_width": 3.0, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 5.1, "sepal_width": 3.4, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.3, "sepal_length": 5.0, "sepal_width": 3.5, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.3, "sepal_length": 4.5, "sepal_width": 2.3, "species": "setosa"}, {"petal_length": 1.3, "petal_width": 0.2, "sepal_length": 4.4, "sepal_width": 3.2, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.6, "sepal_length": 5.0, "sepal_width": 3.5, "species": "setosa"}, {"petal_length": 1.9, "petal_width": 0.4, "sepal_length": 5.1, "sepal_width": 3.8, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.3, "sepal_length": 4.8, "sepal_width": 3.0, "species": "setosa"}, {"petal_length": 1.6, "petal_width": 0.2, "sepal_length": 5.1, "sepal_width": 3.8, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 4.6, "sepal_width": 3.2, "species": "setosa"}, {"petal_length": 1.5, "petal_width": 0.2, "sepal_length": 5.3, "sepal_width": 3.7, "species": "setosa"}, {"petal_length": 1.4, "petal_width": 0.2, "sepal_length": 5.0, "sepal_width": 3.3, "species": "setosa"}, {"petal_length": 4.7, "petal_width": 1.4, "sepal_length": 7.0, "sepal_width": 3.2, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.5, "sepal_length": 6.4, "sepal_width": 3.2, "species": "versicolor"}, {"petal_length": 4.9, "petal_width": 1.5, "sepal_length": 6.9, "sepal_width": 3.1, "species": "versicolor"}, {"petal_length": 4.0, "petal_width": 1.3, "sepal_length": 5.5, "sepal_width": 2.3, "species": "versicolor"}, {"petal_length": 4.6, "petal_width": 1.5, "sepal_length": 6.5, "sepal_width": 2.8, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.3, "sepal_length": 5.7, "sepal_width": 2.8, "species": "versicolor"}, {"petal_length": 4.7, "petal_width": 1.6, "sepal_length": 6.3, "sepal_width": 3.3, "species": "versicolor"}, {"petal_length": 3.3, "petal_width": 1.0, "sepal_length": 4.9, "sepal_width": 2.4, "species": "versicolor"}, {"petal_length": 4.6, "petal_width": 1.3, "sepal_length": 6.6, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 3.9, "petal_width": 1.4, "sepal_length": 5.2, "sepal_width": 2.7, "species": "versicolor"}, {"petal_length": 3.5, "petal_width": 1.0, "sepal_length": 5.0, "sepal_width": 2.0, "species": "versicolor"}, {"petal_length": 4.2, "petal_width": 1.5, "sepal_length": 5.9, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.0, "petal_width": 1.0, "sepal_length": 6.0, "sepal_width": 2.2, "species": "versicolor"}, {"petal_length": 4.7, "petal_width": 1.4, "sepal_length": 6.1, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 3.6, "petal_width": 1.3, "sepal_length": 5.6, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 4.4, "petal_width": 1.4, "sepal_length": 6.7, "sepal_width": 3.1, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.5, "sepal_length": 5.6, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.1, "petal_width": 1.0, "sepal_length": 5.8, "sepal_width": 2.7, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.5, "sepal_length": 6.2, "sepal_width": 2.2, "species": "versicolor"}, {"petal_length": 3.9, "petal_width": 1.1, "sepal_length": 5.6, "sepal_width": 2.5, "species": "versicolor"}, {"petal_length": 4.8, "petal_width": 1.8, "sepal_length": 5.9, "sepal_width": 3.2, "species": "versicolor"}, {"petal_length": 4.0, "petal_width": 1.3, "sepal_length": 6.1, "sepal_width": 2.8, "species": "versicolor"}, {"petal_length": 4.9, "petal_width": 1.5, "sepal_length": 6.3, "sepal_width": 2.5, "species": "versicolor"}, {"petal_length": 4.7, "petal_width": 1.2, "sepal_length": 6.1, "sepal_width": 2.8, "species": "versicolor"}, {"petal_length": 4.3, "petal_width": 1.3, "sepal_length": 6.4, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 4.4, "petal_width": 1.4, "sepal_length": 6.6, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.8, "petal_width": 1.4, "sepal_length": 6.8, "sepal_width": 2.8, "species": "versicolor"}, {"petal_length": 5.0, "petal_width": 1.7, "sepal_length": 6.7, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.5, "sepal_length": 6.0, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 3.5, "petal_width": 1.0, "sepal_length": 5.7, "sepal_width": 2.6, "species": "versicolor"}, {"petal_length": 3.8, "petal_width": 1.1, "sepal_length": 5.5, "sepal_width": 2.4, "species": "versicolor"}, {"petal_length": 3.7, "petal_width": 1.0, "sepal_length": 5.5, "sepal_width": 2.4, "species": "versicolor"}, {"petal_length": 3.9, "petal_width": 1.2, "sepal_length": 5.8, "sepal_width": 2.7, "species": "versicolor"}, {"petal_length": 5.1, "petal_width": 1.6, "sepal_length": 6.0, "sepal_width": 2.7, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.5, "sepal_length": 5.4, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.5, "petal_width": 1.6, "sepal_length": 6.0, "sepal_width": 3.4, "species": "versicolor"}, {"petal_length": 4.7, "petal_width": 1.5, "sepal_length": 6.7, "sepal_width": 3.1, "species": "versicolor"}, {"petal_length": 4.4, "petal_width": 1.3, "sepal_length": 6.3, "sepal_width": 2.3, "species": "versicolor"}, {"petal_length": 4.1, "petal_width": 1.3, "sepal_length": 5.6, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.0, "petal_width": 1.3, "sepal_length": 5.5, "sepal_width": 2.5, "species": "versicolor"}, {"petal_length": 4.4, "petal_width": 1.2, "sepal_length": 5.5, "sepal_width": 2.6, "species": "versicolor"}, {"petal_length": 4.6, "petal_width": 1.4, "sepal_length": 6.1, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.0, "petal_width": 1.2, "sepal_length": 5.8, "sepal_width": 2.6, "species": "versicolor"}, {"petal_length": 3.3, "petal_width": 1.0, "sepal_length": 5.0, "sepal_width": 2.3, "species": "versicolor"}, {"petal_length": 4.2, "petal_width": 1.3, "sepal_length": 5.6, "sepal_width": 2.7, "species": "versicolor"}, {"petal_length": 4.2, "petal_width": 1.2, "sepal_length": 5.7, "sepal_width": 3.0, "species": "versicolor"}, {"petal_length": 4.2, "petal_width": 1.3, "sepal_length": 5.7, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 4.3, "petal_width": 1.3, "sepal_length": 6.2, "sepal_width": 2.9, "species": "versicolor"}, {"petal_length": 3.0, "petal_width": 1.1, "sepal_length": 5.1, "sepal_width": 2.5, "species": "versicolor"}, {"petal_length": 4.1, "petal_width": 1.3, "sepal_length": 5.7, "sepal_width": 2.8, "species": "versicolor"}, {"petal_length": 6.0, "petal_width": 2.5, "sepal_length": 6.3, "sepal_width": 3.3, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 1.9, "sepal_length": 5.8, "sepal_width": 2.7, "species": "virginica"}, {"petal_length": 5.9, "petal_width": 2.1, "sepal_length": 7.1, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.6, "petal_width": 1.8, "sepal_length": 6.3, "sepal_width": 2.9, "species": "virginica"}, {"petal_length": 5.8, "petal_width": 2.2, "sepal_length": 6.5, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 6.6, "petal_width": 2.1, "sepal_length": 7.6, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 4.5, "petal_width": 1.7, "sepal_length": 4.9, "sepal_width": 2.5, "species": "virginica"}, {"petal_length": 6.3, "petal_width": 1.8, "sepal_length": 7.3, "sepal_width": 2.9, "species": "virginica"}, {"petal_length": 5.8, "petal_width": 1.8, "sepal_length": 6.7, "sepal_width": 2.5, "species": "virginica"}, {"petal_length": 6.1, "petal_width": 2.5, "sepal_length": 7.2, "sepal_width": 3.6, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 2.0, "sepal_length": 6.5, "sepal_width": 3.2, "species": "virginica"}, {"petal_length": 5.3, "petal_width": 1.9, "sepal_length": 6.4, "sepal_width": 2.7, "species": "virginica"}, {"petal_length": 5.5, "petal_width": 2.1, "sepal_length": 6.8, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.0, "petal_width": 2.0, "sepal_length": 5.7, "sepal_width": 2.5, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 2.4, "sepal_length": 5.8, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 5.3, "petal_width": 2.3, "sepal_length": 6.4, "sepal_width": 3.2, "species": "virginica"}, {"petal_length": 5.5, "petal_width": 1.8, "sepal_length": 6.5, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 6.7, "petal_width": 2.2, "sepal_length": 7.7, "sepal_width": 3.8, "species": "virginica"}, {"petal_length": 6.9, "petal_width": 2.3, "sepal_length": 7.7, "sepal_width": 2.6, "species": "virginica"}, {"petal_length": 5.0, "petal_width": 1.5, "sepal_length": 6.0, "sepal_width": 2.2, "species": "virginica"}, {"petal_length": 5.7, "petal_width": 2.3, "sepal_length": 6.9, "sepal_width": 3.2, "species": "virginica"}, {"petal_length": 4.9, "petal_width": 2.0, "sepal_length": 5.6, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 6.7, "petal_width": 2.0, "sepal_length": 7.7, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 4.9, "petal_width": 1.8, "sepal_length": 6.3, "sepal_width": 2.7, "species": "virginica"}, {"petal_length": 5.7, "petal_width": 2.1, "sepal_length": 6.7, "sepal_width": 3.3, "species": "virginica"}, {"petal_length": 6.0, "petal_width": 1.8, "sepal_length": 7.2, "sepal_width": 3.2, "species": "virginica"}, {"petal_length": 4.8, "petal_width": 1.8, "sepal_length": 6.2, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 4.9, "petal_width": 1.8, "sepal_length": 6.1, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.6, "petal_width": 2.1, "sepal_length": 6.4, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 5.8, "petal_width": 1.6, "sepal_length": 7.2, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 6.1, "petal_width": 1.9, "sepal_length": 7.4, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 6.4, "petal_width": 2.0, "sepal_length": 7.9, "sepal_width": 3.8, "species": "virginica"}, {"petal_length": 5.6, "petal_width": 2.2, "sepal_length": 6.4, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 1.5, "sepal_length": 6.3, "sepal_width": 2.8, "species": "virginica"}, {"petal_length": 5.6, "petal_width": 1.4, "sepal_length": 6.1, "sepal_width": 2.6, "species": "virginica"}, {"petal_length": 6.1, "petal_width": 2.3, "sepal_length": 7.7, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.6, "petal_width": 2.4, "sepal_length": 6.3, "sepal_width": 3.4, "species": "virginica"}, {"petal_length": 5.5, "petal_width": 1.8, "sepal_length": 6.4, "sepal_width": 3.1, "species": "virginica"}, {"petal_length": 4.8, "petal_width": 1.8, "sepal_length": 6.0, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.4, "petal_width": 2.1, "sepal_length": 6.9, "sepal_width": 3.1, "species": "virginica"}, {"petal_length": 5.6, "petal_width": 2.4, "sepal_length": 6.7, "sepal_width": 3.1, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 2.3, "sepal_length": 6.9, "sepal_width": 3.1, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 1.9, "sepal_length": 5.8, "sepal_width": 2.7, "species": "virginica"}, {"petal_length": 5.9, "petal_width": 2.3, "sepal_length": 6.8, "sepal_width": 3.2, "species": "virginica"}, {"petal_length": 5.7, "petal_width": 2.5, "sepal_length": 6.7, "sepal_width": 3.3, "species": "virginica"}, {"petal_length": 5.2, "petal_width": 2.3, "sepal_length": 6.7, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.0, "petal_width": 1.9, "sepal_length": 6.3, "sepal_width": 2.5, "species": "virginica"}, {"petal_length": 5.2, "petal_width": 2.0, "sepal_length": 6.5, "sepal_width": 3.0, "species": "virginica"}, {"petal_length": 5.4, "petal_width": 2.3, "sepal_length": 6.2, "sepal_width": 3.4, "species": "virginica"}, {"petal_length": 5.1, "petal_width": 1.8, "sepal_length": 5.9, "sepal_width": 3.0, "species": "virginica"}];
const MODEL_REPORT = {
  "accuracy": 0.9333,
  "f1_macro": 0.9327,
  "confusion_matrix": [
    [
      10,
      0,
      0
    ],
    [
      0,
      10,
      0
    ],
    [
      0,
      2,
      8
    ]
  ],
  "target_names": [
    "setosa",
    "versicolor",
    "virginica"
  ],
  "train_size": 120,
  "test_size": 30,
  "k": 5
};

const SPECIES_COLORS = {
  setosa: "#D2601A",
  versicolor: "#3E7C7C",
  virginica: "#1B2A4A",
};

/* ---------------- Plot setup ---------------- */

const svg = document.getElementById('plotSvg');
const PAD = 46;
const W = 560, H = 420;
const PLOT_W = W - PAD * 2, PLOT_H = H - PAD * 2;

const xExtent = [0.5, 7.2];   // petal length range
const yExtent = [0, 2.7];     // petal width range

function toSvgX(val) { return PAD + ((val - xExtent[0]) / (xExtent[1] - xExtent[0])) * PLOT_W; }
function toSvgY(val) { return H - PAD - ((val - yExtent[0]) / (yExtent[1] - yExtent[0])) * PLOT_H; }
function fromSvgX(px) { return xExtent[0] + ((px - PAD) / PLOT_W) * (xExtent[1] - xExtent[0]); }
function fromSvgY(py) { return yExtent[0] + ((H - PAD - py) / PLOT_H) * (yExtent[1] - yExtent[0]); }

function svgns(tag) { return document.createElementNS("http://www.w3.org/2000/svg", tag); }

function drawAxes() {
  const gAxes = svgns('g');

  const xAxis = svgns('line');
  xAxis.setAttribute('x1', PAD); xAxis.setAttribute('y1', H - PAD);
  xAxis.setAttribute('x2', W - PAD); xAxis.setAttribute('y2', H - PAD);
  xAxis.setAttribute('stroke', '#1B2A4A'); xAxis.setAttribute('stroke-width', '1');
  gAxes.appendChild(xAxis);

  const yAxis = svgns('line');
  yAxis.setAttribute('x1', PAD); yAxis.setAttribute('y1', PAD);
  yAxis.setAttribute('x2', PAD); yAxis.setAttribute('y2', H - PAD);
  yAxis.setAttribute('stroke', '#1B2A4A'); yAxis.setAttribute('stroke-width', '1');
  gAxes.appendChild(yAxis);

  const xLabel = svgns('text');
  xLabel.setAttribute('x', W / 2); xLabel.setAttribute('y', H - 8);
  xLabel.setAttribute('text-anchor', 'middle');
  xLabel.setAttribute('font-family', 'IBM Plex Mono, monospace');
  xLabel.setAttribute('font-size', '11'); xLabel.setAttribute('fill', '#8891A8');
  xLabel.textContent = 'petal length (cm)';
  gAxes.appendChild(xLabel);

  const yLabel = svgns('text');
  yLabel.setAttribute('x', -H / 2); yLabel.setAttribute('y', 14);
  yLabel.setAttribute('text-anchor', 'middle');
  yLabel.setAttribute('transform', 'rotate(-90)');
  yLabel.setAttribute('font-family', 'IBM Plex Mono, monospace');
  yLabel.setAttribute('font-size', '11'); yLabel.setAttribute('fill', '#8891A8');
  yLabel.textContent = 'petal width (cm)';
  gAxes.appendChild(yLabel);

  svg.appendChild(gAxes);
}

let dataCircles = [];

function drawPoints() {
  const g = svgns('g');
  g.setAttribute('id', 'pointsLayer');
  IRIS_DATA.forEach(pt => {
    const c = svgns('circle');
    const cx = toSvgX(pt.petal_length);
    const cy = toSvgY(pt.petal_width);
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', 4.5);
    c.setAttribute('fill', SPECIES_COLORS[pt.species]);
    c.setAttribute('fill-opacity', '0.55');
    c.setAttribute('stroke', SPECIES_COLORS[pt.species]);
    c.setAttribute('stroke-width', '1');
    g.appendChild(c);
    dataCircles.push({ el: c, pt, cx, cy });
  });
  svg.appendChild(g);
}

function renderLegend() {
  const legend = document.getElementById('legend');
  Object.entries(SPECIES_COLORS).forEach(([name, color]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-dot" style="background:${color}"></span>${name}`;
    legend.appendChild(item);
  });
}

drawAxes();
drawPoints();
renderLegend();

/* ---------------- KNN interaction ---------------- */

let overlayLayer = null;
let queryPoint = null;
let currentK = 5;

const kSlider = document.getElementById('kSlider');
const kValueEl = document.getElementById('kValue');
const voteCard = document.getElementById('voteCard');
const hintCard = document.getElementById('hintCard');
const voteTally = document.getElementById('voteTally');
const verdictValue = document.getElementById('verdictValue');

kSlider.addEventListener('input', () => {
  currentK = parseInt(kSlider.value, 10);
  kValueEl.textContent = currentK;
  if (queryPoint) runKnn();
});

svg.addEventListener('click', (e) => {
  const rect = svg.getBoundingClientRect();
  const scaleX = W / rect.width;
  const scaleY = H / rect.height;
  const px = (e.clientX - rect.left) * scaleX;
  const py = (e.clientY - rect.top) * scaleY;

  if (px < PAD || px > W - PAD || py < PAD || py > H - PAD) return;

  queryPoint = { petal_length: fromSvgX(px), petal_width: fromSvgY(py) };
  runKnn();
});

function distance(a, b) {
  const dl = a.petal_length - b.petal_length;
  const dw = a.petal_width - b.petal_width;
  return Math.sqrt(dl * dl + dw * dw);
}

function runKnn() {
  if (overlayLayer) overlayLayer.remove();
  overlayLayer = svgns('g');
  svg.appendChild(overlayLayer);

  const distances = IRIS_DATA.map(pt => ({ pt, dist: distance(queryPoint, pt) }));
  distances.sort((a, b) => a.dist - b.dist);
  const neighbors = distances.slice(0, currentK);

  const qx = toSvgX(queryPoint.petal_length);
  const qy = toSvgY(queryPoint.petal_width);

  neighbors.forEach(n => {
    const line = svgns('line');
    line.setAttribute('x1', qx); line.setAttribute('y1', qy);
    line.setAttribute('x2', toSvgX(n.pt.petal_length));
    line.setAttribute('y2', toSvgY(n.pt.petal_width));
    line.setAttribute('stroke', SPECIES_COLORS[n.pt.species]);
    line.setAttribute('stroke-width', '1.2');
    line.setAttribute('stroke-opacity', '0.55');
    overlayLayer.appendChild(line);

    const ring = svgns('circle');
    ring.setAttribute('cx', toSvgX(n.pt.petal_length));
    ring.setAttribute('cy', toSvgY(n.pt.petal_width));
    ring.setAttribute('r', 7);
    ring.setAttribute('fill', 'none');
    ring.setAttribute('stroke', SPECIES_COLORS[n.pt.species]);
    ring.setAttribute('stroke-width', '2');
    overlayLayer.appendChild(ring);
  });

  const query = svgns('circle');
  query.setAttribute('cx', qx); query.setAttribute('cy', qy);
  query.setAttribute('r', 7);
  query.setAttribute('fill', '#1B2A4A');
  query.setAttribute('stroke', '#F3F0E6');
  query.setAttribute('stroke-width', '2');
  overlayLayer.appendChild(query);

  const votes = { setosa: 0, versicolor: 0, virginica: 0 };
  neighbors.forEach(n => votes[n.pt.species]++);

  const winner = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];

  voteTally.innerHTML = '';
  Object.entries(votes).forEach(([species, count]) => {
    const pct = (count / currentK) * 100;
    const row = document.createElement('div');
    row.className = 'vote-row';
    row.innerHTML = `
      <span style="width:70px; color:${SPECIES_COLORS[species]}">${species}</span>
      <div class="vote-bar-track"><div class="vote-bar-fill" style="width:${pct}%; background:${SPECIES_COLORS[species]}"></div></div>
      <span class="vote-count">${count}</span>
    `;
    voteTally.appendChild(row);
  });

  verdictValue.textContent = winner;
  verdictValue.style.color = SPECIES_COLORS[winner];

  voteCard.style.display = 'block';
  hintCard.style.display = 'none';
}

/* ---------------- Model report ---------------- */

document.getElementById('reportAccuracy').textContent = (MODEL_REPORT.accuracy * 100).toFixed(2) + '%';
document.getElementById('reportF1').textContent = (MODEL_REPORT.f1_macro * 100).toFixed(2) + '%';
document.getElementById('reportSplit').textContent = `${MODEL_REPORT.train_size} / ${MODEL_REPORT.test_size}`;

function renderConfusionTable() {
  const table = document.getElementById('confusionTable');
  const names = MODEL_REPORT.target_names;
  const matrix = MODEL_REPORT.confusion_matrix;

  let html = '<tr><th>Actual \\ Predicted</th>' + names.map(n => `<th>${n}</th>`).join('') + '</tr>';
  matrix.forEach((row, i) => {
    html += `<tr><td class="rowlabel">${names[i]}</td>`;
    row.forEach((val, j) => {
      let cls = 'zero';
      if (val > 0 && i === j) cls = 'diag';
      else if (val > 0) cls = 'err';
      html += `<td class="${cls}">${val}</td>`;
    });
    html += '</tr>';
  });
  table.innerHTML = html;
}

renderConfusionTable();
