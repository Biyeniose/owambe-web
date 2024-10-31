import Link from "next/link";
import { HomeIcon, UserGroupIcon, PlusIcon, CalendarIcon, UserCircleIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md z-50">
      <ul className="flex justify-around items-center p-4 space-x-4">
        
        {/* Home */}
        <li>
          <Link href="/home" className="flex flex-col items-center text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
            <HomeIcon className="w-6 h-6" />
            <span className="mt-1">Home</span>
          </Link>
        </li>

        {/* People */}
        <li>
          <Link href="/people" className="flex flex-col items-center text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
            <UserGroupIcon className="w-6 h-6" />
            <span className="mt-1">People</span>
          </Link>
        </li>

        {/* Add */}
        <li>
          <Link href="/addevent" className="flex flex-col items-center bg-black text-white p-3 rounded-md text-sm hover:bg-gray-800 dark:hover:bg-gray-300 dark:bg-white dark:text-black">
            <PlusIcon className="w-6 h-6" />
          </Link>
        </li>

        {/* Calendar */}
        <li>
          <Link href="/calendar" className="flex flex-col items-center text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
            <CalendarIcon className="w-6 h-6" />
            <span className="mt-1">Calendar</span>
          </Link>
        </li>

        {/* Profile */}
        <li>
          <Link href="/profile" className="flex flex-col items-center text-sm text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
            <UserCircleIcon className="w-6 h-6 rounded-full" />
            <span className="mt-1">Profile</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
