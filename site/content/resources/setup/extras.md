---
date: "2019-05-05T00:00:00+01:00"
draft: false
linktitle: Optional Extras
menu:
  setup:
    parent: Setup
    weight: 50
title: Optional Extras
type: docs
highlight: false
weight: 50
---

### JavaScript Standard Style

[standardjs]: https://standardjs.com/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/

[standardjs] is a style guide, code linter and beautifier in one.
**standard** is a command line tool
for the [JavaScript Standard Style][standardjs]
that automatically formats JavaScript code in a consistent manner
and points out common style and programmer errors.

There are a number of JavaScript tools for this task ---
and standard is built on [ESLint] and [Prettier] ---
but standard is easier to install and configure
and uses a code style that will be familiar to R developers.

:computer: Once you've [installed node and npm](#node-and-npm),
you can install standard by running

```bash
npm install standard --global
```

Once installed,
you can use the _Lint File or Selection_ RStudio addin
provided by the [js4shiny](#r-setup) package
to automatically format your JavaScript.

### Visual Studio Code

[vscode]: https://code.visualstudio.com/
[vscode-extensions]: https://marketplace.visualstudio.com/VSCode
[vscode-ext-debugger-firefox]: https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug
[vscode-ext-icons]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
[vscode-ext-bracket]: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
[vscode-ext-intellicode]: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode
[vscode-ext-live-server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[vscode-ext-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-ext-color-highlight]: https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight
[vscode-ext-r]: https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r
[vscode-ext-r-lsp]: https://marketplace.visualstudio.com/items?itemName=REditorSupport.r-lsp
[vscode-ext-css-intellisense]: https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
[vscode-ext-css-navigation]: https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation
[vscode-ext-auto-close-tag]: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
[vscode-ext-auto-rename-tag]: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
[rpkg-languageserver]: https://github.com/REditorSupport/languageserver


:computer: We will use RStudio throughout the workshop,
but if you plan to spend more time coding JavaScript, HTML, or CSS than R,
then you may want to use [Visual Studio Code][vscode].

The primary benefit of using VSCode is that
web development languages are first-class citizens,
which means that the editor's interface provides helpful autocompletion
and links to help documentation.
Furthermore,
there is a wide variety of community-contributed extensions
that augment VSCode's capabilities.

A few extensions that I've found personally helpful include

- [Visual Studio IntelliCode][vscode-ext-intellicode]
- [Live Server][vscode-ext-live-server]
- [Debugger for Firefox][vscode-ext-debugger-firefox]
- [VSCode Icons][vscode-ext-icons]
- [Bracket Pair Colorizer][vscode-ext-bracket]
- [ESLint][vscode-ext-eslint]
- CSS Extensions
  - [Color Highlight][vscode-ext-color-highlight]
  - [IntelliSense for CSS][vscode-ext-css-intellisense]
  - [CSS Code Navigation][vscode-ext-css-navigation]
- HTML Extensions
  - [Auto Close Tag][vscode-ext-auto-close-tag]
  - [Auto Rename Tag][vscode-ext-auto-rename-tag]

VSCode and RStudio are somewhat at opposite sides of the spectrum:
RStudio excels at supporting R developers
while providing a reasonable editing experience for web developers;
while on the other hand VSCode is excellent for the latter
but less supportive of R developers.

There are a pair of extensions for R language support that are very helpful:

- [R support for Visual Studio Code][vscode-ext-r]
- [R Language Server Protocol][vscode-ext-r-lsp]
  - Requires that you install the R package [`languageserver`][rpkg-languageserver]