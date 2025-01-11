import React from 'react'
import SideNav from './_Components/SideNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full flex">
      <SideNav />
      <main className="flex-1 p-6 md:ml-60">{children}</main>
    </div>
  )
}

