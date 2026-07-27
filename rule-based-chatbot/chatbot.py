"""
Project 1 - Rule-Based AI Chatbot
DecodeLabs Industrial Training Kit - Batch 2026

Goal: create a simple rule-based chatbot that responds to predefined
user inputs, using if-else control flow and a continuous loop.
"""

import random
import string
import time
from datetime import datetime

from rich.console import Console
from rich.panel import Panel
from rich import box
from rich.text import Text

console = Console()

BOT_NAME = "Deco"

# ──────────────────────────────────────────────
# Rule labels & colours (used in the UI tag)
# ──────────────────────────────────────────────
RULE_LABELS = {
    "greeting":   "GREETING",
    "exit":       "EXIT",
    "how_are_you":"HOW_ARE_YOU",
    "name":       "NAME",
    "thanks":     "THANKS",
    "help":       "HELP",
    "time":       "TIME",
    "joke":       "JOKE",
    "fallback":   "FALLBACK",
}
RULE_COLORS = {
    "greeting":    "#FF6B4A",
    "exit":        "#FF6B4A",
    "how_are_you": "light_slate_blue",
    "name":        "light_slate_blue",
    "thanks":      "light_slate_blue",
    "help":        "light_slate_blue",
    "time":        "light_slate_blue",
    "joke":        "light_slate_blue",
    "fallback":    "grey50",
}

# ──────────────────────────────────────────────
# Intent keyword lists
# ──────────────────────────────────────────────
EXIT_COMMANDS  = ["bye", "exit", "quit", "goodbye", "see you"]
GREETINGS      = ["hi", "hello", "hey", "yo", "hola", "good morning", "good evening"]
THANKS         = ["thanks", "thank you", "thx", "appreciate it"]
HOW_ARE_YOU    = ["how are you", "how are you doing", "hows it going", "how's it going"]
NAME_QUESTIONS = ["what is your name", "whats your name", "what's your name", "who are you"]
HELP_REQUESTS  = ["help", "what can you do", "commands", "menu"]
TIME_REQUESTS  = ["what time is it", "what is the time", "current time", "tell me the time",
                  "whats the time", "what's the time"]
JOKE_REQUESTS  = ["tell me a joke", "joke", "make me laugh", "say something funny",
                  "got any jokes"]

# ──────────────────────────────────────────────
# Response pools
# ──────────────────────────────────────────────
GREETING_RESPONSES = [
    f"Hello! I'm {BOT_NAME}. How can I help you today?",
    "Hi there! What's on your mind?",
    "Hey! Good to see you.",
]
HOW_ARE_YOU_RESPONSES = [
    "I'm just a set of if-else rules, but I'm running smoothly. Thanks for asking!",
    "Doing great, thanks! How about you?",
]
THANKS_RESPONSES = [
    "You're welcome!",
    "Anytime, happy to help.",
    "No problem at all.",
]
EXIT_RESPONSES = [
    "Goodbye! Have a great day.",
    "See you soon!",
    "Bye! Come back anytime.",
]
JOKES = [
    "Why do Python programmers prefer dark mode? Because light attracts bugs!",
    "Why did the if-statement break up with the else-statement? "
    "Because it found someone more 'elif'.",
    "What do you call a chatbot with no rules? A confused loop.",
    "I told my computer I needed a break. Now it won't stop sending me Kit-Kat ads.",
]
FALLBACK_RESPONSES = [
    "Sorry, I didn't understand that. Could you rephrase?",
    "I'm not sure I follow. Try typing [bold]help[/bold] to see what I can do.",
    "Hmm, that's outside what I know how to answer right now.",
]

HELP_TEXT = (
    "Here's what I understand:\n\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]Greetings[/bold]      — hi, hello, hey …\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]How are you[/bold]    — how are you, how's it going …\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]My name[/bold]        — what's your name, who are you …\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]Time[/bold]           — what time is it …\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]Jokes[/bold]          — tell me a joke …\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]Thanks[/bold]         — thanks, thank you …\n"
    "  [#FF6B4A]·[/#FF6B4A] [bold]Exit[/bold]           — bye, exit, quit …"
)

# ──────────────────────────────────────────────
# ASCII banner
# ──────────────────────────────────────────────
ASCII_BANNER = r"""
  ██████╗ ███████╗ ██████╗ ██████╗ 
  ██╔══██╗██╔════╝██╔════╝██╔═══██╗
  ██║  ██║█████╗  ██║     ██║   ██║
  ██║  ██║██╔══╝  ██║     ██║   ██║
  ██████╔╝███████╗╚██████╗╚██████╔╝
  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ 
"""


# ──────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────
def clean_input(raw_input: str) -> str:
    """
    Normalise user input: lowercase + strip leading/trailing whitespace +
    remove punctuation, so "Hello!" and "hello" trigger the same rule.
    Satisfies the .strip() / .lower() requirement explicitly.
    """
    lowered = raw_input.strip().lower()
    return lowered.translate(str.maketrans("", "", string.punctuation))


def typing_effect(text: str, delay: float = 0.022) -> None:
    """
    Print text to stdout one character at a time with a small delay,
    simulating a human typing effect.  Uses plain print to stay inside
    the Rich layout without markup parsing.
    """
    for char in text:
        print(char, end="", flush=True)
        time.sleep(delay)
    print()  # newline at the end


def get_response(user_input: str) -> tuple[str, str]:
    """
    Explicit if / elif / else decision chain that maps the cleaned user
    message to a (response_text, rule_name) pair.

    The if-elif ladder makes the control-flow logic fully transparent:
    each branch corresponds to exactly one intent category.
    """
    if user_input in EXIT_COMMANDS:
        return random.choice(EXIT_RESPONSES), "exit"

    elif user_input in GREETINGS:
        return random.choice(GREETING_RESPONSES), "greeting"

    elif user_input in HOW_ARE_YOU:
        return random.choice(HOW_ARE_YOU_RESPONSES), "how_are_you"

    elif user_input in NAME_QUESTIONS:
        return f"I'm {BOT_NAME}, your rule-based assistant.", "name"

    elif user_input in THANKS:
        return random.choice(THANKS_RESPONSES), "thanks"

    elif user_input in HELP_REQUESTS:
        return HELP_TEXT, "help"

    elif user_input in TIME_REQUESTS:
        now = datetime.now().strftime("%H:%M:%S")
        return f"The current time is [bold]{now}[/bold].", "time"

    elif user_input in JOKE_REQUESTS:
        return random.choice(JOKES), "joke"

    else:
        return random.choice(FALLBACK_RESPONSES), "fallback"


def print_banner() -> None:
    """Print the ASCII art banner + welcome panel once at startup."""
    banner_text = Text(ASCII_BANNER, style="bold #FF6B4A", justify="center")
    console.print(banner_text)
    console.print(
        Panel(
            f"[bold]Hi, I'm {BOT_NAME}.[/bold]  Ask me something, or type "
            f"[cyan]bye[/cyan] to exit.\n"
            f"Each reply shows which [bold]if-elif-else[/bold] branch matched "
            f"your message — the rule-based logic in action.\n\n"
            f"[grey50]Tip: type [bold white]help[/bold white] to see the full command menu.[/grey50]",
            title="[bold #FF6B4A]Rule-Based Chatbot — DecodeLabs Project 1[/bold #FF6B4A]",
            border_style="#FF6B4A",
            box=box.ROUNDED,
            padding=(1, 3),
        )
    )
    console.print()


def print_bot_reply(response: str, rule: str) -> None:
    """
    Render the bot reply inside a Rich Panel with a colour-coded rule tag.
    The response text itself is streamed character-by-character (typing
    effect) before the panel border is drawn.
    """
    rule_label = RULE_LABELS.get(rule, rule.upper())
    rule_color = RULE_COLORS.get(rule, "grey50")

    # Show typing indicator
    console.print(f"[grey50]{BOT_NAME} is typing…[/grey50]", end="\r")
    time.sleep(0.35)
    console.print(" " * 30, end="\r")   # clear the indicator line

    bot_message = f"{response}\n\n[{rule_color}]rule matched: {rule_label}[/{rule_color}]"
    console.print(
        Panel(
            bot_message,
            title=f"[bold #FF6B4A]{BOT_NAME}[/bold #FF6B4A]",
            border_style="grey35",
            box=box.ROUNDED,
            padding=(0, 2),
            expand=False,
        )
    )


def print_farewell() -> None:
    """Print an elegant exit screen when the user says goodbye."""
    console.print()
    console.print(
        Panel(
            "[bold]Thanks for chatting![/bold]\n\n"
            "[grey50]Session closed. Come back anytime.[/grey50]",
            title="[bold #FF6B4A]Goodbye[/bold #FF6B4A]",
            border_style="#FF6B4A",
            box=box.DOUBLE,
            padding=(1, 4),
            expand=False,
        )
    )
    console.print()


# ──────────────────────────────────────────────
# Main loop
# ──────────────────────────────────────────────
def run_chatbot() -> None:
    """
    Continuous loop: read user input, clean it, pick the matching
    if-elif-else branch, display the reply, break on exit command.
    """
    print_banner()

    while True:
        # ── Prompt ──────────────────────────────
        raw_input_text = console.input(
            "[bold light_slate_blue]You ›[/bold light_slate_blue] "
        )

        # ── Sanitise (requirement: .strip() + .lower()) ──────────────
        user_input = clean_input(raw_input_text)

        if not user_input:          # ignore blank / whitespace-only input
            continue

        # ── Decision logic (if-elif-else) ────────────────────────────
        response, rule = get_response(user_input)

        # ── Display reply ────────────────────────────────────────────
        print_bot_reply(response, rule)

        # ── Exit condition ───────────────────────────────────────────
        if user_input in EXIT_COMMANDS:
            print_farewell()
            break


if __name__ == "__main__":
    run_chatbot()
