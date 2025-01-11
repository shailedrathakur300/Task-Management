import React from 'react'
import SideNav from './_Components/SideNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      <SideNav />
      <main className="flex-1 p-6 md:ml-64">{children}</main>
    </div>
  )
}

