# React Redux server-side rendering example
A very simple React/Redux application with server side rendering.
## app.js
A React component wrapped inside a Redux container (create using `connect()` method).
Simply displays the applications state property `phrase`

## index.js
Bootstrapping script on the client side. Uses the `hydrate()` method to render the application to the page, replacing the server side rendered html. Note that if the rendered HTML isn't exactly the same as that from the server, React throws a warning.

## reducer.js
The reducer for the application. Currently does nothing fancier than return the state of the app so that Redux works.

## server.js
Bootstrapping script on the server side. Generates HTML that is identical to that generated on client side (or else React throws a warning as mentioned above). Main rendering method runs asynchronously within a setTimeout callback to demonstrate the possibility of making asynchronous calls such as fetching data before sending response back to browser. 

## webpack.config.js
Config script for generating bundle that is sent to client side.
