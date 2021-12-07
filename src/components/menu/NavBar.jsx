import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-700 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              React JSONPlaceholder
            </a>
          </div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li id="obra" className="nav-item">
              <Link
                className="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="posts"
              >
                <i className="pi pi-fw pi-at text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Posts</span>
              </Link>
            </li>
            <li id="albums" className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 "
                to="albums"
              >
                <i className="pi pi-fw pi-camera text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Albums</span>
              </Link>
            </li>
            <li id="todos" className="nav-item">
            <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 "
                to="todos"
              >
                <i className="pi pi-fw pi-check text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">ToDo</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
