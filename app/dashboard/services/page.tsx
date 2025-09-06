"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, MessageCircle, Eye, Users, Share, Star } from "lucide-react"
import { services, platforms } from "@/data/services"

const platformIcons = {
  instagram: Heart,
  tiktok: Star,
  facebook: Users,
  twitter: MessageCircle,
  youtube: Eye,
  linkedin: Share,
}

const serviceTypeIcons = {
  followers: Users,
  likes: Heart,
  views: Eye,
  comments: MessageCircle,
  shares: Share,
}

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === "all" || service.platform === selectedPlatform
    return matchesSearch && matchesPlatform
  })

  const groupedServices = platforms.reduce(
    (acc, platform) => {
      acc[platform.id] = filteredServices.filter((service) => service.platform === platform.id)
      return acc
    },
    {} as Record<string, typeof services>,
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Services</h1>
          <p className="text-gray-400">Browse our social media growth services</p>
        </div>
      </div>

      {/* Platform Icons */}
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => {
          const Icon = platformIcons[platform.id as keyof typeof platformIcons]
          return (
            <Button
              key={platform.id}
              variant={selectedPlatform === platform.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPlatform(selectedPlatform === platform.id ? "all" : platform.id)}
              className={`${platform.color} text-white border-white/20 hover:opacity-80`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {platform.name}
            </Button>
          )
        })}
      </div>

      {/* Search and Filter */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="w-full sm:w-48 bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/10">
                <SelectItem value="all" className="text-white">
                  All Platforms
                </SelectItem>
                {platforms.map((platform) => (
                  <SelectItem key={platform.id} value={platform.id} className="text-white">
                    {platform.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Services by Platform */}
      {platforms.map((platform) => {
        const platformServices = groupedServices[platform.id]
        if (!platformServices || platformServices.length === 0) return null

        const Icon = platformIcons[platform.id as keyof typeof platformIcons]

        return (
          <Card key={platform.id} className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center mr-3`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                {platform.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Service</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Rate per 1</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Min order</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Max order</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Quality</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformServices.map((service) => {
                      const ServiceIcon = serviceTypeIcons[service.type]
                      return (
                        <tr key={service.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <ServiceIcon className="w-4 h-4 text-purple-300" />
                              </div>
                              <div>
                                <p className="text-white font-medium">{service.name}</p>
                                <p className="text-gray-400 text-sm">{service.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-white">${service.pricePerUnit.toFixed(4)}</td>
                          <td className="py-4 px-4 text-green-400">{service.minOrder}</td>
                          <td className="py-4 px-4 text-red-400">{service.maxOrder.toLocaleString()}</td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${
                                service.quality === "premium"
                                  ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                  : service.quality === "high"
                                    ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                    : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                              } border`}
                            >
                              {service.quality}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            >
                              Order
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
