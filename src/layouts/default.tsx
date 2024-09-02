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
        <aside class="w-64 bg-gray-200 p-4">
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </aside>
        <main class="flex-1 p-4">
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  </>
}
