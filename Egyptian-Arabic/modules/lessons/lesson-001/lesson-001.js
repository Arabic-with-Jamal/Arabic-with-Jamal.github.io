const audiobook = 'AUDIOBOOK:';
const speaker1 = 'Tom';
const speaker2 = 'Asmaa';
const speaker4 = 'Donia';
const narrator = 'Narrator';


export const lesson001 = {
  chapter: 'Meeting and greeting',
  title: 'Hello',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-001/images/001.png',
          title: 'Introduction',
          intro: true,
          description: `${speaker1}, a young American man, arrives at the airport in Egypt.
          As he is taking a look around, he listens to a language course on headphones,
          with greetings in Egyption Arabic. Then ${speaker4} comes up and starts talking to him.`,
        },
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-001/images/001.png',
          title: 'Introduction',
          intro: true,
          description: 'In this lesson you will learn:',
          goals: [
            '1- how to greet other people',
            "2- to ask people how they're doing",
            '3- to say how you feel',
            '4- to distinguish between formal and informal greetings',
          ],
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/002.png',
          convo: 'صباح الخير أستاذة ندى',
          speaker: audiobook,
          vocab: [
            {word: 'صباح', meaning: 'morning', url: '/audio1970771774_01.mp3'},
            {word: 'الخير', meaning: 'the goodness', url: '/audio1970771774_01.mp3'},
            {word: 'أستاذة', meaning: 'Ms', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد.ازاي حضرتك',
          speaker: audiobook,
          vocab: [
            {word: 'النور', meaning: 'light', url: '/audio1970771774_01.mp3'},
            {word: 'أستاذ', meaning: 'Mr', url: '/audio1970771774_01.mp3'},
            {word: 'ازاي', meaning: 'how', url: '/audio1970771774_01.mp3'},
            {word: 'حضرتك', meaning: 'you (m, formal)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/006.png',
          convo: 'كويس جدا الحمد لله. حضرتك عاملة ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'كويس', meaning: 'good', url: '/audio1970771774_01.mp3'},
            {word: 'جدا', meaning: 'very', url: '/audio1970771774_01.mp3'},
            {word: 'الحمد لله', meaning: 'thank god', url: '/audio1970771774_01.mp3'},
            {word: 'حضرتك', meaning: 'you (f, formal)', url: '/audio1970771774_01.mp3'},
            {word: 'عاملة ايه', meaning: 'how are you doing (f)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/004.png',
          convo: 'مساء الخير أستاذ طارق ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'مساء', meaning: 'evening', url: '/audio1970771774_01.mp3'},
            {word: 'ازيك؟', meaning: 'how are you (m)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/005.png',
          convo: 'مساء النور أستاذة رضوى.أنا بخير الحمد لله. انتي ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'بخير', meaning: 'In good condition', url: '/audio1970771774_01.mp3'},
            {word: 'أنا', meaning: 'I [am]', url: '/audio1970771774_01.mp3'},
            {word: 'ازيك؟', meaning: 'how are you (f)', url: '/audio1970771774_01.mp3'},

          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/007.png',
          convo: 'ايه الاخبار يا صاحبي؟ كله تمام؟',
          speaker: audiobook,
          vocab: [
            {word: 'ايه', meaning: 'what', url: '/audio1970771774_01.mp3'},
            {word: 'أخبار', meaning: 'news', url: '/audio1970771774_01.mp3'},
            {word: 'يا', meaning: 'hey', url: '/audio1970771774_01.mp3'},
            {word: 'صاحب', meaning: 'friend', url: '/audio1970771774_01.mp3'},
            {word: 'ي', meaning: 'my', url: '/audio1970771774_01.mp3'},
            {word: 'كله', meaning: 'everything', url: '/audio1970771774_01.mp3'},
            {word: 'تمام', meaning: 'fine', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/008.png',
          convo: 'زي الفل يا صاحبي. انت عامل ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'زي', meaning: 'like', url: '/audio1970771774_01.mp3'},
            {word: 'الفل', meaning: 'jasmine', url: '/audio1970771774_01.mp3'},
            {word: 'انت', meaning: 'you (m)', url: '/audio1970771774_01.mp3'},
            {word: 'عامل ايه', meaning: 'how are you doing (m)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/009.png',
          convo: 'no conversation',
          speaker: 'conversation:',
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/010.png',
          convo: 'حلوة اوي',
          speaker: speaker4,
          vocab: [
            {word: 'حلوة', meaning: 'pretty', url: '/audio1970771774_01.mp3'},
            {word: 'اوي', meaning: 'very', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/011.png',
          convo: 'ايوة؟',
          speaker: speaker1,
          vocab: [
            {word: 'ايوة', meaning: 'yes', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/012.png',
          convo: 'الشنطة حلوة',
          speaker: speaker4,
          vocab: [
            {word: 'ال', meaning: 'the', url: '/audio1970771774_01.mp3'},
            {word: 'شنطة', meaning: 'bag', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/013.png',
          convo: 'معلش؟ الشنطة؟',
          speaker: speaker4,
          vocab: [
            {word: 'معلش', meaning: 'sorry', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/014.png',
          convo: 'اه الشنطة جميلة',
          speaker: speaker4,
          vocab: [
            {word: 'اه', meaning: 'yes', url: '/audio1970771774_01.mp3'},
            {word: 'جميلة', meaning: 'beautiful', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/015.png',
          convo: 'دنيا تعالي هنا',
          speaker: speaker2,
          vocab: [
            {word: 'تعالي', meaning: 'come (f)', url: '/audio1970771774_01.mp3'},
            {word: 'هنا', meaning: 'here', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/016.png',
          convo: 'لا مؤاخذة',
          speaker: speaker2,
          vocab: [
            {word: 'لا مؤاخذة', meaning: 'excuse me', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/017.png',
          convo: 'لو سمحتي',
          speaker: speaker1,
          vocab: [
            {word: 'لو سمحتي', meaning: 'please (f)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/018.png',
          convo: 'شارع السلام في العجمي',
          speaker: speaker1,
          vocab: [
            {word: 'شارع', meaning: 'street', url: '/audio1970771774_01.mp3'},
            {word: 'في', meaning: 'in', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/019.png',
          convo: 'confused look',
          speaker: narrator,
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
          quizletUrl: "https://quizlet.com/871087977/flashcards/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'Learn',
          quizletUrl: "https://quizlet.com/871087977/learn/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'Spell',
          quizletUrl: "https://quizlet.com/871087977/spell/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'test',
          quizletUrl: "https://quizlet.com/871087977/test/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'play',
          quizletUrl: "https://quizlet.com/871087977/match/embed?i=2zi8pz&x=1jj1",
        },
      ]
    },
    {
      title: 'Grammar',
      slides: [
        {
          type: 'section-intro',
          imgURl:'./modules/lessons/lesson-001/images/001.png'
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-001/images/001.png',
          description: `The informal form of address is used within the family, among friends
          and acquaintances, and often also among colleagues.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-001/images/001.png',
          description: `In Egypt, everyone is addressed by their first name. even in formal situations`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-001/images/001.png',
          description: `The formal address is used with unfamiliar adults, in business situations,
          with officials, or when shopping.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-001/images/001.png',
          description: `We use "good morning" until noon, and we use "good evening" for the rest
          of the day`
        },
      ]
    },
  ],
}

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
          speaker: 'Narrator',
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
          speaker: 'Taki driver',
          vocab: [
            {word: 'مطعم', meaning: 'In good condition', url: '/audio1970771774_01.mp3'},
            {word: 'ولا', meaning: 'I [am]', url: '/audio1970771774_01.mp3'},
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
            {word: 'ده', meaning: 'what', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-002/images/012.png',
          convo: 'استنا',
          speaker: speaker1,
          vocab: [
            {word: 'استنا', meaning: 'what', url: '/audio1970771774_01.mp3'},
          ]
        },
      ]
    },
    {
      title: 'Introduction',
      slides: [
        {
          imgURl: './modules/lessons/lesson-001/images/001.png',
          title: 'introduction',
          firstBox: '',
          secondBox: 'wow lesson',
          thirdBox: 'please start',
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/002.png',
          convo: 'صعبة اوي',
          speaker: audiobook,
          vocab: [
            {word: 'morning : صباح', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد. الحمد لله بخير انت ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'light : النور', url: '/audio1970771774_01.mp3'},
            {word: 'Mr : أستاذ', url: '/audio1970771774_01.mp3'},
            {word: 'thank god : الحمد لله', url: '/audio1970771774_01.mp3'},
            {word: 'fine : بخير', url: '/audio1970771774_01.mp3'},
            {word: 'you (f) : انت', url: '/audio1970771774_01.mp3'},
            {word: 'how are you (f) : ازيك؟', url: '/audio1970771774_01.mp3'},                 
          ]
        },

      ]
    },
  ]
}


export const lesson001Vocab = [];

lesson001.sections.forEach(section => {
  section.slides.forEach(slide => {
    if (slide.vocab) {
      slide.vocab.forEach(aWord =>{
        const pair = `${aWord.word}:${aWord.meaning}`
        lesson001Vocab.push(pair)
      })
    }
  })
})