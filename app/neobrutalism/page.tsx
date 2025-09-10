import { SidebarNeobrutalism } from "@/neobrutalism/components/sidebar"
import { HeaderNeobrutalism } from "@/neobrutalism/components/header"
import { DashboardNeobrutalism } from "@/neobrutalism/components/dashboard"

export default function NeobrutalistPage() {
  return (
    <div className="flex min-h-screen bg-yellow-300">
      <SidebarNeobrutalism />
      <div className="flex-1 flex flex-col">
        <HeaderNeobrutalism />
        <DashboardNeobrutalism />
      </div>
    </div>
  )
}