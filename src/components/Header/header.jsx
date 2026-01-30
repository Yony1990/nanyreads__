import { useState } from "react"
import logo from "../../assets/img/logo2.png"
import ImageModal from "../Modal/modal"
import "./header.css"

export default function header() {
  const [open, setOpen] = useState(false)

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      })
    } else {
      alert("Tu dispositivo no soporta compartir nativo")
    }
  }

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => setOpen(true)}
        />

        <i className="bi bi-share-fill share" onClick={share}></i>
      </header>

      {open && <ImageModal img={logo} onClose={() => setOpen(false)} />}
    </>
  )
}
