import { h, render } from 'preact';
import App from './App';

const appContainer = document.getElementById('app');
function renderApp() {
  appContainer.innerHTML = null;
  render(
    <App />,
    appContainer,
  );
}

renderApp();

if (module.hot) {
  module.hot.accept();
}
