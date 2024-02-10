import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import '@mantine/core/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <MantineProvider>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Hexagon</title>

        <ColorSchemeScript />
      </head>
      <body>
        <App />
      </body>
    </html>
    </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();