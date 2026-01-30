import { useEffect, useState } from "react"
import "./modal.css"

export default function ImageModal({ img, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    const closeOnEsc = (e) => {
      if (e.key === "Escape") handleClose()
    }

    window.addEventListener("keydown", closeOnEsc)
    return () => window.removeEventListener("keydown", closeOnEsc)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div
      className={`modal ${visible ? "show" : ""}`}
      onClick={handleClose}
    >
      <img
        src={img}
        alt=""
        onClick={handleClose}
      />
    </div>
  )
}
