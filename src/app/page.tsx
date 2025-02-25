// import { Layout } from "@/components/layout"
import { Card } from "@/components/ui/card"
import { DashboardCards } from "@/components/ui/dashboardcards"

export default function DashboardPage() {
  return (
    // <Layout>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">DASHBOARD</h2>
        <DashboardCards />
        <Card className="p-6">
          <h3 className="text-lg font-medium">Income, Expenses and Profit for past 30 days</h3>
          {/* Chart would go here */}
        </Card>
      </div>
    // </Layout>
  )
}
