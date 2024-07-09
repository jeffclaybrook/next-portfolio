"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { artboards } from "@/data"
import Image from "next/image"

const Artboards = () => {
 const [api, setApi] = useState<CarouselApi>()
 const [current, setCurrent] = useState(0)
 const [count, setCount] = useState(0)

 useEffect(() => {
  if (!api) {
   return
  }

  setCount(api.scrollSnapList().length)
  setCurrent(api.selectedScrollSnap() + 1)
  api.on("select", () => {
   setCurrent(api.selectedScrollSnap() + 1)
  })
 }, [api])

 return (
  <div className="flex flex-col items-center">
   <Carousel setApi={setApi} className="w-full max-w-4xl">
    <CarouselContent>
     {artboards.map((artboard, i) => (
      <CarouselItem key={i}>
       <Image
        src={artboard.image}
        alt={artboard.alt}
        width={900}
        height={400}
        className="rounded-lg"
       />
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
   <div className="py-2 text-center text-sm text-muted-foreground">
    Artboard {current} of {count}
   </div>
  </div>
 )
}

export default Artboards