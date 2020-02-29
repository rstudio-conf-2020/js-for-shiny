---
date: "2019-05-05T00:00:00+01:00"
draft: false
linktitle: Node & npm
menu:
  setup:
    parent: Setup
    weight: 40
title: Node & npm
type: docs
highlight: false
weight: 40
---


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
