import Link from "next/link"
import {
  Calendar,
  CreditCard,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#5c4f3c] text-white">
      <nav className="space-y-1 p-4">
        <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-green-600 px-3 py-2 text-white">
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link href="/calendar" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <Calendar className="h-5 w-5" />
          Calendar
        </Link>
        <Link href="/add-order" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <ShoppingCart className="h-5 w-5" />
          Add Order
        </Link>
        <Link href="/orders" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <CreditCard className="h-5 w-5" />
          View/Edit Orders
        </Link>
        <Link href="/add-customer" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <User className="h-5 w-5" />
          Add Customer
        </Link>
        <Link href="/customers" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <Users className="h-5 w-5" />
          View/Edit Customer
        </Link>
        <Link href="/messages" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <MessageSquare className="h-5 w-5" />
          SENT MESSAGES
        </Link>
        <Link href="/emails" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
          <Mail className="h-5 w-5" />
          SENT EMAILS
        </Link>
        <div className="pt-4">
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white">
            <Settings className="h-5 w-5" />
            General Setting
          </Link>
        </div>
      </nav>
    </div>
  )
}
