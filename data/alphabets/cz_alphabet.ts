export interface ExampleType {
  example: string;
  example_transcription: string;
}

interface AplhabetType {
  letter: [string, string | null];
  transcription: string;
  examples: ExampleType[];
}

export const ALPHABET_CZ: AplhabetType[] = [
  {
    letter: ['A', 'a'],
    transcription: '[a]',
    examples: [
      {
        example: 'abeceda',
        example_transcription: 'абецеда',
      },
      {
        example: 'ananas',
        example_transcription: 'ананас',
      },
      {
        example: 'autobus',
        example_transcription: 'аутобус',
      },
    ],
  },
  {
    letter: ['á', null],
    transcription: 'довгий [a]',
    examples: [
      {
        example: 'káva',
        example_transcription: 'кава',
      },
      {
        example: 'kráva',
        example_transcription: 'крава',
      },
      {
        example: 'plavání',
        example_transcription: 'плавані',
      },
    ],
  },
  {
    letter: ['B', 'b'],
    transcription: '[б]',
    examples: [
      {
        example: 'březen',
        example_transcription: 'бржезен',
      },
      {
        example: 'brambory',
        example_transcription: 'брамбори',
      },
      {
        example: 'břicho',
        example_transcription: 'бржіхо',
      },
    ],
  },
  {
    letter: ['C', 'c'],
    transcription: '[ц]',
    examples: [
      {
        example: 'cibule',
        example_transcription: 'цібуле',
      },
      {
        example: 'církev',
        example_transcription: 'ціркев',
      },
      {
        example: 'citron',
        example_transcription: 'цітрон',
      },
    ],
  },
  {
    letter: ['Č', 'č'],
    transcription: '[ч]',
    examples: [
      {
        example: 'čepice',
        example_transcription: 'чепіце',
      },
      {
        example: 'čokoláda',
        example_transcription: 'чоколада',
      },
      {
        example: 'čekat',
        example_transcription: 'чекат',
      },
    ],
  },
  {
    letter: ['D', 'd'],
    transcription: '[д]',
    examples: [
      {
        example: 'dům',
        example_transcription: 'дум',
      },
      {
        example: 'děkuji',
        example_transcription: 'дєкуї',
      },
      {
        example: 'dnes',
        example_transcription: 'днес',
      },
    ],
  },
  {
    letter: ['Ď', 'ď'],
    transcription: '[дь]',
    examples: [
      {
        example: 'ďábel',
        example_transcription: 'дябел',
      },
      {
        example: 'zeď',
        example_transcription: 'зедь',
      },
      {
        example: 'loď',
        example_transcription: 'лодь',
      },
    ],
  },
  {
    letter: ['E', 'e'],
    transcription: '[e]',
    examples: [
      {
        example: 'elektrikář',
        example_transcription: 'електрікарж',
      },
      {
        example: 'emigrace',
        example_transcription: 'еміґраце',
      },
      {
        example: 'euro',
        example_transcription: 'еуро',
      },
    ],
  },
  {
    letter: ['É', 'é'],
    transcription: 'довгий [е]',
    examples: [
      {
        example: 'lékárna',
        example_transcription: 'лекарна',
      },
      {
        example: 'jméno',
        example_transcription: 'ймено',
      },
      {
        example: 'délka',
        example_transcription: 'делка',
      },
    ],
  },
  {
    letter: ['ě', null],
    transcription: "[є] (читаємо попередній приголосний м'яко)",
    examples: [
      {
        example: 'kotě',
        example_transcription: 'котє',
      },
      {
        example: 'měkký',
        example_transcription: 'мнєккі',
      },
      {
        example: 'něco',
        example_transcription: 'нєцо',
      },
    ],
  },
  {
    letter: ['F', 'f'],
    transcription: '[ф]',
    examples: [
      {
        example: 'fyzika',
        example_transcription: 'фізіка',
      },
      {
        example: 'fronta',
        example_transcription: 'фронта',
      },
      {
        example: 'faktura',
        example_transcription: 'фактура',
      },
    ],
  },
  {
    letter: ['G', 'g'],
    transcription: '[ґ]',
    examples: [
      {
        example: 'garáž',
        example_transcription: 'ґараж',
      },
      {
        example: 'program',
        example_transcription: 'проґрам',
      },
      {
        example: 'agrese',
        example_transcription: 'аґресе',
      },
    ],
  },
  {
    letter: ['H', 'h'],
    transcription: '[г]',
    examples: [
      {
        example: 'hlava',
        example_transcription: 'глава',
      },
      {
        example: 'hodit se',
        example_transcription: 'годіт се',
      },
      {
        example: 'hluk',
        example_transcription: 'глук',
      },
    ],
  },
  {
    letter: ['Ch', null],
    transcription: '[х]',
    examples: [
      {
        example: 'míchat',
        example_transcription: 'мішати',
      },
      {
        example: 'chování',
        example_transcription: 'ховані',
      },
      {
        example: 'porucha',
        example_transcription: 'поруха',
      },
    ],
  },
  {
    letter: ['I', 'i'],
    transcription: '[i]',
    examples: [
      {
        example: 'internet',
        example_transcription: 'інтернет',
      },
      {
        example: 'integrace',
        example_transcription: 'інтеґраце',
      },
      {
        example: 'introvert',
        example_transcription: 'інтроверт',
      },
    ],
  },
  {
    letter: ['í', null],
    transcription: 'довгий [i]',
    examples: [
      {
        example: 'unikátní',
        example_transcription: 'унікатні',
      },
      {
        example: 'papír',
        example_transcription: 'папір',
      },
      {
        example: 'písmeno',
        example_transcription: 'пісмено',
      },
    ],
  },
  {
    letter: ['J', 'j'],
    transcription: '[й]',
    examples: [
      {
        example: 'jablko',
        example_transcription: 'яблко',
      },
      {
        example: 'játra',
        example_transcription: 'ятра',
      },
      {
        example: 'jet',
        example_transcription: 'єт',
      },
    ],
  },
  {
    letter: ['K', 'k'],
    transcription: '[к]',
    examples: [
      {
        example: 'květina',
        example_transcription: 'квєтіна',
      },
      {
        example: 'kobliha',
        example_transcription: 'кобліга',
      },
      {
        example: 'kousek',
        example_transcription: 'коусек',
      },
    ],
  },
  {
    letter: ['L', 'l'],
    transcription: '[л]',
    examples: [
      {
        example: 'láska',
        example_transcription: 'ласка',
      },
      {
        example: 'levný',
        example_transcription: 'левни',
      },
      {
        example: 'látka',
        example_transcription: 'латка',
      },
    ],
  },
  {
    letter: ['M', 'm'],
    transcription: '[м]',
    examples: [
      {
        example: 'mléko',
        example_transcription: 'млеко',
      },
      {
        example: 'metro',
        example_transcription: 'метро',
      },
      {
        example: 'milovat',
        example_transcription: 'міловат',
      },
    ],
  },
  {
    letter: ['N', 'n'],
    transcription: '[н]',
    examples: [
      {
        example: 'noviny',
        example_transcription: 'новіни',
      },
      {
        example: 'nula',
        example_transcription: 'нула',
      },
      {
        example: 'ne',
        example_transcription: 'не',
      },
    ],
  },
  {
    letter: ['O', 'o'],
    transcription: '[о]',
    examples: [
      {
        example: 'olej',
        example_transcription: 'олей',
      },
      {
        example: 'lopata',
        example_transcription: 'лопата',
      },
      {
        example: 'ležet',
        example_transcription: 'лежет',
      },
    ],
  },
  {
    letter: ['ó', null],
    transcription: '[о]',
    examples: [
      {
        example: 'gól',
        example_transcription: 'ґол',
      },
      {
        example: 'móda',
        example_transcription: 'мода',
      },
      {
        example: 'tón',
        example_transcription: 'тон',
      },
    ],
  },
  {
    letter: ['P', 'p'],
    transcription: '[п]',
    examples: [
      {
        example: 'peníze',
        example_transcription: 'пенізе',
      },
      {
        example: 'Praha',
        example_transcription: 'Прага',
      },
      {
        example: 'popisek',
        example_transcription: 'попісек',
      },
    ],
  },
  {
    letter: ['Q', 'q'],
    transcription: '[кв]',
    examples: [
      {
        example: 'Quido',
        example_transcription: 'квідо',
      },
      {
        example: 'squat',
        example_transcription: 'сквод',
      },
      {
        example: 'aquapark',
        example_transcription: 'аквапарк',
      },
    ],
  },
  {
    letter: ['R', 'r'],
    transcription: '[р]',
    examples: [
      {
        example: 'ryba',
        example_transcription: 'риба',
      },
      {
        example: 'ruka',
        example_transcription: 'рука',
      },
      {
        example: 'pravda',
        example_transcription: 'правда',
      },
    ],
  },
  {
    letter: ['Ř', 'ř'],
    transcription: '[рж]',
    examples: [
      {
        example: 'Řím',
        example_transcription: 'ржім',
      },
      {
        example: 'řízení',
        example_transcription: 'ржізені',
      },
      {
        example: 'řeka',
        example_transcription: 'ржека',
      },
    ],
  },
  {
    letter: ['S', 's'],
    transcription: '[с]',
    examples: [
      {
        example: 'socha',
        example_transcription: 'соха',
      },
      {
        example: 'starat se',
        example_transcription: 'старат се',
      },
      {
        example: 'stůl',
        example_transcription: 'стул',
      },
    ],
  },
  {
    letter: ['Š', 'š'],
    transcription: '[ш]',
    examples: [
      {
        example: 'šéf',
        example_transcription: 'шеф',
      },
      {
        example: 'šaty',
        example_transcription: 'шати',
      },
      {
        example: 'školení',
        example_transcription: 'школені',
      },
    ],
  },
  {
    letter: ['T', 't'],
    transcription: '[т]',
    examples: [
      {
        example: 'televize',
        example_transcription: 'телевізе',
      },
      {
        example: 'táta',
        example_transcription: 'тата',
      },
      {
        example: 'tři',
        example_transcription: 'тржи',
      },
    ],
  },
  {
    letter: ['Ť', 'ť'],
    transcription: '[ть]',
    examples: [
      {
        example: 'ťukat',
        example_transcription: 'тюкат',
      },
      {
        example: 'poušť',
        example_transcription: 'поушть',
      },
      {
        example: 'poleť',
        example_transcription: 'полеть',
      },
    ],
  },
  {
    letter: ['U', 'u'],
    transcription: '[у]',
    examples: [
      {
        example: 'Ukrajina',
        example_transcription: 'україна',
      },
      {
        example: 'uhel',
        example_transcription: 'угел',
      },
      {
        example: 'udělat',
        example_transcription: 'удєлат',
      },
    ],
  },
  {
    letter: ['Ú', 'ú'],
    transcription: 'довгий [у] на початку слова',
    examples: [
      {
        example: 'účtenka',
        example_transcription: 'учтенка',
      },
      {
        example: 'úrok',
        example_transcription: 'урок',
      },
      {
        example: 'úspěch',
        example_transcription: 'успєх',
      },
    ],
  },
  {
    letter: ['ů', null],
    transcription: 'довгий [у] в середині слова',
    examples: [
      {
        example: 'kůň',
        example_transcription: 'кунь',
      },
      {
        example: 'schůzka',
        example_transcription: 'схузка',
      },
      {
        example: 'průkazka',
        example_transcription: 'пруказка',
      },
    ],
  },
  {
    letter: ['V', 'v'],
    transcription: '[в]',
    examples: [
      {
        example: 'voda',
        example_transcription: 'вода',
      },
      {
        example: 'vejce',
        example_transcription: 'вейце',
      },
      {
        example: 'vlk',
        example_transcription: 'влк',
      },
    ],
  },
  {
    letter: ['W', 'w'],
    transcription: '[в]',
    examples: [
      {
        example: 'workoholik',
        example_transcription: 'воркоголік',
      },
      {
        example: 'Waldemar',
        example_transcription: 'валдемар',
      },
      {
        example: 'WC',
        example_transcription: 'вц',
      },
    ],
  },
  {
    letter: ['X', 'x'],
    transcription: '[кс]',
    examples: [
      {
        example: 'xenofobie',
        example_transcription: 'ксенофобіє',
      },
      {
        example: 'xerox',
        example_transcription: 'ксерокс',
      },
      {
        example: 'xylofon',
        example_transcription: 'ксилофон',
      },
    ],
  },
  {
    letter: ['Y', 'y'],
    transcription: '[и]',
    examples: [
      {
        example: 'ženy',
        example_transcription: 'жени',
      },
      {
        example: 'levný',
        example_transcription: 'левни',
      },
      {
        example: 'pracovitý',
        example_transcription: 'працовіти',
      },
    ],
  },
  {
    letter: ['Ý', 'ý'],
    transcription: 'довгий [и]',
    examples: [
      {
        example: 'sýr',
        example_transcription: 'сір',
      },
      {
        example: 'měkký',
        example_transcription: 'мнєккі',
      },
      {
        example: 'tvrdý',
        example_transcription: 'тврди',
      },
    ],
  },
  {
    letter: ['Z', 'z'],
    transcription: '[з]',
    examples: [
      {
        example: 'zub',
        example_transcription: 'зуб',
      },
      {
        example: 'zvonit',
        example_transcription: 'звоніт',
      },
      {
        example: 'zákon',
        example_transcription: 'закон',
      },
    ],
  },
  {
    letter: ['Ž', 'ž'],
    transcription: '[ж]',
    examples: [
      {
        example: 'žena',
        example_transcription: 'жена',
      },
      {
        example: 'žárovka',
        example_transcription: 'жаровка',
      },
      {
        example: 'žádost',
        example_transcription: 'жадост',
      },
    ],
  },
];