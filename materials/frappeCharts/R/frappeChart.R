#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
frappeChart <- function(data, type = "line", is_navigable = TRUE, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    data = processData(data, type),
    isNavigable = is_navigable,
    type = type
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'frappeChart',
    x,
    width = width,
    height = height,
    package = 'frappeCharts',
    elementId = elementId
  )
}

processData <- function(dataIn, type = "line") {
  labels <- dataIn$labels

  dataSeries <- dataIn[, setdiff(names(dataIn), "labels")]

  datasets <- list()
  for (column in names(dataSeries)) {
    datasets <- c(datasets, list(list(
      name = column,
      type = type,
      values = dataSeries[[column]]
    )))
  }

  list(
    labels = labels,
    datasets = datasets
  )
}

#' Shiny bindings for frappeChart
#'
#' Output and render functions for using frappeChart within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a frappeChart
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name frappeChart-shiny
#'
#' @export
frappeChartOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'frappeChart', width, height, package = 'frappeCharts')
}

#' @rdname frappeChart-shiny
#' @export
renderFrappeChart <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, frappeChartOutput, env, quoted = TRUE)
}
