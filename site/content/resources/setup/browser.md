---
date: "2019-05-05T00:00:00+01:00"
draft: false
linktitle: Browser
menu:
  setup:
    parent: Setup
    weight: 30
title: Choose Your Browser
type: docs
highlight: false
weight: 30
---

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

|                       |                 Browser                  |
| --------------------- | :--------------------------------------: |
| ![][firefox-logo-dev] | [Firefox Developer Edition][firefox-dev] |
| ![][firefox-logo]     |            [Firefox][firefox]            |
| ![][chrome-logo]      |             [Chrome][chrome]             |


### Developer Tools

In addition to rendering web pages and storing bookmarks,
they also provide a set of developer tools
that help in the process of editing and designing webpages
and programming in JavaScript.

The shortcut for opening developer tools depends on your browser.
Try using the shortcut below to open the browser's dev console on this site.

- Right click: _Inspect Element_ or _Inspect_
  - **Firefox**:
    - Windows/Linux: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> or <kbd>F12</kbd>
    - Mac: <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>I</kbd>
    - <https://developer.mozilla.org/en-US/docs/Tools>
  - **Chrome**:
    - Windows/Linux: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>
    - Mac: <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>C</kbd>
    - <https://developers.google.com/web/tools/chrome-devtools/>
  - **Safari**:
    - Enable: _Safari_ > _Preferences_ > _Advanced_ > _Show Develop menu in menu bar_
    - Right-click + _Inspect Element_
    - <https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/mac>
  - **RStudio**:
    - Right-click + _Inspect Element_