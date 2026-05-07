import { Car, PenToolIcon as Tool, PaintBucket, Truck, CarIcon as Jeep, Ruler } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "car" | "tool" | "paintBucket" | "truck" | "jeep" | "ruler"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "car":
        return <Car className="h-10 w-10 text-primary" />
      case "tool":
        return <Tool className="h-10 w-10 text-primary" />
      case "paintBucket":
        return <PaintBucket className="h-10 w-10 text-primary" />
      case "truck":
        return <Truck className="h-10 w-10 text-primary" />
      case "jeep":
        return <Jeep className="h-10 w-10 text-primary" />
      case "ruler":
        return <Ruler className="h-10 w-10 text-primary" />
      default:
        return <Car className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-4">
          <IconComponent />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
