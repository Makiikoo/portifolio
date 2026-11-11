import { useEffect, useState } from "react";

export function useCarousel(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Detecta a largura da tela
  useEffect(() => {
    function updateItemsPerPage() {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    }

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Calcula a quantidade de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const maxIndex = Math.max(0, totalPages - 1);

  // Corrige o índice caso a tela seja redimensionada
  useEffect(() => {
    setCurrentIndex((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  function next() {
    setCurrentIndex((previous) => (previous >= maxIndex ? 0 : previous + 1));
  }

  function previous() {
    setCurrentIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }

  function goTo(index: number) {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }

  return {
    currentIndex,
    itemsPerPage,
    totalPages,
    next,
    previous,
    goTo,
  };
}
