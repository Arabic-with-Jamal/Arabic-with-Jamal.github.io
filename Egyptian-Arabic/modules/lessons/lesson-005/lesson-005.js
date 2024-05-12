import { speaker1, speaker2, speaker4, narrator, audiobook, arabSpeaker4, arabSpeaker1, arabSpeaker2} from "../lesson-001/lesson-001.js"

export const lesson005 = {
  chapter: 'Meeting people',
  title: 'What is your name?',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          title: 'Introduction',
          intro: true,
          description: `While they are stuck in traffic, ${speaker4} and ${speaker2} practice introductions with
          ${speaker1}. When ${speaker2} stops at a gas station to fill up, ${speaker1} suddenly recognizes the cab that
          drove away with his bag in it.`
        },
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          title: 'Introduction',
          intro: true,
          description: 'In this lesson you will learn:',
          goals: [
            '1- to say what your name is',
            '2- to ask others what their names are',
            '3- to learn the two forms of Egyptian verbs'
          ],
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/002.png',
          convo: `انا اسمي ${arabSpeaker1} `,
          speaker: speaker2,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/003.png',
          convo: `مسا مسا يا ${arabSpeaker1}`,
          speaker: speaker4,
          vocab: [
            {word: 'مسا', meaning: 'evening', url: '/audio1970771774_03.mp3'},
            {word: 'مسا مسا', meaning: 'slang greeting', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/004.png',
          convo: 'مسا مسا يا ظريفة',
          speaker: speaker2,
          vocab: [
            {word: 'ظريفة', meaning: 'funny', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/005.png',
          convo: `وانت اسمك ايه؟`,
          speaker: speaker2,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/006.png',
          convo: `انا اسمي ${arabSpeaker1}`,
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/007.png',
          convo: 'وانتي اسمك ايه؟',
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/008.png',
          convo: `انا اسمي ${arabSpeaker2}`,
          speaker: speaker2,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/009.png',
          convo: `غلط، انتي اسمك ${arabSpeaker1}`,
          speaker: speaker4,
          vocab: [
            {word: 'غلط', meaning: 'wrong', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/010.png',
          convo: `دي ${arabSpeaker4}`,
          speaker: speaker2,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/011.png',
          convo: 'هي مجنونة شوية',
          speaker: speaker2,
          vocab: [
            {word: 'مجنونة', meaning: 'crazy (f)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/012.png',
          convo: 'معلش لحظة واحدة',
          speaker: speaker2,
          vocab: [
            {word: 'لحظة', meaning: 'moment', url: '/audio1970771774_01.mp3'},
            {word: 'واحدة', meaning: 'one (f)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/013.png',
          convo: 'محتاجة احط بنزين بسرعة',
          speaker: speaker2,
          vocab: [
            {word: 'احط', meaning: 'I put', url: '/audio1970771774_01.mp3'},
            {word: 'بنزين', meaning: 'car fuel', url: '/audio1970771774_01.mp3'},
            {word: 'بسرعة', meaning: 'quickly', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/014.png',
          convo: 'نفس السواق بتاع المطار',
          speaker: narrator,
          vocab: [
            {word: 'نفس', meaning: "same", url: '/audio1970771774_01.mp3'},
            {word: 'سواق', meaning: 'driver', url: '/audio1970771774_01.mp3'},
            {word: 'بتاع', meaning: 'of', url: '/audio1970771774_01.mp3'},
            {word: 'مطار', meaning: 'airport', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/015.png',
          convo: `${arabSpeaker1} بينادي على السواق`,
          speaker: narrator,
          vocab: [
            {word: 'بينادي', meaning: 'is calling', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/016.png',
          convo: `${arabSpeaker1} بيجري على العربية`,
          speaker: narrator,
          vocab: [
            {word: 'بيجري', meaning: 'is running', url: '/audio1970771774_01.mp3'},
            {word: 'عربية', meaning: 'car', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-005/images/017.png',
          convo: `${arabSpeaker1} بيكلم السواق`,
          speaker: narrator,
          vocab: [
            {word: 'بيكلم', meaning: 'talking to', url: '/audio1970771774_01.mp3'},
          ]
        },
      ]
    },
    {
      title: 'vocabulary exercises',
      slides: [
        {
          type: 'section-intro',
        },
        {
          type: 'vocabulary exercises',
          title: 'flash cards',
          quizletUrl: "https://quizlet.com/903629247/flashcards/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'Learn',
          quizletUrl: "https://quizlet.com/903629247/learn/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'Spell',
          quizletUrl: "https://quizlet.com/903629247/write/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'test',
          quizletUrl: "https://quizlet.com/903629247/test/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'play',
          quizletUrl: "https://quizlet.com/903629247/match/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'flash cards',
          quizletUrl: "https://quizlet.com/903630346/flashcards/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'Learn',
          quizletUrl: "https://quizlet.com/903630346/learn/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'Spell',
          quizletUrl: "https://quizlet.com/903630346/write/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'test',
          quizletUrl: "https://quizlet.com/903630346/test/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'play',
          quizletUrl: "https://quizlet.com/903630346/match/embed?i=2zi8pz&x=1jj1",
        },
      ]
    },
    {
      title: 'Grammar',
      slides: [
        {
          type: 'section-intro',
          imgURl:'./modules/lessons/lesson-005/images/001.png'
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          description: `The possesive adjective (my) in Egyptian Arabic is achived by adding
          letter ya (ي) at the end of the noun`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          description: `For example: Ism (اسم) = name, becomes: ismi (اسمي) = my name`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          description: `Umm (ام) = mother, becomes: ummi (امي) = my mom`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          description: `Can you guess what (my teacher) would be in Arabic?`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-005/images/001.png',
          description: `You might want to be careful when shaking hands with the opposite sex.
          Many people would not mind, but some would`
        },
      ]
    },
  ]
}
