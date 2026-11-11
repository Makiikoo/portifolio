import { useEffect, useState } from "react";

const phrases = [
  "Análise e Dev. de Sistemas @ Estácio",
  "Analista de Cybersecurity & CTFs",
  "Desenvolvedor Software / Fullstack",
  "KaliLinux & Scripting",
];

export function useTypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentPhrase) {
      speed = 2000;
    }

    if (isDeleting && displayedText === "") {
      speed = 500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText === currentPhrase) {
          setIsDeleting(true);
        } else {
          setDisplayedText(
            currentPhrase.substring(0, displayedText.length + 1),
          );
        }
      } else {
        if (displayedText === "") {
          setIsDeleting(false);
          setPhraseIndex((previous) => (previous + 1) % phrases.length);
        } else {
          setDisplayedText(
            currentPhrase.substring(0, displayedText.length - 1),
          );
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return displayedText;
}
