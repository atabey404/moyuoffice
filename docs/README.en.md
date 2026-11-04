# MoyuOffice

[简体中文](../README.md) · **English** · [日本語](README.ja.md) · [한국어](README.ko.md)

**Learn vocabulary in a familiar desktop chat interface.**

[Try it online](https://atabey404.github.io/moyuoffice/) · [Report an issue](https://github.com/atabey404/moyuoffice/issues)

MoyuOffice turns short breaks into vocabulary practice. Study English, Japanese, and Korean words in a WeChat-style light interface, reveal Chinese meanings with Enter, and practice spelling words you have already studied.

## Features

- **Learning:** receive a word, its Chinese meaning, and pronunciation notation or examples when the source provides them.
- **Reveal:** with an empty input, press Enter for a foreign-language word, Enter again for its Chinese meaning, and Enter again for the next word.
- **Dictation:** type the foreign-language word for a Chinese prompt. Only studied words from the current dictionary are included. Blank Enter skips a word and saves it for review; a completed round can be repeated.
- Saved chat history and per-dictionary progress, a review notebook, CSV vocabulary import, and a yearly activity heatmap.
- Custom contact name/avatar and an optional subtle correct-answer notice.

The app interface is currently mainly in Chinese. These translated introductions do not mean the interface is fully localized. English resources include CET-4/6, IELTS, TOEFL, and an Oxford core word list; Japanese resources include JLPT N5–N1 and community textbook lists; Korean resources are organized into six study levels. These are community study resources, not guaranteed complete official exam lists or full commercial dictionaries.

## Start learning

Open the website, select a dictionary in **我的词典**, and enter the chat interface. Choose a mode in the input area. Press Esc to return to the dashboard and stop the session timer. The timer measures time with the skin open, not verified focused study time.

Records are stored in your current browser. There are no accounts, cloud sync, or study-record export/import. Changing browser, device, or website address does not transfer records automatically. Clearing site data removes local records.

This is an independent simulation and does not connect to real messaging accounts. Dark mode, additional skins, payments, AI chat/grading, and audio playback are not available in the current version.

## Run and contribute

This is a static HTML/CSS/JavaScript site. Clone the repository and open `index.html`, or serve the directory with a static server. No frontend dependency installation is required. GitHub Pages uses `main` and `/ (root)`.

See the [Chinese documentation](../README.md) for CSV format and full usage, the [contribution guide](../CONTRIBUTING.md), and [data sources and licenses](../dictionaries/SOURCES.md). Third-party datasets retain their respective licenses; the project's own code does not yet have a unified open-source license.
