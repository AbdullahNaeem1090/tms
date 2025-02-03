import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ShoppingCart, DollarSign, CreditCard } from "lucide-react"

export function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-[#3498db] text-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
          <Users className="h-6 w-6" />
          <p className="text-2xl font-bold">0</p>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-lg">Total Customers!</p>
        </CardContent>
        <CardFooter className="bg-white/10 p-2">
          <Button variant="link" className="text-white hover:text-white/90 hover:no-underline">
            View Details
          </Button>
        </CardFooter>
      </Card>
      <Card className="bg-[#27ae60] text-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
          <ShoppingCart className="h-6 w-6" />
          <p className="text-2xl font-bold">0</p>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-lg">Total Orders!</p>
        </CardContent>
        <CardFooter className="bg-white/10 p-2">
          <Button variant="link" className="text-white hover:text-white/90 hover:no-underline">
            View Details
          </Button>
        </CardFooter>
      </Card>
      <Card className="bg-[#f39c12] text-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
          <DollarSign className="h-6 w-6" />
          <p className="text-2xl font-bold">$</p>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-lg">Last 30 Days Income!</p>
        </CardContent>
        <CardFooter className="bg-white/10 p-2">
          <Button variant="link" className="text-white hover:text-white/90 hover:no-underline">
            View Details
          </Button>
        </CardFooter>
      </Card>
      <Card className="bg-[#e74c3c] text-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
          <CreditCard className="h-6 w-6" />
          <p className="text-2xl font-bold">$</p>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-lg">Last 30 Days Expenses!</p>
        </CardContent>
        <CardFooter className="bg-white/10 p-2">
          <Button variant="link" className="text-white hover:text-white/90 hover:no-underline">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
