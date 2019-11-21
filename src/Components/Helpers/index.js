export const scrollAnimation = () => {
  const navbar = document.getElementsByClassName("navbar")[0];
  const navbarCollapse = document.getElementsByClassName("navbar-collapse")[0];
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if (navbar) navbar.style.height = "20px";
    if (
      navbarCollapse &&
      navbar.offsetWidth / 1.6 > document.documentElement.scrollTop * 3
    )
      navbarCollapse.style.paddingLeft = `${document.documentElement.scrollTop *
        3}px`;
  } else {
    if (navbar) navbar.style.height = "40px";
    if (navbarCollapse) navbarCollapse.style.paddingLeft = "0px";
  }
};
