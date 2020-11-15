export const onScroll = (mutator: CallableFunction) => {
  if (!process.browser) return;
  window.addEventListener("scroll", () => {
    mutator(window.scrollY);
  });
};
