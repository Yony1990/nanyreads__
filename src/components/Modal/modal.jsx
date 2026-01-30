import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import "./modal.css"

export default function ImageModal({ img, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  return createPortal(
    <div
      className={`modal ${visible ? "show" : ""}`}
      onClick={handleClose}
    >
      <img src={img} alt="" onClick={handleClose} />
    </div>,
    document.getElementById("modal-root")
  )
}
