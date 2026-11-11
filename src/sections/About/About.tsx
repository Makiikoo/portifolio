const skills = [
  { name: "Python", color: "green" },
  { name: "JavaScript / TypeScript", color: "green" },
  { name: "React", color: "green" },
  { name: "Node.js", color: "green" },
  { name: "Linux / Bash", color: "cyan" },
  { name: "Git & GitHub", color: "cyan" },
  { name: "Wireshark & Nmap", color: "cyan" },
  { name: "SQL / PostgreSQL", color: "purple" },
];

const systemSpecs = [
  {
    label: "EDUCAÇÃO:",
    value: "ADS @ Estácio",
    color: "text-white",
  },
  {
    label: "FOCO:",
    value: "CyberSec & Dev",
    color: "text-cyber-green",
  },
  {
    label: "PLATAFORMAS:",
    value: "TryHackMe / HTB",
    color: "text-cyber-cyan",
  },
  {
    label: "IDIOMA:",
    value: "Português / Inglês / Espanhol",
    color: "text-white",
  },
  {
    label: "STATUS:",
    value: "Disponível p/ Estágio/Dev",
    color: "text-cyber-green",
  },
];

function About() {
  return (
    <section id="about" className="border-t border-cyber-border/50 py-12">
      {/* Section Heading */}
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-xl text-cyber-green">02.</span>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          // Sobre Mim
        </h2>

        <div className="h-px flex-1 bg-cyber-border" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Biography Card */}
        <div className="relative rounded-xl border border-cyber-border bg-cyber-card p-6 md:col-span-2">
          <div className="mb-4 flex items-center justify-between border-b border-cyber-border pb-3 text-xs text-cyber-muted">
            <span>about_me.txt</span>
            <span>UTF-8</span>
          </div>

          <div className="space-y-4 font-mono text-sm leading-relaxed">
            <p className="text-cyber-muted">$ cat about_me.txt</p>

            <p className="text-cyber-text">
              Olá! Sou o{" "}
              <strong className="text-white">Ewerton Campos Junior</strong>,
              amante de tecnologia e atualmente graduando em{" "}
              <span className="text-cyber-cyan">
                Análise e Desenvolvimento de Sistemas
              </span>
              .
            </p>

            <p className="text-cyber-text">
              Minha paixão está na interseção entre a{" "}
              <span className="text-cyber-green">segurança da informação</span>{" "}
              e o{" "}
              <span className="text-cyber-green">
                desenvolvimento de software
              </span>
              . Dedico meu tempo livre a desafios CTF (Capture The Flag), estudo
              de vulnerabilidades de código, Kali Linux e construção de
              aplicações robustas.
            </p>

            <p className="text-cyber-text">
              Busco aplicar boas práticas de desenvolvimento seguro (AppSec),
              automatização de scripts em Python/Shell e arquiteturas modernas
              de backend e frontend.
            </p>

            {/* Skills */}
            <div className="border-t border-cyber-border/50 pt-4">
              <span className="mb-3 block text-xs text-cyber-cyan">
                // Skills & Ferramentas:
              </span>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`
                      rounded border px-2.5 py-1 text-xs
                      bg-cyber-border/40
                      ${
                        skill.color === "green"
                          ? "border-cyber-green/30 text-cyber-green"
                          : skill.color === "cyan"
                            ? "border-cyber-cyan/30 text-cyber-cyan"
                            : "border-purple-500/30 text-purple-400"
                      }
                    `}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Specifications */}
        <div className="flex flex-col justify-between rounded-xl border border-cyber-border bg-cyber-card p-6">
          <div>
            <div className="mb-4 flex items-center justify-between border-b border-cyber-border pb-3 text-xs text-cyber-muted">
              <span>system_specs.sh</span>
              <span>v2.4.0</span>
            </div>

            <ul className="space-y-4 font-mono text-xs">
              {systemSpecs.map((spec, index) => (
                <li
                  key={spec.label}
                  className={`
                    flex items-center justify-between gap-2
                    pb-2
                    ${
                      index !== systemSpecs.length - 1
                        ? "border-b border-cyber-border/40"
                        : ""
                    }
                  `}
                >
                  <span className="shrink-0 text-cyber-muted">
                    {spec.label}
                  </span>

                  <span className={`${spec.color} text-right font-bold`}>
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Badge */}
          <div className="mt-6 rounded border border-cyber-green/30 bg-cyber-bg p-3 text-center">
            <i className="fa-solid fa-user-shield mb-1 block text-2xl text-cyber-green" />

            <span className="block text-xs text-cyber-text">
              Segurança Integrada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
