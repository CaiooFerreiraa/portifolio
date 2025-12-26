import Division from "../Components/Division";
import LineTittle from "../Components/LineTittle";
import Monitors from "../Components/Monitors";

export default function Works() {
  return (
    <div id="work-session">
      <Division />
      <div className="container">
        <h1>Trabalhos</h1>
        <LineTittle />
        <span>Abaixo você consegue ver alguns dos meus trabalhos</span>
      </div>
      <div className="monitors-container">
        <Monitors />
        <a href="" className="link-project-github">Link do projeto no github</a>
      </div>
    </div>
  )
}