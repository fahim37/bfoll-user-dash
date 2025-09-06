export interface User {
  id: string
  username: string
  email: string
  balance: number
  totalSpent: number
  joinedAt: Date
  avatar?: string
  timezone: string
}

export const currentUser: User = {
  id: "user-1",
  username: "qwerty",
  email: "user@example.com",
  balance: 0,
  totalSpent: 0,
  joinedAt: new Date("2024-01-01T00:00:00Z"),
  timezone: "UTC",
}
