export interface SupportTicket {
  id: string
  userId: string
  subject: string
  message: string
  status: "open" | "in_progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "urgent"
  createdAt: Date
  updatedAt: Date
  responses: SupportResponse[]
}

export interface SupportResponse {
  id: string
  ticketId: string
  message: string
  isStaff: boolean
  createdAt: Date
}

export const supportTickets: SupportTicket[] = [
  {
    id: "TICKET-001",
    userId: "user-1",
    subject: "Payment Issue",
    message: "I am having trouble adding funds to my account. The payment keeps failing.",
    status: "in_progress",
    priority: "high",
    createdAt: new Date("2024-01-16T14:30:00Z"),
    updatedAt: new Date("2024-01-16T15:45:00Z"),
    responses: [
      {
        id: "RESP-001",
        ticketId: "TICKET-001",
        message: "Thank you for contacting us. We are looking into your payment issue.",
        isStaff: true,
        createdAt: new Date("2024-01-16T15:45:00Z"),
      },
    ],
  },
]

export const faqItems = [
  {
    id: "faq-1",
    question: "What is Partial status?",
    answer:
      "Partial status means your order was partially completed. This can happen when the target account has restrictions or when the service cannot deliver the full quantity.",
  },
  {
    id: "faq-2",
    question: "What is Drip Feed?",
    answer:
      "Drip feed allows you to spread your order delivery over a specified time period, making it look more natural and organic.",
  },
  {
    id: "faq-3",
    question: "How do I use mass order?",
    answer:
      "Mass order allows you to place multiple orders at once using a CSV file or by entering multiple links separated by new lines.",
  },
  {
    id: "faq-4",
    question: "I want a panel like yours / I want to resell your services how?",
    answer:
      "You can become our reseller by contacting our support team. We offer white-label solutions and API access for resellers.",
  },
  {
    id: "faq-5",
    question: "Cancel button / Refill button is not working for me?",
    answer:
      "Cancel and refill buttons are only available for specific services and order statuses. Contact support if you need assistance.",
  },
  {
    id: "faq-6",
    question: "Can I get a discount?",
    answer:
      "We offer volume discounts for large orders and special rates for resellers. Contact our support team for more information.",
  },
  {
    id: "faq-7",
    question: "Can I pay with a custom payment method?",
    answer:
      "We accept various payment methods including PayPal, Stripe, and cryptocurrency. Contact support for custom payment arrangements.",
  },
  {
    id: "faq-8",
    question: "Does drip feed work with mass order / or with API?",
    answer:
      "Yes, drip feed functionality is available through both mass orders and our API. Check our API documentation for implementation details.",
  },
]
