import React from 'react';
import { renderToString } from 'react-dom/server';
import 'isomorphic-fetch';
import { match, RouterContext } from 'react-router';

import App from '../components/App.js';
import routes from './routers.jsx';

function renderFullPage(renderedContent, initialProps) {
  const appProps = initialProps;
  return `
  <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>React Server Rendering sample</title>
    </head>

    <div id="app">${renderedContent}</div>

    <script>
      var APP_PROPS = ${appProps};
    </script>
    <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
    </html>
  `;
}

export default function render(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const renderedContent = renderToString(<RouterContext {...renderProps} />);
      const renderedPage = renderFullPage(renderedContent);
      res.status(200).send(renderedPage);
    } else {
      res.status(404).send('Not found')
    }
  })
};