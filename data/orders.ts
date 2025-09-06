export interface Order {
  id: string
  userId: string
  serviceId: string
  serviceName: string
  platform: string
  quantity: number
  startCount: number
  charge: number
  status: "pending" | "in_progress" | "completed" | "partial" | "processing" | "canceled"
  link: string
  createdAt: Date
  updatedAt: Date
  remains: number
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    userId: "user-1",
    serviceId: "288",
    serviceName: "Instagram Followers",
    platform: "instagram",
    quantity: 1000,
    startCount: 1250,
    charge: 5.0,
    status: "completed",
    link: "https://instagram.com/example",
    createdAt: new Date("2024-01-15T10:30:00Z"),
    updatedAt: new Date("2024-01-15T14:30:00Z"),
    remains: 0,
  },
  {
    id: "ORD-002",
    userId: "user-1",
    serviceId: "363",
    serviceName: "Instagram Likes",
    platform: "instagram",
    quantity: 500,
    startCount: 45,
    charge: 0.5,
    status: "in_progress",
    link: "https://instagram.com/p/example",
    createdAt: new Date("2024-01-16T09:15:00Z"),
    updatedAt: new Date("2024-01-16T09:15:00Z"),
    remains: 150,
  },
  {
    id: "ORD-003",
    userId: "user-1",
    serviceId: "372",
    serviceName: "Instagram Followers Premium",
    platform: "instagram",
    quantity: 2500,
    startCount: 3200,
    charge: 62.5,
    status: "pending",
    link: "https://instagram.com/example2",
    createdAt: new Date("2024-01-17T16:45:00Z"),
    updatedAt: new Date("2024-01-17T16:45:00Z"),
    remains: 2500,
  },
]
