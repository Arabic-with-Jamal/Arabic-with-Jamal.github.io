import { speaker1, speaker2, speaker4, narrator, audiobook, arabSpeaker4, arabSpeaker1, arabSpeaker2, max} from "../lesson-001/lesson-001.js"

export const lesson007 = {
  chapter: 'Meeting people',
  title: 'where are you from?',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          title: 'Introduction',
          intro: true,
          description: `${speaker2}, ${speaker1} and ${speaker4} are about to drive on when ${speaker2} runs into her friend 
          ${max}. ${max} asks ${speaker1} who he is and where he comes from. When it becomes clear that ${speaker1} 
          doesn’t know how to find his aunt, ${max} has an idea.`
        },
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          title: 'Introduction',
          intro: true,
          description: 'In this lesson you will learn:',
          goals: [
            '1- how to introduce yourself',
            '2- how to speak about names, where you come from and where you live',
          ],
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/002.png',
          convo: `بتعمل ايه يا ${arabSpeaker1}`,
          speaker: speaker2,
          vocab: [
            {word: 'بتعمل', meaning: 'you do', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/003.png',
          convo: `stop`,
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/004.png',
          convo: 'ايه العبيط ده؟',
          speaker: 'taxi driver',
          vocab: [
            {word: 'عبيط', meaning: 'idiot', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/005.png',
          convo: `عايز ايه يا عم انت؟`,
          speaker: 'taxi driver',
          vocab: [
            {word: 'عم', meaning: 'uncle, slang for (guy)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/006.png',
          convo: `خليكي مكانك هنا`,
          speaker: speaker2,
          vocab: [
            {word: 'خليك', meaning: 'stay', url: '/audio1970771774_01.mp3'},
            {word: 'مكان', meaning: 'place', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/007.png',
          convo: 'شنطتي هنا',
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/008.png',
          convo: `شنطة ايه؟ انت مين يا عم انت؟`,
          speaker: 'taxi driver',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/009.png',
          convo: `معلش أنا اسفة جدا`,
          speaker: speaker2,
          vocab: [
            {word: 'اسفة', meaning: 'sorry', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/010.png',
          convo: `ده ${arabSpeaker1} هو مش من مصر`, 
          speaker: speaker2,
          vocab: [
            {word: 'هو', meaning: 'he', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/011.png',
          convo: 'هو بيدور على شنطته',
          speaker: speaker2,
          vocab: [
            {word: 'بيدور على', meaning: 'he looks for', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/012.png',
          convo: 'ايوة وبعدين؟',
          speaker: 'taxi driver',
          vocab: [
            {word: 'بعدين', meaning: 'then', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/013.png',
          convo: 'هي مش في العربية؟',
          speaker: speaker2,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/014.png',
          convo: 'لا مفيش حاجة في العربية',
          speaker: 'taxi driver',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/015.png',
          convo: `فين؟`,
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/016.png',
          convo: `معرفش يا عم انا مالي`,
          speaker: 'taxi driver',
          vocab: [
            {word: 'معرفش', meaning: 'I do not know', url: '/audio1970771774_01.mp3'},
            {word: 'انا مالي', meaning: 'not my busines', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/017.png',
          convo: `خلاص تعالى مش مهم`,
          speaker: speaker2,
          vocab: [
            {word: 'خلاص', meaning: 'enough', url: '/audio1970771774_01.mp3'},
            {word: 'مهم', meaning: 'important', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/018.png',
          convo: `احنا هندور عليها سوا`,
          speaker: speaker2,
          vocab: [
            {word: 'احنا', meaning: 'we', url: '/audio1970771774_01.mp3'},
            {word: 'سوا', meaning: 'together', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/019.png',
          convo: `بتعمل ايه يا ${arabSpeaker1}`,
          speaker: speaker2,
          vocab: [
            {word: 'بتعمل', meaning: 'you do', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/020.png',
          convo: `stop`,
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/021.png',
          convo: 'ايه العبيط ده؟',
          speaker: 'taxi driver',
          vocab: [
            {word: 'عبيط', meaning: 'idiot', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/022.png',
          convo: `عايز ايه يا عم انت؟`,
          speaker: 'taxi driver',
          vocab: [
            {word: 'عم', meaning: 'uncle, slang for (guy)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/023.png',
          convo: `خليكي مكانك هنا`,
          speaker: speaker2,
          vocab: [
            {word: 'خليك', meaning: 'stay', url: '/audio1970771774_01.mp3'},
            {word: 'مكان', meaning: 'place', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/024.png',
          convo: 'شنطتي هنا',
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/025.png',
          convo: `شنطة ايه؟ انت مين يا عم انت؟`,
          speaker: 'taxi driver',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/026.png',
          convo: `معلش أنا اسفة جدا`,
          speaker: speaker2,
          vocab: [
            {word: 'اسفة', meaning: 'sorry', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/027.png',
          convo: `ده ${arabSpeaker1} هو مش من مصر`, 
          speaker: speaker2,
          vocab: [
            {word: 'هو', meaning: 'he', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/028.png',
          convo: 'هو بيدور على شنطته',
          speaker: speaker2,
          vocab: [
            {word: 'بيدور على', meaning: 'he looks for', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/029.png',
          convo: 'ايوة وبعدين؟',
          speaker: 'taxi driver',
          vocab: [
            {word: 'بعدين', meaning: 'then', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/030.png',
          convo: 'هي مش في العربية؟',
          speaker: speaker2,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/031.png',
          convo: 'لا مفيش حاجة في العربية',
          speaker: 'taxi driver',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/032.png',
          convo: `فين؟`,
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/033.png',
          convo: `معرفش يا عم انا مالي`,
          speaker: 'taxi driver',
          vocab: [
            {word: 'معرفش', meaning: 'I do not know', url: '/audio1970771774_01.mp3'},
            {word: 'انا مالي', meaning: 'not my busines', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/034.png',
          convo: `خلاص تعالى مش مهم`,
          speaker: speaker2,
          vocab: [
            {word: 'خلاص', meaning: 'enough', url: '/audio1970771774_01.mp3'},
            {word: 'مهم', meaning: 'important', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-007/images/035.png',
          convo: `احنا هندور عليها سوا`,
          speaker: speaker2,
          vocab: [
            {word: 'احنا', meaning: 'we', url: '/audio1970771774_01.mp3'},
            {word: 'سوا', meaning: 'together', url: '/audio1970771774_01.mp3'},
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
          quizletUrl: "https://quizlet.com/920586898/flashcards/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'Learn',
          quizletUrl: "https://quizlet.com/920586898/learn/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'Spell',
          quizletUrl: "https://quizlet.com/920586898/write/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'test',
          quizletUrl: "https://quizlet.com/920586898/test/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary exercises',
          title: 'play',
          quizletUrl: "https://quizlet.com/920586898/match/embed?i=2zi8pz&x=1jj1",
        },
      ]
    },
    {
      title: 'Grammar',
      slides: [
        {
          type: 'section-intro',
          imgURl:'./modules/lessons/lesson-007/images/001.png'
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `In Arabic, the verb is conjugated according to the subject.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `The infinitive form always starts with a letter that indicates the sublect.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `The indicator letter is always Kasra, with one exception.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `The exception is the (I) form, which is always Fatha.`
        },        
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `The letter (ب) is used for the (he) form. For example, he writes is يكتب.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `The letter (ت) is used for the (you) form. For example, you write is تكتب.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `the letter (ا) is used for the (I) form. For example, I write is اكتب.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `the letter (ن) is used for the (we) form. For example, we write is نكتب.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `some modal verbs that are used before the infinitive are:`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `I want is انا عايز/عايزة.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `I can is انا قادر/قادرة.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `I have to is لازم.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `I need is انا محتاج/محتاجة.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `I agree is انا موافق/موافقة.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-007/images/001.png',
          description: `I might is انا ممكن (not: it is the same word for masculine and feminie)` 
        },
      ]
    },
  ]
}
