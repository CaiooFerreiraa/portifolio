import Division from "../Components/Division";

export default function AboutMe() {
  return (
    <div id="about-me">
      <Division />
      <h1>Conheça-me</h1>
      <p>
        <span className="tag-literal">&lt;p&gt;</span>
        <h2 className="text-enfase">Olá!</h2>
        <div>Meu nome é Caio Ferreira, e sou apaixonado por tecnologia e desenvolvimento de software. Especialista em back-end, trabalho com <span className="text-enfase">Node.js</span>, <span className="text-enfase">Java</span> e <span className="text-enfase">Python</span>, ainda tenho conhecimento em linguagens como <span className="text-enfase">HTML</span>, <span className="text-enfase">CSS</span>, <span className="text-enfase">JS</span> e <span className="text-enfase">REACT</span> criando APIs robustas e escaláveis com Express, FastAPI e Spring Boot tudo depende de qual linguagem estarei usando. </div>

        <div>Tenho como foco escrever códigos limpos e bem estruturados, seguindo princípios como <i className="text-enfase">Clean Code</i> e <i className="text-enfase">Clean Architecture</i>. Acredito que qualidade e clareza no desenvolvimento são fundamentais para construir soluções eficientes e duradouras.</div>

        <div>Sou movido por desafios e pela constante busca por aprendizado. Gosto de explorar diferentes linguagens e escolher sempre a que melhor se adapta ao problema a ser resolvido. Também possuo conhecimentos em Redes e Banco de Dados, adquiridos e aprimorados durante minha trajetória acadêmica e prática.</div>

        <div>Embora sempre tenha sido autodidata, decidi me aprofundar ainda mais na área. Atualmente, curso o 5º semestre de <span className="text-enfase">Bacharelado em Sistemas de Informação no IFBA</span>, em Vitória da Conquista/BA, onde continuo expandindo minhas habilidades técnicas e teóricas.</div>
        <span className="tag-literal">&lt;/p&gt;</span>
      </p>

      <img src="./pc.webp" alt="imagem de pc" />
    </div >
  )
}