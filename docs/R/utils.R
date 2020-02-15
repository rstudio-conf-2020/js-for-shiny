zap_tabs <- function(path = NULL) {
  if (is.null(path)) {
    path <- rstudioapi::getSourceEditorContext()$path
  }
  is_path <- FALSE
  src <- if (length(path) == 1 || !grepl("\n", path)) {
    is_path <- TRUE
    readLines(path, warn = FALSE)
  } else {
    path
  }

  for (i in seq_along(src)) {
    line <- src[i]
    if (!grepl("^\\s*\t\\s*", line)) next
    start <- stringr::str_extract(line, "^\\s*\t\\s*")
    start_new <- stringr::str_replace_all(start, "\t", "  ")
    src[i] <- sub(start, start_new, line, fixed = TRUE)
  }
  if (is_path) {
    writeLines(src, path)
  } else {
    src
  }
}
