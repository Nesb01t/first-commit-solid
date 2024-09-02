import { Nav } from "./nav"

export const Header = () => {
  return <>
    <div class="max-w-[1200px] bg-blue h-16 w-full flex mx-auto">
      <a class="w-1/6 flex items-center gap-2 hover:cursor-pointer">
        <img src="/public/favicon.ico" alt="logo" class="w-7" />
        <span class="text-lg font-bold">First commit</span>
      </a>
      <Nav />
    </div>
  </>
}
