export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  language: string;
  languageColor: string;
  iconColor: string;
  stars: number;
  forks: number;
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfólio Cyber Terminal",
    description:
      "Portfólio pessoal responsivo com estética hacker, efeitos CRT, animação Matrix canvas e carrossel de repositórios dinâmico.",
    technologies: ["Tailwind CSS", "JavaScript", "HTML5"],
    language: "JavaScript",
    languageColor: "text-cyber-green",
    iconColor: "text-cyber-green",
    stars: 12,
    forks: 4,
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Network Security Scanner",
    description:
      "Ferramenta em Python para varredura de portas abertas, enumeração de serviços e verificação de banners de cabeçalho HTTP.",
    technologies: ["Python", "Sockets", "Linux"],
    language: "Python",
    languageColor: "text-yellow-400",
    iconColor: "text-cyber-cyan",
    stars: 18,
    forks: 7,
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Secure Auth API",
    description:
      "API Node.js/Express com autenticação JWT, criptografia bcrypt, controle de taxa de requisições (Rate Limit) e proteção contra OWASP Top 10.",
    technologies: ["Node.js", "JWT", "PostgreSQL"],
    language: "Node.js",
    languageColor: "text-cyber-green",
    iconColor: "text-purple-400",
    stars: 25,
    forks: 9,
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "CTF Writeups & Lab Scripts",
    description:
      "Repositório de resoluções detalhadas de máquinas das plataformas TryHackMe e Hack The Box, com scripts automatizados em Bash e Python.",
    technologies: ["Cybersecurity", "Bash", "Writeups"],
    language: "Shell",
    languageColor: "text-cyber-cyan",
    iconColor: "text-yellow-400",
    stars: 31,
    forks: 14,
    githubUrl: "https://github.com",
  },
];
