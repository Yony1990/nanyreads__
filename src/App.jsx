import Header from "./components/Header/header"
import Main from "./components/Main/main"
import Footer from "./components/Footer/footer"

export default function App() {
  return (
    <div className="app-root">
      <div className="blur-bg" />
      <Header />

      <div className="page">
        <Main />
        <Footer />
      </div>
    </div>
  )
}
