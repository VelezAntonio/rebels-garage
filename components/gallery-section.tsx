"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "/work-elcamino.jpeg",
    alt: "Red Chevrolet El Camino with black racing stripes",
    caption: "Chevy El Camino - Custom red paint with black racing stripes",
  },
  {
    src: "/work-chevy-obs.jpeg",
    alt: "Freshly painted red Chevrolet OBS truck in the shop",
    caption: "Chevy OBS - Full repaint in show-quality red",
  },
  {
    src: "/work-jeep-wrangler.jpg",
    alt: "Burgundy Jeep Wrangler with light bar and custom bumper",
    caption: "Jeep Wrangler - Custom burgundy build & off-road upgrades",
  },
  {
    src: "/work-ford-f250.jpg",
    alt: "White Ford F-250 Super Duty Platinum truck, front view",
    caption: "Ford F-250 Platinum - Detail & finish work",
  },
  {
    src: "/work-acura-tl.jpg",
    alt: "Dark gray Acura TL sedan with bronze wheels, lowered",
    caption: "Acura TL - Custom finish with bronze wheels",
  },
]

export default function GallerySection() {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setOpen(true)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Browse through our gallery to see examples of our quality repairs and restorations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <div className="relative h-[80vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-black/20 rounded-full"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="h-full flex items-center justify-center">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
              <p>{galleryImages[selectedImage].caption}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
