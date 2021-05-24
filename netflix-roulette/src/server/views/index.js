export default (
  html = '',
  initialState = {},
) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title>Netflix Roulette</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script src="/js/main.js"></script>
  </body>
</html>
`;
