/**
 * Fades in [data-reveal] elements as they scroll into view. Elements already
 * on screen at load are left untouched, so there is no flash above the fold
 * and the page stays fully visible without JavaScript.
 */
export function initReveal(root: ParentNode = document): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );

  const foldLine = window.innerHeight * 0.92;
  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top < foldLine) return;
    el.classList.add('reveal');
    observer.observe(el);
  });
}
