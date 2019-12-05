export const pageHeight = window.innerHeight;
export const scrollAnimation = () => {
  // const navbarNav = document.getElementsByClassName("navbar-nav")[0];
  const navbar = document.getElementsByClassName("navbar")[0];
  const main = document.getElementsByClassName("main")[0];
  // var w = window.innerWidth;
  // if (
  //   document.root.scrollTop > 80 ||
  //   document.documentElement.scrollTop > 80 + h
  // ) {
  //   if (navbar) navbar.style.height = w > 1000 ? "25px" : "fit-content";
  //   if (navbarNav) navbar.style.height = w > 1000 ? "2px" : "fit-content";
  // } else {
  //   if (navbar) navbar.style.height = w > 1000 ? "40px" : "fit-content";
  //   if (navbarNav) navbar.style.height = w > 1000 ? "40px" : "fit-content";
  // }
  //navbar position
  if (pageHeight <= document.documentElement.scrollTop) {
    if (navbar) navbar.style.position = "fixed";
    if (main) main.style.marginTop = "40px";
  } else {
    if (navbar) navbar.style.position = "relative";
    if (main) main.style.marginTop = "0px";
  }
};

export const darkMood = () => {
  const root = document.getElementById("root");
  const terminal = document.getElementById("terminal");
  const about = document.getElementById("about");
  const experience = document.getElementById("experience");
  const projects = document.getElementById("projects");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");
  const contact = document.getElementById("contact");
  if (root) {
    root.style.backgroundColor = "#fff";
  }
  if (terminal) {
    terminal.style.backgroundColor = "#efefef";
    terminal.style.color = "#212121";
    terminal.style.border = "1px solid #000";
  }
  if (about) {
    about.style.backgroundColor = "#efefef";
    about.style.color = "#212121";
    about.style.border = "1px solid #000";
  }
  if (experience) {
    experience.style.backgroundColor = "#efefef";
    experience.style.color = "#212121";
    experience.style.border = "1px solid #000";
  }
  if (projects) {
    projects.style.backgroundColor = "#efefef";
    projects.style.color = "#212121";
    projects.style.border = "1px solid #000";
  }
  if (skills) {
    skills.style.backgroundColor = "#efefef";
    skills.style.color = "#212121";
    skills.style.border = "1px solid #000";
  }
  if (education) {
    education.style.backgroundColor = "#efefef";
    education.style.color = "#212121";
    education.style.border = "1px solid #000";
  }
  if (contact) {
    contact.style.backgroundColor = "#efefef";
    contact.style.color = "#212121";
    contact.style.border = "1px solid #000";
  }
};
