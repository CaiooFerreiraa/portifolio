import Division from "../Components/Division";

export default function ContateMe() {
  return (
    <>
      <Division />
      <div>
        <h1>Contate-me</h1>
        <span>Atualemnte estou disponível para trabalhar freelancer</span>
      </div>
      <h2>Envie-me uma mensagem</h2>
      <form>
        <div className="person-infos">
          <label htmlFor="name-form">
            Seu nome<sup>*</sup>
            <input type="text" name="name-form" id="name-form" placeholder="Digite seu nome..."/>
          </label>
          <label htmlFor="email-form">
            Seu email<sup>*</sup>
            <input type="email" name="email-form" id="email-form" placeholder="Digite seu email..."/>
          </label>
        </div>
        <label htmlFor="message-form">
          Sua mensagem<sup>*</sup>
          <input type="text" name="message-form" id="message-form" placeholder="Digite sua necessidade..."/>
        </label>
        <button type="submit">Enviar mensagem</button>
      </form>
    </>
  )
}