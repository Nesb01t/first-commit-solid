import { Footer } from '~/components/common/footer';
import { Header } from '~/components/common/header';
import { JSX } from 'solid-js';
import { ColorModeProvider, ColorModeScript } from '@kobalte/core';

interface LayoutProps {
  children: JSX.Element;
}

export const DefaultLayout = (props: LayoutProps) => {
  return (
    <>
      <div class="min-h-screen flex flex-col">
        <ColorModeScript></ColorModeScript>
        <ColorModeProvider>
          <Header />
          <main class="flex-1 p-4 dark:p-24">{props.children}</main>
          <Footer />
        </ColorModeProvider>
      </div>
    </>
  );
};
