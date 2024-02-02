import { speaker1, speaker4, narrator } from "../lesson-001/lesson-001.js"

export const lesson002 = {
  chapter: 'Welcome to Egyptian Arabic',
  title: 'Lesson Two',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-002/images/001.png',
          title: 'Introduction',
          intro: true,
          description: `${speaker1} is taking a look around the airport and absorbing the sights
          and sounds. As he leaves the airport he meets ${speaker4} again. And he suddenly realizes that
          his bag has vanished.`
        },
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-002/images/001.png',
          title: 'Introduction',
          intro: true,
          description: 'In this lesson you will learn:',
          goals: [
            '1- your first words in Arabic',
            "2- to understand longer texts for the first time",
          ],
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/002.png',
          convo: 'اهلا',
          speaker: speaker4,
          vocab: [
            {word: 'اهلا', meaning: 'welcome', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/003.png',
          convo: 'صعبة اوي',
          speaker: speaker4,
          vocab: [
            {word: 'صعبة', meaning: 'hard', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/004.png',
          convo: 'ايوة انا هناك ',
          speaker: 'man on phone',
          vocab: [
            {word: 'هناك', meaning: 'there', url: '/audio1970771774_04.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/005.png',
          convo: ' سيب الورق في الفندق',
          speaker: 'man on phone',
          vocab: [
            {word: 'سيب', meaning: 'leave', url: '/audio1970771774_01.mp3'},
            {word: 'ورق', meaning: 'paper', url: '/audio1970771774_01.mp3'},
            {word: 'في', meaning: 'in', url: '/audio1970771774_01.mp3'},
            {word: 'فندق', meaning: 'hotel', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/006.png',
          convo: 'The taxi driver picking up the bags',
          speaker: narrator,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/007.png',
          convo: 'جامدة اوي. تاني',
          speaker: speaker4,
          vocab: [
            {word: 'جامدة', meaning: 'very cool', url: '/audio1970771774_01.mp3'},
            {word: 'تاني', meaning: 'again', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/008.png',
          convo: 'نص البلد لو سمحت عند سيسل',
          speaker: 'man',
          vocab: [
            {word: 'نص', meaning: 'half', url: '/audio1970771774_01.mp3'},
            {word: 'بلد', meaning: 'country', url: '/audio1970771774_01.mp3'},
            {word: 'لو', meaning: 'if', url: '/audio1970771774_01.mp3'},
            {word: 'سمحت', meaning: 'you please', url: '/audio1970771774_01.mp3'},
            {word: 'عند', meaning: 'at', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/009.png',
          convo: 'مطعم سيسل ولا فندق سيسل؟',
          speaker: 'taxi driver',
          vocab: [
            {word: 'مطعم', meaning: 'restaurant', url: '/audio1970771774_01.mp3'},
            {word: 'ولا', meaning: 'or', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/010.png',
          convo: 'مطعم سيسل',
          speaker: 'man',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/011.png',
          convo: 'ايه ده؟',
          speaker: speaker1,
          vocab: [
            {word: 'ده', meaning: 'this (m)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/012.png',
          convo: 'استنا',
          speaker: speaker1,
          vocab: [
            {word: 'استنا', meaning: 'wait', url: '/audio1970771774_01.mp3'},
          ]
        },
      ]
    },
    {
      title: 'vocabulary excersises',
      slides: [
        {
          type: 'section-intro',
        },
        {
          type: 'vocabulary excersises',
          title: 'flash cards',
          quizletUrl: "https://quizlet.com/878073234/flashcards/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'Learn',
          quizletUrl: "https://quizlet.com/878073234/learn/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'Spell',
          quizletUrl: "https://quizlet.com/878073234/write/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'test',
          quizletUrl: "https://quizlet.com/878073234/test/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'play',
          quizletUrl: "https://quizlet.com/878073234/match/embed?i=2zi8pz&x=1jj1",
        },
      ]
    },
  ]
}