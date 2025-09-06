"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, ShoppingBag, Clock, Plus, ShoppingCart } from "lucide-react"
import { currentUser } from "@/data/user"
import { services } from "@/data/services"

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
]

const categories = [
  { id: "instagram", name: "Instagram", color: "bg-pink-500", icon: "📷" },
  { id: "tiktok", name: "TikTok", color: "bg-black", icon: "🎵" },
  { id: "facebook", name: "Facebook", color: "bg-blue-600", icon: "👥" },
  { id: "twitter", name: "Twitter", color: "bg-sky-500", icon: "🐦" },
  { id: "youtube", name: "YouTube", color: "bg-red-600", icon: "📺" },
]

export default function DashboardPage() {
  const [selectedCountry, setSelectedCountry] = useState("US")
  const [selectedCategory, setSelectedCategory] = useState("instagram")
  const [selectedService, setSelectedService] = useState("")
  const [link, setLink] = useState("")
  const [quantity, setQuantity] = useState("")

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const filteredServices = services.filter((s) => s.platform === selectedCategory)
  const charge =
    selectedServiceData && quantity
      ? (Number.parseFloat(quantity) * selectedServiceData.pricePerUnit).toFixed(2)
      : "0.00"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ selectedCountry, selectedCategory, selectedService, link, quantity })
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", { selectedService, link, quantity, charge })
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome {currentUser.username} 👋</h1>
          <p className="text-gray-400">Manage your social media growth from here</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
          <ShoppingBag className="w-4 h-4 mr-2" />
          View Orders
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Balance</p>
                <p className="text-2xl font-bold text-white">${currentUser.balance}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Spent</p>
                <p className="text-2xl font-bold text-white">${currentUser.totalSpent}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Orders</p>
                <p className="text-2xl font-bold text-white">2</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Avg. Delivery</p>
                <p className="text-2xl font-bold text-white">2.5h</p>
              </div>
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Order Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                New order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Country Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/10">
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code} className="text-white">
                          <span className="flex items-center">
                            <span className="mr-2">{country.flag}</span>
                            {country.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/10">
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id} className="text-white">
                          <span className="flex items-center">
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/10">
                      {filteredServices.map((service) => (
                        <SelectItem key={service.id} value={service.id} className="text-white">
                          <span className="flex items-center">
                            <span className="mr-2">{categories.find((c) => c.id === service.platform)?.icon}</span>
                            {service.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Link Input */}
                <div className="space-y-2">
                  <Label htmlFor="link" className="text-white">
                    Link
                  </Label>
                  <Input
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://instagram.com/username"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                </div>

                {/* Quantity Input */}
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-white">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  {selectedServiceData && (
                    <p className="text-sm text-gray-400">
                      Min: {selectedServiceData.minOrder} | Max: {selectedServiceData.maxOrder.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Charge Display */}
                <div className="space-y-2">
                  <Label className="text-white">Charge</Label>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-md">
                    <span className="text-2xl font-bold text-green-400">${charge}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    onClick={handleAddToCart}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add Cart
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Service Info */}
          {selectedServiceData && (
            <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">{selectedServiceData.name}</h4>
                  <p className="text-sm text-gray-400 mb-3">{selectedServiceData.description}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {selectedServiceData.quality}
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                      {selectedServiceData.deliveryTime}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {selectedServiceData.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Past Orders */}
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-lg">Past Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No past orders</h3>
                <p className="text-gray-400">Your order history will appear here.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
