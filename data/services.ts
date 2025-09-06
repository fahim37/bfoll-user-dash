export interface Service {
  id: string
  name: string
  platform: "instagram" | "tiktok" | "facebook" | "twitter" | "youtube" | "linkedin"
  type: "followers" | "likes" | "views" | "comments" | "shares"
  pricePerUnit: number
  minOrder: number
  maxOrder: number
  description: string
  features: string[]
  deliveryTime: string
  quality: "high" | "premium" | "standard"
}

export const services: Service[] = [
  {
    id: "288",
    name: "Instagram Followers",
    platform: "instagram",
    type: "followers",
    pricePerUnit: 0.005,
    minOrder: 50,
    maxOrder: 5000000,
    description: "High-quality Instagram followers to boost your social presence",
    features: ["Real accounts", "Gradual delivery", "No password required"],
    deliveryTime: "0-6 hours",
    quality: "high",
  },
  {
    id: "363",
    name: "Instagram Likes",
    platform: "instagram",
    type: "likes",
    pricePerUnit: 0.001,
    minOrder: 10,
    maxOrder: 300000,
    description: "Instant Instagram likes for your posts",
    features: ["Fast delivery", "High retention", "24/7 support"],
    deliveryTime: "0-1 hours",
    quality: "premium",
  },
  {
    id: "372",
    name: "Instagram Followers Premium",
    platform: "instagram",
    type: "followers",
    pricePerUnit: 0.025,
    minOrder: 100,
    maxOrder: 10000000,
    description: "Premium Instagram followers with profile pictures",
    features: ["Profile pictures", "Active accounts", "Lifetime guarantee"],
    deliveryTime: "0-12 hours",
    quality: "premium",
  },
  {
    id: "291",
    name: "Instagram Comments",
    platform: "instagram",
    type: "comments",
    pricePerUnit: 0.05,
    minOrder: 5,
    maxOrder: 1000001,
    description: "Custom Instagram comments to increase engagement",
    features: ["Custom comments", "Real users", "Instant start"],
    deliveryTime: "0-6 hours",
    quality: "high",
  },
  {
    id: "289",
    name: "Instagram Views",
    platform: "instagram",
    type: "views",
    pricePerUnit: 0.00025,
    minOrder: 75,
    maxOrder: 100000000,
    description: "Instagram video views for reels and IGTV",
    features: ["High retention", "Fast delivery", "Safe method"],
    deliveryTime: "0-1 hours",
    quality: "standard",
  },
  {
    id: "292",
    name: "Instagram Story Views",
    platform: "instagram",
    type: "views",
    pricePerUnit: 0.00025,
    minOrder: 10,
    maxOrder: 50000,
    description: "Boost your Instagram story views",
    features: ["Anonymous views", "Instant delivery", "Safe"],
    deliveryTime: "0-1 hours",
    quality: "standard",
  },
  {
    id: "293",
    name: "Twitter Followers",
    platform: "twitter",
    type: "followers",
    pricePerUnit: 0.025,
    minOrder: 100,
    maxOrder: 1000000,
    description: "High-quality Twitter followers",
    features: ["Real accounts", "Profile pictures", "Active users"],
    deliveryTime: "0-24 hours",
    quality: "high",
  },
]

export const platforms = [
  { id: "instagram", name: "Instagram", color: "bg-pink-500", icon: "instagram" },
  { id: "tiktok", name: "TikTok", color: "bg-black", icon: "tiktok" },
  { id: "facebook", name: "Facebook", color: "bg-blue-600", icon: "facebook" },
  { id: "twitter", name: "Twitter", color: "bg-sky-500", icon: "twitter" },
  { id: "youtube", name: "YouTube", color: "bg-red-600", icon: "youtube" },
  { id: "linkedin", name: "LinkedIn", color: "bg-blue-700", icon: "linkedin" },
]
