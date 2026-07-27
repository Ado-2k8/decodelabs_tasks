# DecodeLabs Tasks — Industrial Training Kit (Batch 2026)

This repository contains the tasks completed for the DecodeLabs Industrial Training Kit, an artificial intelligence internship program. Each task is a self-contained project exploring a different approach to building intelligent systems, from hand-written rules to supervised learning to content-based recommendation.

## Tasks

| # | Project | Core concept | Folder |
|---|---|---|---|
| 1 | Rule-Based AI Chatbot | If-else control flow, no learning involved | [`rule-based-chatbot/`](./rule-based-chatbot) |
| 2 | Data Classification Using AI | Supervised learning (KNN) on the Iris dataset | [`data-classification-ai/`](./data-classification-ai) |
| 3 | AI Recommendation Logic | Content-based filtering (TF-IDF + cosine similarity) | [`ai-recommendation-logic/`](./ai-recommendation-logic) |

Each folder contains its own detailed README with the project's concept, algorithm walkthrough, setup instructions, and design notes.

## Progression across tasks

The three tasks build on each other conceptually:

- **Task 1** solves classification by writing the decision rules by hand — the logic is entirely explicit and fixed.
- **Task 2** replaces hand-written rules with a model that learns its own decision logic from labeled historical data (supervised learning), and introduces proper validation (accuracy is not enough).
- **Task 3** applies a similar "compare and score" idea to a different problem: instead of classifying an item into a fixed category, it ranks many candidate items by how well they align with a user profile (recommendation).

## Common project structure

Every task follows the same overall shape:

```
<task-folder>/
├── <main_script>.py     Command-line entry point (Python)
├── web/                   Standalone web interface (HTML/CSS/JS, no build step)
└── README.md               Task-specific documentation
```

Each command-line script uses [`rich`](https://github.com/Textualize/rich) for a styled terminal interface, and each web interface is self-contained (no server, framework, or build step required) so it can be opened directly in a browser or served with Python's built-in HTTP server.

## Running a task locally

General pattern for any task folder:

```bash
cd <task-folder>
pip install -r requirements.txt   # see that task's README for the exact packages
python classifier.py               # or chatbot.py / recommender.py
```

For the web interface of any task:

```bash
cd <task-folder>/web
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. See each task's own README for exact dependencies and commands.

## Author

Adorée Kpenonhoun — DecodeLabs Industrial Training Kit, Batch 2026.
