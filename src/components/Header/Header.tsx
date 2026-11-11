interface HeaderProps {
  isCRTEnabled: boolean;
  onToggleCRT: () => void;
}

function Header({ isCRTEnabled, onToggleCRT }: HeaderProps) {
  return (
    <header className="my-4 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-cyber-green/20 bg-cyber-card/90 p-4 shadow-lg backdrop-blur">
      {/* Terminal Identity */}
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="text-xs font-bold tracking-wider text-cyber-muted">
          user@JuniorCampos-sec:~
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
        <a
          href="#hero"
          className="flex items-center gap-1 transition-colors hover:text-cyber-green"
        >
          <span className="text-cyber-green">01.</span>
          //home
        </a>

        <a
          href="#about"
          className="flex items-center gap-1 transition-colors hover:text-cyber-green"
        >
          <span className="text-cyber-green">02.</span>
          //sobre
        </a>

        <a
          href="#projects"
          className="flex items-center gap-1 transition-colors hover:text-cyber-green"
        >
          <span className="text-cyber-green">03.</span>
          //projetos
        </a>

        <a
          href="#contact"
          className="flex items-center gap-1 transition-colors hover:text-cyber-green"
        >
          <span className="text-cyber-green">04.</span>
          //contato
        </a>
      </nav>

      {/* CRT Button - visual only for now */}

      <button
        type="button"
        onClick={onToggleCRT}
        aria-pressed={isCRTEnabled}
        className={`rounded-md border px-3 py-1.5 text-xs transition-all ${
          isCRTEnabled
            ? "border-cyber-green bg-cyber-green/10 text-cyber-green glow-green"
            : "border-cyber-border text-cyber-muted hover:border-cyber-green hover:text-cyber-green"
        }`}
      >
        <i className="fa-solid fa-tv mr-2" />
        CRT: {isCRTEnabled ? "ON" : "OFF"}
      </button>
    </header>
  );
}

export default Header;
