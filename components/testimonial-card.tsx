import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  vehicle: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, vehicle, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="border-l-4 border-primary/50 pl-4 italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{vehicle}</div>
      </CardFooter>
    </Card>
  )
}
