"use client"

import { Bell, Clock, HelpCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <Clock className="w-4 h-4 mr-2" />
            History
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help
          </Button>
          <Button variant="ghost" size="sm" className="relative text-gray-300 hover:text-white">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  )
}
