
import ReactDOM from 'react-dom/client';
import App from './App'
import { SessionProvider } from '@inrupt/solid-ui-react';

ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById('root')
);

