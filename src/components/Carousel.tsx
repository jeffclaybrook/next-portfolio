"use client"

import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { artboards } from "@/data"
import "@splidejs/react-splide/css"

const Carousel = () => {
 return (
  <Splide aria-label="Artboards">
   {artboards.map((item, i) => (
    <SplideSlide key={i}>
     <Image
      src={item.image}
      alt={item.alt}
      width={900}
      height={400}
      className="mx-auto rounded-lg"
     />
    </SplideSlide>
   ))}
  </Splide>
 )
}

export default Carousel