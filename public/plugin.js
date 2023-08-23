window.MY_APP = {
  init: (options) => {
    const { selector, options: pluginOptions } = options

    if (selector) {
      const renderElement = document.querySelector(selector)

      if (renderElement) {
        ReactDOM.render(
          React.createElement(App, { options: pluginOptions }),
          renderElement
        )
      }
    }
  },
}
