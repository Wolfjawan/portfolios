export const applyAnimation = elementId => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = divideLettersToSpans(element);
    fade();
  }
};
const divideLettersToSpans = element => {
  if (element) {
    const textNode = element.childNodes[0];

    return textNode.nodeValue
      .split("")
      .map((l, i) => {
        if (l === " ") l = "&nbsp;";
        return `<span class="anim-${i}"><h1>${l}</h1></span>`;
      })
      .join("");
  }
};
const fade = () => {
  const spans = document.querySelectorAll("span[class^=anim]");
  const helperArr = shuffle([...Array(spans.length).keys()]);
  let time = 0;
  while (helperArr.length > 0) {
    const index = helperArr[0];
    spans[index].style.transition = "all .85s";
    time += 100;
    setTimeout(() => {
      spans[index].style.opacity = 0;
    }, time);
    helperArr.shift();
  }
};

const shuffle = a => {
  a.forEach((j, i) => {
    j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  });
  return a;
};
