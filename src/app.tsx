import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import './app.css';

import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import { Layout } from './layouts/default';

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Layout>
            <Suspense>{props.children}</Suspense>
          </Layout>
        </>
      )}>
      <FileRoutes />
    </Router>
  );
}
