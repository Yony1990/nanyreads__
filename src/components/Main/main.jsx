import avatar from "../../assets/img/avatar.jpg"
import insta from "../../assets/img/insta.png"
import StoryGraph from "../../assets/img/The_StoryGraph.png"
import tiktok from "../../assets/img/tiktok.png"
import goodreads from "../../assets/img/goodreads.png"
import "./main.css"

const links = [
  { name: "Instagram", img: insta, url: "https://www.instagram.com/nanyreads_" },
  { name: "TikTok", img: tiktok, url: "https://www.tiktok.com/@nanyreads_" },
  { name: "Goodreads", img: goodreads, url: "https://www.goodreads.com/user/show/189847472" },
  { name: "StoryGraph", img: StoryGraph, url: "https://app.thestorygraph.com/profile/nanyreads_" },
]

export default function main() {
  return (
    <main className="main">
      <img src={avatar} className="avatar" />

      <h1>nanyreads_</h1>

      <p className="desc">
        ✨ Here for the love stories and the happy endings <br />
        ✨ My personality is mostly books <br />
        ✨ In my MM romance era
      </p>

      <div className="links">
        {links.map((l) => (
          <a key={l.name} href={l.url} className="link-btn">
            <img src={l.img} />
            <span>{l.name}</span>
            <i className="bi bi-three-dots-vertical"></i>
          </a>
        ))}
      </div>
    </main>
  )
}
