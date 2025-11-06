import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <span id="nameProfile"><i className="tag">{'<C/>'}</i>CaioFerreira</span>
        <Link to={'#home'} className="link-header">Home</Link>
        <span className="material-symbols-outlined">search</span>
      </nav>
    </header>
  )
}