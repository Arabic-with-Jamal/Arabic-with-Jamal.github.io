// creating a new element
export function createAnElement(tag, parent, CSSclass, theTextContent) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  element.classList.add(CSSclass);
  element.textContent = theTextContent
  return element
}


// play sounds
const store = {};
export const playSound = (directory) => {
  if (typeof directory !== "string") {
    throw new Error("directory must be a string");
  }
  if (!store.hasOwnProperty(directory)) {
    store[directory] = new Audio(directory);
  }
  const audio = store[directory];
  audio.play();
};