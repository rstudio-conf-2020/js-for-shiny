HTMLWidgets.widget({

  name: 'frappeChart',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        console.log(el.id)

        // TODO: code to render the widget, e.g.
        let chart = new frappe.Chart(el, {
          title: 'rstudio::conf is the best',
          data: x.data,
          type: x.type,
          height: 250,
          width: 500,
          isNavigable: x.isNavigable
        })

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});