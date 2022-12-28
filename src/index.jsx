import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/App';
import Provider from '@provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
