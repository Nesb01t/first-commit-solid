export interface NaviItem {
  name?: string;
  path: string;
}

export const Nav = () => {
  const naviItems: NaviItem[] = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'road',
      path: '/road'
    },
    {
      name: 'start-repo',
      path: '/start'
    },
    {
      name: 'trending',
      path: '/trending'
    }
  ];

  return (
    <ul class="bg-red w-1/3 h-full flex items-center justify-center">
      {naviItems.map((item: NaviItem) => (
        <li class="mx-4">
          <a href={item.path}>{item.name || item.path}</a>
        </li>
      ))}
    </ul>
  );
};
