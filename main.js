const nouns = [
    'seashell',
    'Buddhism',
    'bohemian',
    'jewelry',
    'beekeeping',
    'coffin',
    'book',
    'cotton',
]

const verbs = [
    'educate',
    'fold',
    'equip',
    'correct',
    'rush',
    'glance',
    'figure',
    'accommodate',
    'brush',
    'remind',
]

const adjectives = [
    'tired',
    'poised',
    'entertaining',
    'remarkable',
    'selfish',
    'popular',
    'proud',
    'kindly',
    'craven',
    'humdrum',
]

const messageRandomizer = () => {
    const randomIndexNouns = Math.floor(Math.random() * nouns.length);
    const randomIndexVerbs = Math.floor(Math.random() * verbs.length);
    const randomIndexAdjectives = Math.floor(Math.random() * adjectives.length);
    const randomSentence = `A ${adjectives[randomIndexAdjectives]} ${nouns[randomIndexNouns]} ${verbs[randomIndexVerbs]}.`;
    console.log(randomSentence);
}

messageRandomizer();


