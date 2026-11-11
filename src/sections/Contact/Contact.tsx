import { useState, type FormEvent } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const contactEmail = "juniorbio20@gmail.com";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Contato pelo portfólio - ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setShowModal(true);
  }

  return (
    <section id="contact" className="border-t border-cyber-border/50 py-16">
      <div className="mb-10 flex items-center gap-3">
        <span className="text-xl text-cyber-green">04.</span>
        <h2 className="text-xl font-bold text-white sm:text-3xl">
          // Entre em contato
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Informações de contato */}
        <div>
          <p className="mb-4 text-sm text-cyber-green">
            $ ./establish_connection.sh
          </p>

          <h3 className="mb-4 text-2xl font-bold text-white">
            Vamos conversar?
          </h3>

          <p className="mb-8 max-w-md text-sm leading-7 text-cyber-muted">
            Estou aberto a novas oportunidades, projetos e conexões na área de
            tecnologia e cybersecurity.
          </p>

          <div className="mb-8 space-y-4">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 text-sm text-cyber-text transition-colors hover:text-cyber-green"
            >
              <i className="fa-solid fa-envelope text-cyber-green" />
              {contactEmail}
            </a>

            <a
              href="https://github.com/Makiikoo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-cyber-text transition-colors hover:text-cyber-green"
            >
              <i className="fa-brands fa-github text-cyber-green" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/juniorcamposdev/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-cyber-text transition-colors hover:text-cyber-green"
            >
              <i className="fa-brands fa-linkedin text-cyber-green" />
              LinkedIn
            </a>
          </div>

          <div className="rounded-lg border border-cyber-border bg-cyber-card p-4">
            <p className="mb-2 text-xs text-cyber-muted">
              <span className="text-cyber-green">●</span> STATUS DO SISTEMA
            </p>
            <p className="text-sm text-cyber-green">
              ONLINE — Disponível para conexões
            </p>
          </div>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-cyber-border bg-cyber-card p-6"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-xs text-cyber-green"
            >
              NOME
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Seu nome"
              className="w-full rounded-lg border border-cyber-border bg-cyber-bg px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-cyber-muted focus:border-cyber-green"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-xs text-cyber-green"
            >
              E-MAIL
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-lg border border-cyber-border bg-cyber-bg px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-cyber-muted focus:border-cyber-green"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-xs text-cyber-green"
            >
              MENSAGEM
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Digite sua mensagem..."
              className="w-full resize-none rounded-lg border border-cyber-border bg-cyber-bg px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-cyber-muted focus:border-cyber-green"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg border border-cyber-green bg-cyber-green/10 px-5 py-3 text-sm font-bold text-cyber-green transition-all hover:bg-cyber-green hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.25)]"
          >
            <i className="fa-solid fa-paper-plane mr-2" />
            Enviar mensagem
          </button>
        </form>
      </div>

      {/* Modal de confirmação */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-cyber-green bg-cyber-card p-7 text-center shadow-[0_0_30px_rgba(0,255,102,0.15)]"
            onClick={(event) => event.stopPropagation()}
          >
            <i className="fa-solid fa-terminal mb-4 text-3xl text-cyber-green" />

            <h3 className="mb-3 text-lg font-bold text-white">
              CONEXÃO INICIADA
            </h3>

            <p className="mb-6 text-sm leading-6 text-cyber-muted">
              Seu aplicativo de e-mail deve abrir com a mensagem preparada.
              Confira os dados e conclua o envio por lá.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="rounded-lg border border-cyber-green px-6 py-2 text-sm text-cyber-green transition-colors hover:bg-cyber-green hover:text-black"
            >
              FECHAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
