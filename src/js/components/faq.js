export function initFaq() {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq__header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("faq__item--active");

      // Закрываем все открытые элементы (Accordion behavior)
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("faq__item--active");
      });

      // Если текущий элемент не был активен, открываем его
      if (!isActive) {
        item.classList.add("faq__item--active");
      }
    });
  });
}
