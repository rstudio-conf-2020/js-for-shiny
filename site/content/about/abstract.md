---
widget: "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless: true  # This file represents a page section.
active: true  # Activate this widget? true/false
weight: 30  # Order that this section will appear.

title: "Overview"
subtitle: "The Future Is Shiny"

design:
  columns: "2"

design.background:
  # Background image.
  image: ""  # Name of image in `static/img/`.
  image_darken: 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  text_color_light: false

design.spacing:
  # Customize the section spacing. Order is top, right, bottom, left.
  padding: ["6em", "0", "6em", "0"]

advanced:
 css_style: "margin-top: -1em !important;"
 css_class: ""
---

[shiny]: https://shiny.rstudio.com
[rmarkdown]: https://rmarkdown.rstudio.com
[tidyverse]: https://tidyverse.org
[shiny-gallery]: https://shiny.rstudio.com/gallery/

[Shiny] gives users a powerful toolkit to create [interactive web applications][shiny-gallery].
As a result, Shiny users are also web developers!
Inevitably, an intermediate Shiny user will want to create a visualization or user interface
that isn't available in the `shiny` package.
Fortunately,
we can use the building blocks of the web --
JavaScript, HTML, and CSS --
to extend Shiny's capabilities and create engaging Shiny apps.

This two-day, hands-on workshop will introduce Shiny users to JavaScript,
the ubiquitous scripting language that powers the modern web.
We will explore JavaScript's syntax and will discover its functional programming style
to be refreshingly familiar to [tidyverse] R users.
We will learn how to use JavaScript to manipulate HTML and
how Shiny uses JavaScript to communicate between the browser and Shiny server.
Together, we will build an `htmlwidget` and
learn how to incorporate our own or packaged JavaScript code into Shiny apps and [R Markdown] documents,
and how to simultaneously manage JavaScript and R dependencies.

This workshop is for the Shiny user who boldly waded into the
[Customizing Shiny](https://shiny.rstudio.com/articles/#customize)
section of
[RStudio's Shiny Articles](https://shiny.rstudio.com/articles/)
and quickly wished they had more experience with JavaScript.
This user recognizes the benefits of learning JavaScript,
but they are overwhelmed by the sheer number of
packages, tutorials, and StackOverflow questions
that exist in the world about JavaScript, HTML, and CSS.
The goal of this workshop is to meet the Shiny user where they are now
to learn the best parts of JavaScript
that will provide the most value and
facilitate learning and exploration after the workshop.