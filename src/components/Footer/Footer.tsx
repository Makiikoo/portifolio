function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-cyber-border py-8">
      <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        {/* Identificação */}
        <div>
          <p className="text-sm font-bold text-cyber-green">&lt;JC /&gt;</p>
          <p className="mt-1 text-xs text-cyber-text">
            Construído com código, café e curiosidade.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Makiikoo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-cyber-text transition-colors hover:text-cyber-green"
          >
            <i className="fa-brands fa-github text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/juniorcamposdev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-cyber-text transition-colors hover:text-cyber-cyan"
          >
            <i className="fa-brands fa-linkedin text-lg" />
          </a>

          <a
            href="#hero"
            className="text-xs font-semibold text-cyber-cyan transition-colors hover:text-cyber-green"
          >
            VOLTAR AO TOPO ↑
          </a>
        </div>
      </div>

      {/* Divisória e Copyright sem transparência excessiva */}
      <div className="mt-8 border-t border-cyber-border pt-5 text-center">
        <p className="text-xs text-cyber-text">
          © {currentYear} <span className="font-bold text-white">Ewerton Campos Junior</span>. Todos os direitos reservados.
        </p>

        <p className="mt-2 font-mono text-xs font-semibold text-cyber-green">
          ● SYSTEM STATUS: OPERATIONAL
        </p>
      </div>
    </footer>
  );
}

export default Footer;