import Division from "../Components/Division";
import Monitors from "../Components/Monitors";

export default function Works() {
  return (
    <>
      <Division />
      <div id="technology-session">
        <h1>Works</h1>
        <span>Abaixo você consegue ver alguns dos meus trabalhos</span>
      </div>
      <div className="monitors-container">
        <Monitors />
      </div>
      <a href="" className="link-project-github">Link github</a>
    </>
  )
}