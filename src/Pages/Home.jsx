import AboutMe from "../Sessions/AboutMe";
import Apresentation from "../Sessions/Apresentation";
import CardProfile from "../Components/CardProfile";
import Header from "../Components/Header";
import Skill from "../Sessions/Skills";
import Works from "../Sessions/Works";
import ContateMe from "../Sessions/CotateMe";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div className="menu-1080px" style={{display:"none"}}>
        <a href="#">Incio</a>
        <a href="#">Conheça-me</a>
        <a href="#">Habilidades</a>
        <a href="#">Trabalhos</a>
        <a href="#">Contato</a>
      </div>
      <Header />
      <CardProfile />
      <Apresentation />
      <AboutMe />
      <img src="#" alt="pc" />
      <Skill />
      <Works />
      <ContateMe />
      <Footer />
    </>
  )
}