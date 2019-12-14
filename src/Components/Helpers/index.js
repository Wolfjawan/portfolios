export const pageHeight = window.innerHeight;
export const scrollAnimation = () => {
  const navbar = document.getElementsByClassName("navbar")[0];
  const main = document.getElementsByClassName("main")[0];
  if (pageHeight <= document.documentElement.scrollTop||pageHeight <= window.scrollY) {
    if (navbar) navbar.style.position = "fixed";
    if (main) main.style.marginTop = "40px";
  } else {
    if (navbar) navbar.style.position = "relative";
    if (main) main.style.marginTop = "0px";
  }
};

