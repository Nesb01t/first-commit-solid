import { Footer } from "~/components/common/footer";
import { Header } from "~/components/common/header";
import { JSX } from 'solid-js';

interface LayoutProps {
  children: JSX.Element
}

export const Layout = (props: LayoutProps) => {
  return <>
    <div class="min-h-screen flex flex-col">
      <Header />
      <div class="flex flex-1">
        <main class="flex-1 p-4">
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  </>
}
