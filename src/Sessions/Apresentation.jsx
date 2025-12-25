export default function Apresentation() {
  const [countLanguage, countTools, countYearExp] = [3, 4, 2];

  return (
    <>
      <h1 className="h1-apresentation"> 
        <span className="tag-literal">&lt;h1&gt;</span>
        <div>
          Olá<br />
          Eu sou <span id="name">Caio</span>,<br />
          Full-stack developer.
        </div>
        <span className="tag-literal">&lt;/h1&gt;</span>
      </h1>
      <p className="p-apresentation">
        <span className="tag-literal">&lt;p&gt;</span>
        <div className="text">
          Auxilio empresas e estabelecimentos
          a se destacarem no ambiente digital,
          criando sistemas web e internos.
        </div>
        <span className="tag-literal">&lt;/p&gt;</span>
      </p>
      <h2 className="h2-apresentation">Vamos conversar <i className="material-symbols-outlined">mail</i></h2>
      <div className="infos-apresentation">
        <div><span>{countLanguage}</span>Linguagens de Programação</div>
        <div><span>{countTools}</span>Ferramentas de Desenvolvimento</div>
        <div><span>{countYearExp}</span>Anos de Experiência</div>
      </div>
    </>
  )
}