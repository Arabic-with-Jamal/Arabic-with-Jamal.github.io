import lessons from "./modules/lessons.js";
import { createAnElement, playSound } from "./modules/utilties.js";
import { lesson001Vocab } from "./modules/lessons/lesson-001/lesson-001.js";

console.log(lesson001Vocab)


const container = document.querySelector('.container');
const links = document.querySelector('.dropdown-content');
let activeLesson = null;
const dropdownBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');


// Add a click event listener to the document
document.addEventListener('click', function (event) {
  const isClickInsideDropdown = dropdown.contains(event.target);
  if (!isClickInsideDropdown) {
    links.classList.remove('active');
  }
});

// Prevent the dropdown from closing when clicking inside it
dropdown.addEventListener('click', function (event) {
  event.stopPropagation();
});


// Add a click event listener to the dropdown to toggle the 'active' class
dropdownBtn.addEventListener('click', function () {
  links.classList.add('active');
});


lessons.forEach(lesson => {
  lesson.sections.forEach(section => {
    section.slides.forEach(slide => {
      const slideElement = createAnElement('div', container, 'slide');
      slideElement.setAttribute('id', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}${section.slides.indexOf(slide)}`)
      
      const slideTitle = createAnElement('h6', slideElement, 'slide-title', `${lessons.indexOf(lesson)+1} - ${lesson.chapter} <br> ${lesson.title} > ${section.title}`);
      slideTitle.classList.add('display-none');
      const mainDiv = createAnElement('div', slideElement, 'main-div');
      if(slide.title === 'Section Introduction'){
        createAnElement('h1', slideElement, 'section-intro', section.title)
      }


      switch (slide.type) {
        case 'section-intro':
          createAnElement('h1', slideElement, 'section-intro', section.title);
          break;

        case 'Story':
          const img = createAnElement('img', mainDiv, 'story-img');
          img.setAttribute('src', slide.imgURl);
    
          const convoDiv = createAnElement('div', slideElement, 'convo-div');
          const convoTitle = createAnElement('h6', convoDiv, 'convo-title', slide.speaker);
          const Sentences = createAnElement('div', convoDiv, 'sentences');
          const convoBox = createAnElement('p', Sentences, 'convo-box', slide.convo);
          if(slide.vocab){
            const vocabBigDiv = createAnElement('div', slideElement, 'vocab-big-div');
            const vocabTitle = createAnElement('h6', vocabBigDiv, 'vocab-title', 'New Vocabulary');
            const vocabDiv = createAnElement('div', vocabBigDiv, 'vocab-div');
            const vocabArray = slide.vocab
            for (let i = 0; i< vocabArray.length; i++){
              const vocabItem = createAnElement('p', vocabDiv, 'vocab-box', `${vocabArray[i].meaning} : ${vocabArray[i].word}`);
              vocabItem.onclick = function(){
                playSound(vocabArray[i].url)
              };
            }  
          }
          break;

        case "intro":
        case "grammar":
          const introImg = createAnElement('img', mainDiv, 'story-img');
          introImg.setAttribute('src', slide.imgURl);
          const description = createAnElement('p', slideElement, 'description', slide.description);
          introImg.classList.add('intro-img');
          if (slide.goals) {
            const goalsDiv = createAnElement('div', slideElement, 'goals')
            slide.goals.forEach(goal => {
              createAnElement('p', goalsDiv, 'goal', goal)
            })
          };
          break;
          
        case 'vocabulary excersises':
          const quizletElement = createAnElement('iframe', slideElement, 'quizlet');
          quizletElement.setAttribute('src', slide.quizletUrl);
          console.log('sdsds')
        default:
          console.log("Unknown type");
      }
    })
  })
});

lessons.forEach(lesson => {
  const lessonLink = createAnElement('button', links, 'lesson-link', `${lessons.indexOf(lesson)+1} - ${lesson.chapter} - ${lesson.title}`);
  const dropdownLesson = createAnElement('div', links, 'dropdown-lesson',);
  lesson.sections.forEach(section => {
    const link = createAnElement('a', dropdownLesson, 'link', section.title);
    link.setAttribute('data-target', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}0`)
  })
  lessonLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (activeLesson !== null && activeLesson !== dropdownLesson) {
      activeLesson.classList.remove('active-lesson');
    }
    dropdownLesson.classList.toggle('active-lesson');
    activeLesson = dropdownLesson.classList.contains('active-lesson') ? dropdownLesson : null;
  });
});

let currentSection = 0;


    // Get all anchor tags with the class 'toggle-btn'
    const toggleButtons = document.querySelectorAll('.link');

    // Add click event listeners to each anchor tag
    toggleButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target div id from the data-target attribute
        const targetDivId = this.getAttribute('data-target');

        // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.slide').forEach(div => {
          div.classList.remove('is-selected');
        });

        // Add 'is-selected' class to the corresponding div
        if(document.getElementById(targetDivId)){
          document.getElementById(targetDivId).classList.add('is-selected');
        }
        if(document.querySelector('.is-selected')){
          const isSelected = document.querySelector('.is-selected');
          dropdownBtn.innerHTML = isSelected.querySelector('.slide-title').textContent;
          const nodeList = document.querySelectorAll('.slide');
          // Convert NodeList to an array
          const allSlides = Array.from(nodeList);
  
          currentSection = allSlides.indexOf(isSelected)
          links.classList.remove('active');
          const dropdownLesson = document.querySelector('.dropdown-lesson');
          if (activeLesson !== null && activeLesson !== dropdownLesson) {
            activeLesson.classList.remove('active-lesson');
          }
          activeLesson = dropdownLesson.classList.contains('active-lesson') ? dropdownLesson : null;  
        }
      });
    });


    let sections = document.querySelectorAll(".slide");
    let nextButton = document.querySelector(".next-btn");
    let previousButton = document.querySelector(".prev-btn");
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", function() {
            sections[currentSection].classList.remove("is-selected");
            sections[currentSection].classList.remove("is-selected");
            sections[currentSection = i].classList.add("is-selected");
            sections[currentSection].classList.add("is-selected");
            if (i === 0) {
                if (previousButton.className.split(" ").indexOf("disable") < 0) {
                    previousButton.classList.add("disable");
                }
            } else {
                if (previousButton.className.split(" ").indexOf("disable") >= 0) {
                    previousButton.classList.remove("disable");
                }
            }
            if (i === sections.length - 1) {
                if (nextButton.className.split(" ").indexOf("disable") < 0) {
                    nextButton.classList.add("disable");
                }
            } else {
                if (nextButton.className.split(" ").indexOf("disable") >= 0) {
                    nextButton.classList.remove("disable");
                }
            }
        });
    }
    
    nextButton.addEventListener("click", function() {
        if (currentSection < sections.length - 1) {
          // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.slide').forEach(div => {
          div.classList.remove('is-selected');
        });
            sections[currentSection + 1].click();
            const isSelected = document.querySelector('.is-selected');
            dropdownBtn.innerHTML = isSelected.querySelector('.slide-title').textContent;    
        }
    });
    
previousButton.addEventListener("click", function() {
  if (currentSection > 0) {
    // Remove 'is-selected' class from all div elements
    document.querySelectorAll('.slide').forEach(div => {
      div.classList.remove('is-selected');
    });
    sections[currentSection - 1].click();
    const isSelected = document.querySelector('.is-selected');
    if(isSelected.querySelector('.slide-title')){
      dropdownBtn.innerHTML = isSelected.querySelector('.slide-title').textContent;
    }else{
      dropdownBtn.innerHTML = ''
    }
  }
});

