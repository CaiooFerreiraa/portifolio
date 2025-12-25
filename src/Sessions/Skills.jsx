import BubbleTechnology from "../Components/BubbleTechnology";
import CardTechnology from "../Components/CardTechnology";
import Division from "../Components/Division";
import LineTittle from "../Components/LineTittle";

export default function Skill() {
  return (
    <div id="skills">
      <div className="container">
        <Division />
        <div id="technology-session">
          <h1>
            Tecnologias
            <LineTittle />
          </h1>
          <span>Estou me esforçando para nunca parar de estudar e melhorar</span>
        </div>
        <div className="cards-technology">
          <CardTechnology 
            tittle={"Back-end Developer"} 
            iconName={"desktop_windows"} 
            description={"NODE.JS • JS • PYTHON • JAVA"}
          />
          <CardTechnology 
            tittle={"Front-end Developer"} 
            iconName={"mobile"} 
            description={"HTML • CSS • JS • REACT"}
          />
        </div>
        <div className="bubbles-technology">
          <BubbleTechnology  
            iconClassName={'devicon-javascript-plain'} 
            languageName={"JS"} 
            bgColor={"#e7a020"}
          />
          <BubbleTechnology 
            iconClassName={'devicon-html5-plain'} 
            languageName={"HTML"} 
            bgColor={'#e54f26'}
          />
          <BubbleTechnology 
            iconClassName={'devicon-css3-plain'} 
            languageName={"CSS"} 
            bgColor={'#0c73b8'}
          />
          <BubbleTechnology 
            iconClassName={'devicon-react-original'} 
            languageName={"REACT"} 
            bgColor={'#28a9e0'}
          />
          <BubbleTechnology 
            iconClassName={'devicon-java-plain'} 
            languageName={"JAVA"} 
            bgColor={'#007396'}
          />
          <BubbleTechnology 
            iconClassName={'devicon-python-plain'} 
            languageName={"PYTHON"} 
            bgColor={"#FFD43B"}
          />
        </div>
      </div>
    </div>
  )
}