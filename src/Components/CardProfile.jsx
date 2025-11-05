export default function CardProfile() {
  return (
    <div id="card-profile">
      <img src="#" alt="caio_ferreira"/>
      <div className="name-infos">      
        <h3>Caio Ferreira</h3>
        <span>Full-stack developer</span>
      </div>
      <ul>
        <li><i className="material-symbols-outlined">mail</i>caioferreiraadev@gmail.com</li>
        <li><i className="material-symbols-outlined">location_on</i>Brasil/BA</li>
        <li><i className="material-symbols-outlined">desktop_windows</i>Freelancer</li>
        <li><i className="material-symbols-outlined">link</i>https://www.linkedin.com/in/caioferreiraadev/</li>
      </ul>
      <div id="technology">
        <span>HTML</span>
        <span>JS</span>
        <span>REACT</span>
        <span>CSS</span>
        <span>NODE.JS</span>
        <span>JAVA</span>
      </div>
      <a 
        href="/Curriculo_Caio_Ferreira_Almeida.pdf"
        download
      >
        Download CV <i className="material-symbols-outlined">download</i>
      </a>
    </div>
  )
}