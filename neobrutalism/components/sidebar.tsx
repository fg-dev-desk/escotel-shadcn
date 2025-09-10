"use client"

import Link from "next/link"
import {
  BarChart3,
  ChevronUp,
  Home,
  Inbox,
  Settings,
  User2,
  Users,
  PieChart,
} from "lucide-react"

import { Button } from "./button"

// Menu items
const items = [
  {
    title: "Panel de Control",
    url: "/neobrutalism",
    icon: Home,
  },
  {
    title: "Análisis de Datos",
    url: "/neobrutalism/analytics",
    icon: BarChart3,
  },
  {
    title: "Reportes",
    url: "/neobrutalism/reports",
    icon: PieChart,
  },
  {
    title: "Gestión de Clientes",
    url: "/neobrutalism/clients",
    icon: Users,
  },
  {
    title: "Soporte Técnico",
    url: "/neobrutalism/support",
    icon: Inbox,
  },
  {
    title: "Configuración",
    url: "/neobrutalism/settings",
    icon: Settings,
  },
]

export function SidebarNeobrutalism({ isOpen = true, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  return (
    <div className={`
      fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      w-80 lg:w-80 bg-pink-400 border-r-8 border-black min-h-screen p-4 lg:p-6 shadow-[8px_0px_0px_0px_rgba(0,0,0,1)]
    `}>
      {/* Header */}
      <div className="mb-8">
        <Link href="/neobrutalism" className="group">
          <div className="bg-white border-4 border-black rounded-none p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 lg:size-12 items-center justify-center rounded-none bg-black text-white border-2 border-black">
                <BarChart3 className="size-5 lg:size-6" strokeWidth={3} />
              </div>
              <div className="grid flex-1 text-left">
                <span className="font-black text-xl lg:text-2xl tracking-tight text-black">ESCOTEL</span>
                <span className="font-bold text-xs lg:text-sm text-gray-700 uppercase tracking-wider">ANALYTICS</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <h3 className="font-black text-xl text-black mb-4 uppercase tracking-wider bg-white px-3 py-2 border-4 border-black transform -rotate-1">
          NAVEGACIÓN
        </h3>
        <div className="space-y-3">
          {items.map((item) => (
            <Link key={item.title} href={item.url} className="block group">
              <div className="bg-white border-4 border-black rounded-none p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group-active:translate-x-2 group-active:translate-y-2 group-active:shadow-none">
                <div className="flex items-center gap-3">
                  <item.icon className="size-5 text-black" strokeWidth={3} />
                  <span className="font-bold text-black">{item.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="mt-auto">
        <div className="bg-white border-4 border-black rounded-none p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 bg-blue-500 border-2 border-black rounded-none flex items-center justify-center">
              <User2 className="size-5 text-white" strokeWidth={3} />
            </div>
            <div className="grid flex-1 text-left">
              <span className="font-black text-black">Luis Felipe</span>
              <span className="font-bold text-xs text-gray-700">luis.fernandez@blackrock.com</span>
            </div>
          </div>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <User2 className="size-4" />
              Cuenta
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Settings className="size-4" />
              Configuración
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}