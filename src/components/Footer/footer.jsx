import { useEffect, useRef, useState } from "react"
import carouselImages from "../../assets/carrucel"
import ImageModal from "../Modal/modal"
import "./footer.css"

export default function Footer() {
  const carouselRef = useRef(null)
  const hovering = useRef(false)
  const velocity = useRef(0)
  const raf = useRef(null)
  const [img, setImg] = useState(null)

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    const animate = () => {
      if (Math.abs(velocity.current) < 0.1) {
        velocity.current = 0
        raf.current = null
        return
      }

      el.scrollLeft += velocity.current
      velocity.current *= 0.9 // fricción (clave)
      raf.current = requestAnimationFrame(animate)
    }

    const onWheel = (e) => {
      if (!hovering.current) return

      e.preventDefault()
      velocity.current += e.deltaY * 0.4

      if (!raf.current) {
        raf.current = requestAnimationFrame(animate)
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      window.removeEventListener("wheel", onWheel)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = img ? "hidden" : ""
  }, [img])

  return (
    <>
      <footer
        ref={carouselRef}
        className="carousel"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
      
        {carouselImages.map((imgSrc, i) => (
          <img
            key={i}
            src={imgSrc}
            loading="lazy"
            decoding="async"
            onClick={() => setImg(imgSrc)}
          />
        ))}
      </footer>

      {img && <ImageModal img={img} onClose={() => setImg(null)} />}
    </>
  )
}
