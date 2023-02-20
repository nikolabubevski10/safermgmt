const getWidth = (): number => {
  const w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return w;
};

export default getWidth;
