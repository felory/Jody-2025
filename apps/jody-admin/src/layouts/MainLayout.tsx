import { Outlet, Link, useLocation } from 'react-router-dom';
import './layout.css';

const menu = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/users', label: 'Users' },
  { path: '/settings', label: 'Settings' },
  { path: '/globe', label: '地球可视化' },
];

export default function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-800 text-gray-100 p-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-6">Jody Admin</h1>

        <nav className="space-y-2">
          {menu.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                block px-3 py-2 rounded-md
                transition-colors
                ${
                  pathname === item.path
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="h-14 bg-white shadow flex items-center px-6">
          <span className="font-medium text-gray-700">Welcome!</span>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
