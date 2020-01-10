# Getting Setup <!-- omit in toc -->

- [Required](#required)
  - [RStudio](#rstudio)
    - [Snippets](#snippets)
  - [R Setup](#r-setup)
    - [js4shiny](#js4shiny)
    - [Other R Requirements](#other-r-requirements)
  - [Browser](#browser)
  - [Node and npm](#node-and-npm)
- [Optional Extras](#optional-extras)
  - [JavaScript Standard Style](#javascript-standard-style)
  - [Visual Studio Code](#visual-studio-code)

## Required

### RStudio

[rstudio-desktop]: https://rstudio.com/products/rstudio/
[rstudio-snippets]: https://support.rstudio.com/hc/en-us/articles/204463668-Code-Snippets
[js4shiny-snippets]: https://github.com/rstudio-conf-2020/js-for-shiny/tree/master/materials/snippets

We're going to use [RStudio Desktop][rstudio-desktop] in this workshop. Yes, you can even do web development work in RStudio!

:computer: Please make sure you have a recent version of RStudio installed. Version 1.2 or later will work.

#### Snippets

I've created a set of code snippets for RStudio
that are useful for the types of tasks we'll cover in the workshop.
You can find them in [materials/snippets][js4shiny-snippets].

To install,
you'll need to copy and paste them into the snippets editor in RStudio,
which is available under Global Options > Code > Edit Snippets button.
You can find more information and detailed instructions about using snippets
at [Code Snippets][rstudio-snippets] on the RStudio Support page.

### R Setup

[js4shiny]: https://github.com/gadenbuie/js4shiny
[devtools]: https://devtools.r-lib.org
[r-pkgs]: https://r-pkgs.org
[r-pkgs-setup]: https://r-pkgs.org/setup.html
[tidyverse]: https://tidyverse.org
[r-pkgs-setup-tools]: https://r-pkgs.org/setup.html#setup-tools

#### js4shiny

I've created a companion R package for this workshop called [js4shiny]. Installing the package with its dependencies will ensure that you have the R packages needed for the workshop. The package also provides access to the examples and exercises used in the workshop and includes some helpful tools that you can use after the workshop while learning and working with JavaScript.

:computer: To install the package, use [devtools].

```r
# install.package("devtools")
devtools::install_github("gadenbuie/js4shiny", dependencies = TRUE)
```

Be sure to include the `dependencies = TRUE`!

If you're installing `devtools` for the first time, you may find the [System Setup][r-pkgs-setup] of the [_R Packages_ book][r-pkgs] to be helpful.

:information_source: There is a minor issue with `rmarkdown` limited specifically to version 2.0. If you have `rmarkdown` 2.0 installed, I recommend updating to a newer version. The current version of `rmarkdown` on CRAN is ![](https://www.r-pkg.org/badges/version/rmarkdown). If the CRAN version is 2.0.5 or higher, install from CRAN; otherwise use

```r
devtools::install_github("rstudio/rmarkdown")
```

#### Other R Requirements

I've included all of the packages that we'll need
in the dependencies of `js4shiny`
except for the [tidyverse].
Please make sure you have at least the core tidyverse packages installed.

The final R detail is that we will be building a package
during the workshop when we create an htmlwidget.
We won't focus on the mechanics of package building in the workshop.
If you're not familiar with package development,
I recommend taking a look a [R Packages][r-pkgs]
by Hadley Wickham and Jenny Bryan.
At a minimum,
please review the [System Setup][r-pkgs-setup] chapter,
in particular the section on the [R build toolchain][r-pkgs-setup-tools]
to ensure that your laptop will be ready to build a package.

### Browser

[firefox]: https://www.mozilla.org/en-US/firefox/new/
[firefox-dev]: https://www.mozilla.org/en-US/firefox/developer/
[chrome]: https://www.google.com/chrome/
[chrome-logo]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_24x24.png
[firefox-logo]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_24x24.png
[firefox-logo-dev]: https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox-developer-edition/firefox-developer-edition_24x24.png

We'll spend a significant amount of time using a web browser,
and it's important to use a browser with good developer tools,
such as [Firefox] or [Chrome].
Safari and Internet Explorer have usable developer tools
but they are generally not as developer friendly as
Firefox or Chrome's developer features.

During the workshop,
I'll exclusively use [Firefox Developer Edition][firefox-dev].
It's comparable to [Firefox] but has a few more features and it even has the word "Developer" in the name.

:computer: Any of the following three browsers will work for the workshop:

[![][firefox-logo-dev] Firefox Developer Edition][firefox-dev]

[![][firefox-logo] Firefox][firefox]

[![][chrome-logo] Chrome][chrome]


### Node and npm

[nodejs]: https://nodejs.org/
[nodejs-download]: https://nodejs.org/en/download/
[nodejs-install]: https://nodejs.org/en/download/package-manager/
[npm]: https://www.npmjs.com/
[npm-install-nvm]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows

[node][nodejs] is a command-line runtime for JavaScript
that lets developers run JavaScript on servers
rather than in the user's browser.

We won't directly use `node` in this workshop,
but we will use [npm] (a package manager for node and JavaScript libraries).
[npm] is included with an installation of `node`.

:computer: To install `node`,
you can [download the node installer][nodejs-download]
or you can use your [system's package manager][nodejs-install].

Check that the installation worked by running the following
_in a new terminal window or session_.

<pre class="bash"><code>node -v</code></pre>

```
## v13.6.0
```

<pre class="bash"><code>npm -v </code></pre>

```
## 6.13.4
```

These are the versions currently installed on my system
and the version on your system may not perfectly match the version you see above.
If you already have a previous,
older version of Node installed,
it's probably a good idea to take this opportunity to upgrade.

:sos: If you run into any issues installing `node` or `npm`,
you can post your troubles and get help [in this issue](https://github.com/rstudio-conf-2020/js-for-shiny/issues/2).

#### Node Version Manager <!-- omit in toc -->

If you plan to do a lot of development with `node` and `npm`,
you may want to use a [Node Version Manager][nvm].
[`nvm`][nvm] is a bash script for macOS or Linux systems
and [`nvm-windows`][nvm-windows] is a similar program for Windows users.
The node version manager is used to manage the installation and activation
of multiple versions of `node` on the same system.
Follow [the instructions on the `npm` webpage][npm-install-nvm]
to install `node` and `npm` (they come together)
and confirm that your installation is working.


## Optional Extras

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
