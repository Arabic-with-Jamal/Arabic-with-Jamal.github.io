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


// Add vocab
const lesson001Vocab = [];
export function quizletMaker(lesson){
  const lesson001Vocab = [];
  lesson.sections.forEach(section => {
    section.slides.forEach(slide => {
      if (slide.vocab) {
        slide.vocab.forEach(aWord =>{
          const pair = `${aWord.word}:${aWord.meaning}`
          lesson001Vocab.push(pair)
        })
      }
    })
  })
  return lesson001Vocab
}