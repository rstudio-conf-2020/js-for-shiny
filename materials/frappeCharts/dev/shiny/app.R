library(shiny)
library(frappeCharts)
library(babynames)
library(dplyr)

babynames <-
  babynames::babynames %>%
  filter(year >= 2000) %>%
  group_by(year, name) %>%
  summarize(n = sum(n)) %>%
  ungroup() %>%
  filter(name %in% c(sample(.$name, 50), "August", "Ruth")) %>%
  mutate_at(vars(year), paste) %>%
  tidyr::complete(year, fill = list(n = 0))

name_choices <- unique(babynames$name)

ui <- fluidPage(
  selectizeInput(
    inputId = "names",
    label = "Names",
    choices = name_choices,
    multiple = TRUE,
  ),
  frappeChartOutput("chart")
)

server <- function(input, output, session) {
  output$chart <- renderFrappeChart({
    req(input$names)

    data <-
      babynames %>%
      filter(name %in% input$names) %>%
      tidyr::spread(name, n) %>%
      rename(labels = year)

    frappeCharts::frappeChart(data, type = "line")
  })
}

shinyApp(ui, server)