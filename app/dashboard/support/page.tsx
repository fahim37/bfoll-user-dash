"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { HeadphonesIcon, Clock, MessageSquare, Plus } from "lucide-react"
import { supportTickets } from "@/data/support"

const statusColors = {
  open: "bg-green-500/20 text-green-300 border-green-500/30",
  in_progress: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  resolved: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  closed: "bg-gray-500/20 text-gray-300 border-gray-500/30",
}

const priorityColors = {
  low: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  high: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  urgent: "bg-red-500/20 text-red-300 border-red-500/30",
}

export default function SupportPage() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle ticket submission
    console.log({ subject, message, priority })
    // Reset form
    setSubject("")
    setMessage("")
    setPriority("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Support</h1>
          <p className="text-gray-400">Get help from our support team</p>
        </div>
      </div>

      {/* Support Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center">
                <HeadphonesIcon className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Welcome to the support section!</h3>
                <p className="text-purple-200 text-sm">
                  Our agents will respond as quick as possible if you have any questions please check our F.A.Q or
                  contact our live support!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Support Hours: 09:00 - 23:59</h3>
                <p className="text-blue-200 text-sm">Support requests can take 0-2 hours to respond.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Create Ticket */}
        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Create a ticket
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  Subject
                </Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    <SelectItem value="payment" className="text-white">
                      Payment
                    </SelectItem>
                    <SelectItem value="order" className="text-white">
                      Order Issue
                    </SelectItem>
                    <SelectItem value="account" className="text-white">
                      Account
                    </SelectItem>
                    <SelectItem value="technical" className="text-white">
                      Technical
                    </SelectItem>
                    <SelectItem value="other" className="text-white">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority" className="text-white">
                  Priority
                </Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    <SelectItem value="low" className="text-white">
                      Low
                    </SelectItem>
                    <SelectItem value="medium" className="text-white">
                      Medium
                    </SelectItem>
                    <SelectItem value="high" className="text-white">
                      High
                    </SelectItem>
                    <SelectItem value="urgent" className="text-white">
                      Urgent
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue in detail..."
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Submit ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Support Requests */}
        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Support requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            {supportTickets.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No support tickets</h3>
                <p className="text-gray-400">You haven't created any support tickets yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white">{ticket.subject}</h4>
                        <p className="text-sm text-gray-400">#{ticket.id}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={`${statusColors[ticket.status]} border text-xs`}>
                          {ticket.status.replace("_", " ")}
                        </Badge>
                        <Badge className={`${priorityColors[ticket.priority]} border text-xs`}>{ticket.priority}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{ticket.message}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Created: {ticket.createdAt.toLocaleDateString()}</span>
                      <span>{ticket.responses.length} responses</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
