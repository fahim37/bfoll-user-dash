"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, CreditCard, DollarSign, History } from "lucide-react"
import { currentUser } from "@/data/user"

const paymentMethods = [
  { id: "paypal", name: "PayPal", icon: "💳" },
  { id: "stripe", name: "Credit Card", icon: "💳" },
  { id: "crypto", name: "Cryptocurrency", icon: "₿" },
  { id: "bank", name: "Bank Transfer", icon: "🏦" },
]

const quickAmounts = [10, 25, 50, 100, 250, 500]

export default function FundsPage() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ amount, paymentMethod })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Add Funds</h1>
          <p className="text-gray-400">Add money to your account balance</p>
        </div>
      </div>

      {/* Current Balance */}
      <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Current Balance</h3>
              <p className="text-2xl font-bold text-green-300">${currentUser.balance.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Funds Form */}
        <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Add Funds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddFunds} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white">
                  Amount (USD)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="1"
                  step="0.01"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>

              {/* Quick Amount Buttons */}
              <div className="space-y-2">
                <Label className="text-white">Quick Select</Label>
                <div className="grid grid-cols-3 gap-2">
                  {quickAmounts.map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      type="button"
                      variant="outline"
                      onClick={() => setAmount(quickAmount.toString())}
                      className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                    >
                      ${quickAmount}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment-method" className="text-white">
                  Payment Method
                </Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    {paymentMethods.map((method) => (
                      <SelectItem key={method.id} value={method.id} className="text-white">
                        <span className="flex items-center">
                          <span className="mr-2">{method.icon}</span>
                          {method.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={!amount || !paymentMethod}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Add ${amount || "0.00"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Payment Info */}
        <div className="space-y-6">
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Minimum deposit</span>
                <span className="text-white font-semibold">$1.00</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Maximum deposit</span>
                <span className="text-white font-semibold">$10,000.00</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Processing time</span>
                <span className="text-white font-semibold">Instant</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400">Transaction fee</span>
                <span className="text-white font-semibold">Free</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <History className="w-5 h-5 mr-2" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <History className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No transactions yet</h3>
                <p className="text-gray-400">Your transaction history will appear here.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
