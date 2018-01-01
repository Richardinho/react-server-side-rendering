function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>My server side rendering example</title>
      </head>
      <body>
        <h1>New Years Day!</h1>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
    `
}
export default renderFullPage;
