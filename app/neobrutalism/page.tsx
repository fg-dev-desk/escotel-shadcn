import { NeobrutalistLayout } from "@/neobrutalism/components/layout"
import { DashboardNeobrutalism } from "@/neobrutalism/components/dashboard"

export default function NeobrutalistPage() {
  return (
    <NeobrutalistLayout bgColor="bg-yellow-300">
      <DashboardNeobrutalism />
    </NeobrutalistLayout>
  )
}