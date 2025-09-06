"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Plus,
  ShoppingBag,
  Wallet,
  Grid3X3,
  HeadphonesIcon,
  Users,
  FileText,
  HelpCircle,
  Code,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "New Order", href: "/dashboard", icon: Plus },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Add Funds", href: "/dashboard/funds", icon: Wallet },
  { name: "Services", href: "/dashboard/services", icon: Grid3X3 },
  { name: "Support", href: "/dashboard/support", icon: HeadphonesIcon },
  { name: "Affiliates", href: "/dashboard/affiliates", icon: Users },
  { name: "Terms", href: "/dashboard/terms", icon: FileText },
  { name: "FAQ", href: "/dashboard/faq", icon: HelpCircle },
  { name: "API", href: "/dashboard/api", icon: Code },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-white/10"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Grid3X3 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Botfollows</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-white">Q</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">qwerty</p>
                <p className="text-xs text-gray-400">Free Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

