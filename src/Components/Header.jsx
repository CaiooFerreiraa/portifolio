import { Link } from "react-router-dom"
import "../css/header.css"

export default function Header() {
  return (
    <header>
      <nav>
        <span id="nameProfile"><i className="tag">{'<C/>'}</i> CaioFerreira</span>
        <div className="home-seach">
          <Link to={'#home'} className="link-header">Home</Link>
          <span className="material-symbols-outlined">search</span>
        </div>
      </nav>
    </header>
  )
}