import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import './app.css';

import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import {
  ColorModeProvider,
  ColorModeScript
} from '@kobalte/core/src/index.jsx';
import { Nav } from './components/common/nav';
import { Footer } from './components/common/footer';

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <ColorModeScript></ColorModeScript>
          <ColorModeProvider>
            <Nav></Nav>
            <Suspense>{props.children}</Suspense>
            <Footer></Footer>
          </ColorModeProvider>
        </>
      )}>
      <FileRoutes />
    </Router>
  );
}
