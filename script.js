const body = document.getElementsByTagName('body')

const ham = document.querySelector(".ham");
const nav = document.querySelector(".navigation");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  ham.classList.remove("active");
  nav.classList.remove("active");
}));

//dynamic learning resources page
const resources = [
  {
    p: 'No Complications. Just Listen & repeat',
    span: 'Memorization Course',
    a: "https://www.youtube.com/watch?v=yK_aUsqadYE&list=PLVFdsYwpQYkQqzfUpYqpsteID5Hh1pcsw",
    img: "./images/learneasy.png",
    aText: 'Start Now'
  },
  
  {
    p: '',
    span: "let's have fun",
    a: "./games/tic tac toe/tic.html",
    img: "./games/tic tac toe/pics/tic.jpg",
    aText: 'Play Now'
  }
];

const Courses = [
  {
    aHref: "./tajweedEnglish.html",
    img: "/images/tajweedenglish.jpg",
    p: 'Learn the rules now',
    aText: 'Better Recitation',
  },
  
  {
    aHref: "https://www.nourelquran.com/quranforall/fahd/index.php",
    img: "/images/quran.png",
    p: 'Read Quran',
    aText: 'Quran Book {Moshaf}',
  }
]

const content = document.querySelector('#learning-re');

resources.forEach((resource) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  content.appendChild(projectCard);

  const projectImage = document.createElement('div');
  projectImage.classList.add('project-image');
  projectCard.appendChild(projectImage);

  const image = document.createElement('img');
  projectImage.appendChild(image);
  image.setAttribute('src', resource.img);

  const projectInfo = document.createElement('div');
  projectInfo.classList.add('project-info');
  projectCard.appendChild(projectInfo);

  const p = document.createElement('p');
  p.classList.add('project-category');
  p.innerHTML = resource.p
  projectInfo.appendChild(p);

  const strong = document.createElement('strong');
  strong.classList.add('project-title');
  projectInfo.appendChild(strong);

  const title = document.createElement('span');
  strong.appendChild(title);
  title.innerHTML = resource.span

  const anchor = document.createElement('a');
  anchor.classList.add('more-details');
  anchor.setAttribute('href', resource.a);
  anchor.setAttribute('target', 'blank');
  anchor.innerHTML = resource.aText;
  strong.appendChild(anchor);
  
})

//pop up

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const viewBtn = document.createElement('button');
  viewBtn.classList.add('view-btn');
  card.appendChild(viewBtn);
  viewBtn.innerHTML = 'View Courses';
});

const overlay = document.querySelector('.overlay')



const viewBtn = document.querySelectorAll('.view-btn');
