'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SideNavItem {
  id: string
  name: string
  path: string
  icon: React.ReactNode
}

const sideNavItems: SideNavItem[] = [
  {
    id: 'dashboard',
    name: 'Home',
    path: '/dashboard',
    icon: <img src="/Icon-sideNav-dashboard/graphIcon.png" alt="" />,
   
  },
  {
    id: 'calendar',
    name: 'Calendar',
    path: '/dashboard/calendar',
    icon: <img src="/Icon-sideNav-dashboard/calendar.png" alt="" />,
   
  },
  {
    id: 'tasks',
    name: 'Tasks',
    path: '/dashboard/tasks',
    icon: <img src="/Icon-sideNav-dashboard/taskList.png" alt="" />,
    
  },
  {
    id: 'timer',
    name: 'Timer',
    path: '/dashboard/timer',
    icon: <img src="/Icon-sideNav-dashboard/timer.png" alt="" />,
    
  },
  {
    id: 'settings',
    name: 'Settings',
    path: '/dashboard/settings',
    icon: <img src="/Icon-sideNav-dashboard/settingIcon.png" alt="" />,
    
  }
];


export default function SideNav() {
  const pathname = usePathname()

  const renderNavItem = (item: SideNavItem) => (
    <Link
      key={item.id}
      href={item.path}
      className={`p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors ${
        pathname === item.path ? 'bg-white/20 text-white' : ''
      }`}
      aria-label={item.name}
    >
      {item.icon}
    </Link>
  )

  return (
    <div className="fixed left-5 top-5 bottom-5 w-24 bg-black rounded-xl flex flex-col items-center py-4  transition-all duration-300 ease-in-out md:left-10 md:w-24">
      <div className="flex-1 flex flex-col items-center gap-9 mt-4">
        {sideNavItems.slice(0, 4).map(renderNavItem)}
      </div>
      <div className="">
        {renderNavItem(sideNavItems[4])}
      </div>
    </div>
  )
}
