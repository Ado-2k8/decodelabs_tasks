# Rule-Based Chatbot

A simple rule-based chatbot that responds to predefined user inputs using plain if-else control flow. Built for **Project 1 — Rule-Based AI Chatbot** of the DecodeLabs Industrial Training Kit (Batch 2026).

The project ships in two forms that share the same underlying rule set:

- **`chatbot.py`** — an interactive command-line application with a styled terminal interface.
- **`web/index.html`** — a standalone, self-contained web chat interface.

Both implementations independently reproduce the same if-else logic, one in Python and one in JavaScript, so a given message always triggers the same rule in either version.

## Table of contents

- [Concept](#concept)
- [How it works](#how-it-works)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
  - [Command-line version](#command-line-version)
  - [Web version](#web-version)
- [Rule set](#rule-set)
- [Design notes](#design-notes)
- [Known limitations](#known-limitations)
- [Possible extensions](#possible-extensions)

## Concept

This chatbot does not use machine learning, embeddings, or any external API. It is a rule-based system: every reply is selected through a fixed chain of if-else conditions that check the user's message against predefined phrase lists. This is the simplest possible form of a conversational agent, and it is meant to make the underlying control-flow logic completely transparent rather than hide it behind a model.

## How it works

### Input normalization

Raw user input is lowercased and stripped of punctuation before being matched, so "Hello!", "hello", and "HELLO" all resolve to the same rule. This keeps the phrase lists short without requiring the user to type an exact, case-sensitive string.

### Rule matching (if-else chain)

The cleaned input is checked, in order, against a series of phrase lists. The first list it matches determines the reply category:

1. Exit commands
2. Greetings
3. "How are you" questions
4. Questions about the bot's name
5. Thanks / acknowledgements
6. Help requests
7. Fallback (no rule matched)

Because this is a simple linear if-else chain rather than a scored classifier, the order of the checks matters: exit commands are checked first so that a message like "bye" is never accidentally treated as anything else.

### Response selection

Most categories have more than one possible reply. When a rule matches, the response is chosen at random from that category's list with `random.choice()` (Python) or an equivalent random pick (JavaScript), so the conversation does not feel mechanically repetitive even though the underlying logic is fully deterministic in which *category* it selects.

### Continuous loop

The command-line version runs inside a `while True` loop that keeps prompting for input until the user types an exit command (`bye`, `exit`, `quit`, `goodbye`, or `see you`), at which point the loop breaks and the program ends. The web version keeps the chat open indefinitely, since there is no process to terminate, but produces the same farewell reply.

## Project structure

```
rule-based-chatbot/
├── chatbot.py            Interactive CLI (Python, rich-based interface)
├── web/
│   └── index.html        Standalone web chat interface (HTML/CSS/JS, no build step)
└── README.md              This file
```

## Getting started

### Command-line version

**Requirements:** Python 3.8+ and the `rich` package.

```bash
pip install rich
python3 chatbot.py
```

Type a message and press Enter. Each bot reply is shown in its own panel along with a small tag naming the rule that matched your message (for example `rule matched: GREETING`). Type `bye` (or `exit`, `quit`, `goodbye`, `see you`) to end the session.

Example session:

```
You: Hello!
Deco: Hey! Good to see you.
rule matched: GREETING

You: What's your name?
Deco: I'm Deco, your rule-based assistant.
rule matched: NAME

You: bye
Deco: See you soon!
rule matched: EXIT
```

### Web version

**Requirements:** any modern web browser. No server, build step, or dependency installation is needed — the rule set and response logic are embedded directly in the HTML file.

Open `web/index.html` directly in a browser, or serve it locally:

```bash
cd web
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

Type a message in the input field and press Enter (or click Send), or click one of the quick-reply buttons below the chat log to try a preset message. Every bot message is followed by a small tag naming the rule that produced it, exactly like the CLI version.

## Rule set

| Rule | Example trigger phrases | Sample reply |
|---|---|---|
| Greeting | "hi", "hello", "good morning" | "Hey! Good to see you." |
| Exit | "bye", "quit", "see you" | "Goodbye! Have a great day." |
| How are you | "how are you", "how's it going" | "Doing great, thanks! How about you?" |
| Name | "what's your name", "who are you" | "I'm Deco, your rule-based assistant." |
| Thanks | "thanks", "thank you" | "You're welcome!" |
| Help | "help", "what can you do" | Lists the categories the bot understands |
| Fallback | anything unmatched | "Sorry, I didn't understand that. Could you rephrase?" |

## Design notes

The web interface is designed around the project's actual mechanism: instead of hiding how the reply was produced, every bot bubble is followed by a small rule tag that names the exact if-else branch that fired, in the same coral accent used for the exit and greeting rules and a muted violet for the informational ones. This turns the chat log into a live trace of the control flow rather than a generic messaging UI. The palette pairs a deep violet-black background with a warm coral accent (bot identity, key actions) and a cool light-violet accent (user messages), set in Space Grotesk for headings, Inter for body copy, and IBM Plex Mono for the rule tags and technical labels.

## Known limitations

- **Exact phrase matching only.** The bot matches against fixed phrase lists; it has no way to understand paraphrases, typos, or intents it wasn't explicitly given a rule for. "Hiya" will not be recognized as a greeting unless it is added to the list.
- **No conversation memory.** Each message is evaluated independently; the bot cannot refer back to anything said earlier in the conversation.
- **No real natural language understanding.** This is a rule-based system by design, not a language model — its scope is intentionally limited to the categories listed above.

## Possible extensions

- Keyword-based partial matching (e.g. checking if a greeting word appears anywhere in the message rather than requiring an exact match).
- A small conversation memory to personalize replies (e.g. remembering the user's name once given).
- Additional rule categories (jokes, small talk, FAQ-style answers).
- Logging unmatched inputs to identify which new rules would add the most value.
