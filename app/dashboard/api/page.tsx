"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Code, Key, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function APIPage() {
  const [copied, setCopied] = useState("")
  const apiKey = "sk_live_1234567890abcdef"
  const apiUrl = "https://api.socialboost.com/v1"

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(""), 2000)
  }

  const endpoints = [
    {
      method: "GET",
      endpoint: "/services",
      description: "Get all available services",
      params: "None",
    },
    {
      method: "POST",
      endpoint: "/order",
      description: "Place a new order",
      params: "service, link, quantity",
    },
    {
      method: "GET",
      endpoint: "/order/{id}",
      description: "Get order status",
      params: "order_id",
    },
    {
      method: "GET",
      endpoint: "/balance",
      description: "Get account balance",
      params: "None",
    },
  ]

  const methodColors = {
    GET: "bg-green-500/20 text-green-300 border-green-500/30",
    POST: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    PUT: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    DELETE: "bg-red-500/20 text-red-300 border-red-500/30",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">API Documentation</h1>
          <p className="text-gray-400">Integrate our services with your applications</p>
        </div>
      </div>

      {/* API Key */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Key className="w-5 h-5 mr-2" />
            API Key
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key" className="text-white">
              Your API Key
            </Label>
            <div className="flex space-x-2">
              <Input id="api-key" value={apiKey} readOnly className="bg-white/5 border-white/10 text-white font-mono" />
              <Button
                onClick={() => copyToClipboard(apiKey, "key")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {copied === "key" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Keep your API key secure and never share it publicly. Include it in the Authorization header of your
            requests.
          </p>
        </CardContent>
      </Card>

      {/* Base URL */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Base URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10">
            <code className="text-purple-300 font-mono">{apiUrl}</code>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(apiUrl, "url")}
              className="text-gray-400 hover:text-white"
            >
              {copied === "url" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Endpoints */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Code className="w-5 h-5 mr-2" />
            API Endpoints
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Badge className={`${methodColors[endpoint.method as keyof typeof methodColors]} border font-mono`}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-purple-300 font-mono">{endpoint.endpoint}</code>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-2">{endpoint.description}</p>
                <p className="text-gray-400 text-xs">
                  <span className="font-semibold">Parameters:</span> {endpoint.params}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Example Request */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Example Request</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`curl -X POST "${apiUrl}/order" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "service": "288",
    "link": "https://instagram.com/example",
    "quantity": 1000
  }'`}</code>
              </pre>
            </div>
            <Button
              onClick={() =>
                copyToClipboard(
                  `curl -X POST "${apiUrl}/order" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "service": "288",
    "link": "https://instagram.com/example",
    "quantity": 1000
  }'`,
                  "example",
                )
              }
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {copied === "example" ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              Copy Example
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Response Format */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Response Format</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-black/30 rounded-lg border border-white/10">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`{
  "success": true,
  "order_id": "12345",
  "charge": 5.00,
  "start_count": 1250,
  "status": "pending",
  "remains": 1000
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Rate Limits */}
      <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Rate Limits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
              <h4 className="text-white font-semibold mb-1">Requests per minute</h4>
              <p className="text-2xl font-bold text-purple-300">60</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
              <h4 className="text-white font-semibold mb-1">Requests per hour</h4>
              <p className="text-2xl font-bold text-purple-300">1,000</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
              <h4 className="text-white font-semibold mb-1">Requests per day</h4>
              <p className="text-2xl font-bold text-purple-300">10,000</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
