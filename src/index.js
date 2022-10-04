import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';



const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <NotificationsProvider position='top-right' limit={10}>
      <App />
    </NotificationsProvider>
  </MantineProvider>
);
