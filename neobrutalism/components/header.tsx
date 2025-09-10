"use client"

import { Button } from "./button"
import { Menu, Sun, Moon } from "lucide-react"

export function HeaderNeobrutalism() {
  return (
    <header className="bg-cyan-400 border-b-8 border-black p-4 shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between">
        {/* Left side - Breadcrumb */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="size-4" strokeWidth={3} />
          </Button>
          
          <div className="bg-white border-4 border-black rounded-none px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-gray-600 uppercase tracking-wider hidden md:block">
                Plataforma Empresarial
              </span>
              <span className="text-black font-black hidden md:block">→</span>
              <span className="text-black font-black uppercase tracking-wider">
                Panel de Control
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Theme toggle and actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" strokeWidth={3} />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" strokeWidth={3} />
          </Button>
          
          <div className="bg-white border-4 border-black rounded-none px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-black text-sm uppercase tracking-wider">
              ESCOTEL ANALYTICS
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}