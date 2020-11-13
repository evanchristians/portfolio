export const useScroll = (setScrollCallback: CallableFunction) => {
  let lastScrollY: number = 0;
  let ticking: boolean = false;

  const update = () => {
    setScrollCallback(lastScrollY);
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  const onScroll = () => {
    lastScrollY = window.scrollY;
    requestTick();
  };

  window.addEventListener("scroll", onScroll);
};
