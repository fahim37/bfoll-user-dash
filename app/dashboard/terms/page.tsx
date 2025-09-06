"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, HelpCircle } from "lucide-react"
import Link from "next/link"

const tabs = [
  { id: "general", label: "General" },
  { id: "refund", label: "Refund" },
  { id: "privacy", label: "Privacy & Policy" },
]

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Terms</h1>
          <p className="text-gray-400">Read our terms of service and policies</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Terms Content */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Terms of service
              </CardTitle>
              <p className="text-gray-400">Please read all of the following terms below.</p>
            </CardHeader>
            <CardContent>
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "general" && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-green-300 text-sm font-medium">
                        By placing an order with BotFollows, you automatically accept all the below-listed term of
                        services whether you read them or not:
                      </p>
                    </div>

                    <div className="space-y-4 text-gray-300">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Service Usage</h4>
                        <p>
                          We reserve the right to change these terms of service without notice. You are expected to read
                          all terms of service before placing every order to ensure you are up to date with any changes
                          or any future changes.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Platform Compliance</h4>
                        <p>
                          You will only use the BotFollows in a manner which follows all agreements made with
                          Soundcloud/Instagram/Pinterest/Youtube/other social media sites and their individual Terms of
                          Service page.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Rate Changes</h4>
                        <p>
                          BotFollows rates are subject to change at any time without notice. The terms stay in effect in
                          the case of rate changes.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Delivery Guarantee</h4>
                        <p>
                          BotFollows does not guarantee a delivery time for any services as its depend on the services
                          order quantity. We offer our best estimation for when the order will be delivered. This is
                          only an estimation and BotFollows will not refund orders that are processing if you feel they
                          are taking too long.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Service Modifications</h4>
                        <p>
                          BotFollows tries hard to deliver exactly what is expected of us in this case, we reserve the
                          right to change a service type if we deem it necessary to complete an order.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-white mb-4">Violate:</h3>
                      <div className="space-y-2 text-gray-300">
                        <p>• Using our services to promote illegal content or activities</p>
                        <p>• Attempting to abuse or exploit our platform</p>
                        <p>• Creating multiple accounts to circumvent limits</p>
                        <p>• Reselling our services without authorization</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "refund" && (
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Refund Policy</h4>
                      <p>
                        BotFollows will only offer refunds if we cannot deliver your order or if there was an error on
                        our end. Refunds are not available for completed orders or orders that are currently being
                        processed.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Partial Refunds</h4>
                      <p>
                        In cases where an order is partially completed, we may offer a partial refund for the
                        undelivered portion of the order.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Processing Time</h4>
                      <p>
                        Refund requests are processed within 3-5 business days. Refunds will be issued to the original
                        payment method used for the order.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "privacy" && (
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Data Collection</h4>
                      <p>
                        We collect only the necessary information required to process your orders and provide our
                        services. This includes your email address, payment information, and order details.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Data Usage</h4>
                      <p>
                        Your personal information is used solely for order processing, customer support, and service
                        improvement. We do not sell or share your data with third parties.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Data Security</h4>
                      <p>
                        We implement industry-standard security measures to protect your personal information and
                        payment data.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Cookies</h4>
                      <p>
                        Our website uses cookies to improve user experience and analyze website traffic. You can disable
                        cookies in your browser settings.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div>
          <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Still need help?</h3>
                <p className="text-purple-200 text-sm mb-4">Need help? Go to the support center!</p>
                <Link href="/dashboard/support">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Support center
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
