import { useTypingEffect } from "../../Hooks/useTypingEffect";

function Hero() {
  const typedText = useTypingEffect();

  return (
    <section id="hero" className="py-12 md:py-20">
      <div className="relative overflow-hidden rounded-xl border border-cyber-border bg-cyber-card p-6 shadow-2xl md:p-8">
        {/* Terminal Header */}
        <div className="mb-6 flex items-center justify-between border-b border-cyber-border pb-4 text-xs text-cyber-muted">
          <div className="flex items-center gap-2">
            <span className="text-cyber-green">&gt;_</span>
            <span>bash - 80x24</span>
          </div>

          <div>
            STATUS:{" "}
            <span className="animate-pulse font-bold text-cyber-green">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-4">
          <p className="font-mono text-sm text-cyber-cyan sm:text-base">
            $ whoami
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Júnior Campos
          </h1>

          {/* Typing Effect */}
          <div className="flex min-h-9 items-center text-lg font-semibold text-cyber-green sm:text-2xl">
            <span>{typedText}</span>

            <span className="cursor-blink ml-1 text-cyber-green">_</span>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-cyber-text sm:text-base">
            Estudante de Análise e Desenvolvimento de Sistemas focado em{" "}
            <span className="text-cyber-cyan">Cybersecurity</span> &{" "}
            <span className="text-cyber-green">Software Engineering</span>.
            Desenvolvendo sistemas robustos, seguros e eficientes.
          </p>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 pt-4 text-xs">
            <span className="flex items-center gap-2 rounded-md border border-cyber-green/40 bg-cyber-border/60 px-3 py-1.5 text-cyber-green">
              <i className="fa-solid fa-shield-halved" />
              CompTIA Security+ (In Prep)
            </span>

            <span className="flex items-center gap-2 rounded-md border border-cyber-cyan/40 bg-cyber-border/60 px-3 py-1.5 text-cyber-cyan">
              <i className="fa-solid fa-box-archive" />
              TryHackMe / Hack The Box
            </span>

            <span className="flex items-center gap-2 rounded-md border border-purple-500/40 bg-cyber-border/60 px-3 py-1.5 text-purple-400">
              <i className="fa-solid fa-graduation-cap" />
              Rocketseat / DIO
            </span>

            <span className="flex items-center gap-2 rounded-md border border-purple-500/40 bg-cyber-border/60 px-3 py-1.5 text-purple-400">
              <i className="fa-solid fa-graduation-cap" />
              Estácio
            </span>

            <span className="flex items-center gap-2 rounded-md border border-purple-500/40 bg-cyber-border/60 px-3 py-1.5 text-purple-400">
              <i className="fa-solid fa-graduation-cap" />
              Udemy
            </span>
          </div>

          {/* Call To Action */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg border border-cyber-green bg-cyber-green/10 px-6 py-3 font-bold text-cyber-green shadow-lg transition-all duration-300 hover:bg-cyber-green hover:text-black hover:shadow-[0_0_15px_rgba(0,255,102,0.3)]"
            >
              <i className="fa-solid fa-code-branch" />
              Explorar Projetos
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-cyber-cyan bg-cyber-cyan/10 px-6 py-3 font-bold text-cyber-cyan shadow-lg transition-all duration-300 hover:bg-cyber-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
            >
              <i className="fa-solid fa-paper-plane" />
              Iniciar Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
