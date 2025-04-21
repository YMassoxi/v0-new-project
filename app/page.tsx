import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { FinancialSummary } from "@/components/dashboard/financial-summary"
import { AIAssistant } from "@/components/ai-assistant"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Bem-vindo ao GPro, seu hub pessoal e profissional." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <QuickActions className="md:col-span-2 lg:col-span-2" />
        <UpcomingEvents className="md:col-span-2 lg:col-span-2" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview className="md:col-span-2 lg:col-span-4" />
        <FinancialSummary className="md:col-span-2 lg:col-span-3" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentActivity className="md:col-span-2 lg:col-span-4" />
        <AIAssistant className="md:col-span-2 lg:col-span-3" />
      </div>
    </DashboardShell>
  )
}
