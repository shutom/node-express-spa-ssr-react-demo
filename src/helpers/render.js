const React          = require('react');
const ReactDOMServer = require('react-dom/server');
const App            = require('../components/App/index.jsx').default;

function render(req, res) {
    const content = ReactDOMServer.renderToString(React.createElement(App));
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello SSR</title>
</head>
<body>
    <section id="app">
        ${content}
    </section>
</body>
</html>`;

    res.status(200).send(html);
};

module.exports = render;
