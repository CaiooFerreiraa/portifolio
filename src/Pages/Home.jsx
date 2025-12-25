import AboutMe from "../Sessions/AboutMe";
import Apresentation from "../Sessions/Apresentation";
import CardProfile from "../Components/CardProfile";
import Header from "../Components/Header";
import Skill from "../Sessions/Skills";
import Works from "../Sessions/Works";
import ContateMe from "../Sessions/ContactMe";
import Footer from "../Components/Footer";
import MenuDesktop from "../Components/MenuDesktop";

export default function Home() {
  return (
    <>
      <MenuDesktop />
      <Header />
      <CardProfile />
      <Apresentation />
      <AboutMe />
      <Skill />
      <Works />
      <ContateMe />
      <Footer />
    </>
  )
}