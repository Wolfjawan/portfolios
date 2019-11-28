export const pageHeight= window.innerHeight;
export const scrollAnimation = () => {
  // const navbarNav = document.getElementsByClassName("navbar-nav")[0];
  const navbar = document.getElementsByClassName("navbar")[0];
  const main = document.getElementsByClassName("main")[0];
  // var w = window.innerWidth;
  // if (
  //   document.body.scrollTop > 80 ||
  //   document.documentElement.scrollTop > 80 + h
  // ) {
  //   if (navbar) navbar.style.height = w > 1000 ? "25px" : "fit-content";
  //   if (navbarNav) navbar.style.height = w > 1000 ? "2px" : "fit-content";
  // } else {
  //   if (navbar) navbar.style.height = w > 1000 ? "40px" : "fit-content";
  //   if (navbarNav) navbar.style.height = w > 1000 ? "40px" : "fit-content";
  // }
  //navbar position
  if (pageHeight<= document.documentElement.scrollTop) {
    if (navbar) navbar.style.position = "fixed";
    if (main) main.style.marginTop = "40px";
  } else {
    if (navbar) navbar.style.position = "relative";
    if (main) main.style.marginTop = "0px";
  }
};
