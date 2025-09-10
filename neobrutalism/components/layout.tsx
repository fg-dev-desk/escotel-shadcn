"use client"

import { useState } from "react"
import { SidebarNeobrutalism } from "./sidebar"
import { HeaderNeobrutalism } from "./header"

interface NeobrutalistLayoutProps {
  children: React.ReactNode
  bgColor?: string
}

export function NeobrutalistLayout({ children, bgColor = "bg-yellow-300" }: NeobrutalistLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <SidebarNeobrutalism isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col lg:ml-0">
        <HeaderNeobrutalism onMenuClick={() => setSidebarOpen(true)} />
        {children}
      </div>
    </div>
  )
}