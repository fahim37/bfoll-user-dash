"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus } from "lucide-react"
import { orders } from "@/data/orders"
import Link from "next/link"

const statusColors = {
  pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  in_progress: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  completed: "bg-green-500/20 text-green-300 border-green-500/30",
  partial: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  processing: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  canceled: "bg-red-500/20 text-red-300 border-red-500/30",
}

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Orders</h1>
          <p className="text-gray-400">Track and manage your service orders</p>
        </div>
        <Link href="/dashboard">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Plus className="w-4 h-4 mr-2" />
            New Order
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-white/5 border-white/10 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/10">
                <SelectItem value="all" className="text-white">
                  All
                </SelectItem>
                <SelectItem value="pending" className="text-white">
                  Pending
                </SelectItem>
                <SelectItem value="in_progress" className="text-white">
                  In Progress
                </SelectItem>
                <SelectItem value="completed" className="text-white">
                  Completed
                </SelectItem>
                <SelectItem value="partial" className="text-white">
                  Partial
                </SelectItem>
                <SelectItem value="processing" className="text-white">
                  Processing
                </SelectItem>
                <SelectItem value="canceled" className="text-white">
                  Canceled
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      {filteredOrders.length === 0 ? (
        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No orders found</h3>
              <p>{"You haven't placed any orders yet or no orders match your search."}</p>
            </div>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Place Your First Order
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Order ID</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Service</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Quantity</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Start Count</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Remains</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Charge</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 text-white font-mono text-sm">{order.id}</td>
                      <td className="py-4 px-4 text-white">{order.serviceName}</td>
                      <td className="py-4 px-4 text-white">{order.quantity.toLocaleString()}</td>
                      <td className="py-4 px-4 text-white">{order.startCount.toLocaleString()}</td>
                      <td className="py-4 px-4 text-white">{order.remains.toLocaleString()}</td>
                      <td className="py-4 px-4 text-white">${order.charge.toFixed(2)}</td>
                      <td className="py-4 px-4">
                        <Badge className={`${statusColors[order.status]} border`}>
                          {order.status.replace("_", " ")}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
