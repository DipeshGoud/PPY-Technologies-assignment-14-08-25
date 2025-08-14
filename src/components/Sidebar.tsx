'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  FileText,
  CreditCard,
  Tag,
  FileCheck,
  Bell,
  Menu,
  X,
  ImageIcon,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutGrid },
  { name: 'Applications', href: '/applications', icon: FileText },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Rate Card', href: '/rate-card', icon: Tag },
  { name: 'Agreement Copy', href: '/agreement-copy', icon: FileCheck },
  { name: 'Notices', href: '/notices', icon: Bell },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          type="button"
          className="fixed top-2 left-4 z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-40 w-24 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex lg:flex-col`}
      >
        <div className="flex flex-grow flex-col overflow-y-auto">
          {/* Logo */}
          <div className="flex h-20 flex-shrink-0 items-center justify-center px-4 border-b">
            <div className="flex flex-col items-center">
              <ImageIcon className="h-8 w-8 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex flex-col items-center rounded-md px-2 py-3 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`h-6 w-6 flex-shrink-0 ${
                      isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="mt-1 text-xs text-center">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}