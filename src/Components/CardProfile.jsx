

export default function CardProfile() {
  return (
    <div id="card-profile">
      <div id="img-profile">
        <img src="/img-test.png" alt="caio_ferreira"/>
      </div>
      <div className="name-infos">      
        <h3>Caio Ferreira</h3>
        <span>Full-stack developer</span>
      </div>
      <ul>
        <li><i className="material-symbols-outlined ico">mail</i>caioferreiraadev@gmail.com</li>
        <li><i className="material-symbols-outlined ico">location_on</i>Brasil/BA</li>
        <li><i className="material-symbols-outlined ico">desktop_windows</i>Freelancer</li>
        <li><i className="material-symbols-outlined ico">link</i><a href="https://github.com/CaiooFerreiraa">Meu github</a></li>
      </ul>
      <div className="technologys">
        <span>HTML</span>
        <span>JS</span>
        <span>REACT</span>
      </div>
      <div className="technologys">
        <span>CSS</span>
        <span>NODE.JS</span>
        <span>JAVA</span>
      </div>
      <a 
        href="/Curriculo_Caio_Ferreira_Almeida.pdf"
        download
        className="download-cv"
      >
        Download CV  <i className="material-symbols-outlined">download</i>
      </a>
    </div>
  )
}