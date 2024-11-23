export type ChonkMood = 'happy' | 'excited' | 'silly' | 'loving' | 'stuffed' | 'dancing' | 'sleepy' | 'derp';

export interface ChonkFaces {
  [K: string]: string;
}

export interface ChonkQuotes {
  [K: string]: string[];
}

export const chonkFaces: ChonkFaces = {
  happy: "( ˵ ◕‿◕ ˵ )",
  excited: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  silly: "(づ｡◕‿‿◕｡)づ",
  loving: "(♡°▽°♡)",
  stuffed: "( ｡◕‿◕｡) ⋆｡°✩",
  dancing: "〜(◠‿◠〜)",
  sleepy: "(￣ρ￣)..zzZ",
  derp: "(◐ω◑ )",
};

export const chonkQuotes: ChonkQuotes = {
  happy: ["When in doubt, zoom out! 🚀", "I'm not fat, I'm cultivating mass! 🌟"],
  excited: ["TREATS OR WE RIOT! (ノಠ益ಠ)ノ", "I've got 99 problems but snacks ain't one! 🍪"],
  silly: ["Instructions unclear, ate the instructions 🤷‍♂️", "I'm on a seafood diet. I see food, I eat it! 🍕"],
  loving: ["You're breathtaking! No, YOU'RE breathtaking! 💖", "Did someone order extra cuteness? 🎀"],
  stuffed: ["Food coma loading... 99% 😴", "I regret nothing! (except not eating more) 🍔"],
  dancing: ["Shake shake shake! Shake your chonky! 💃", "Dancing queen, young and... well-fed! 👑"],
  sleepy: ["5 more minutes... or 5 more snacks 😴", "Dreams are made of cheese... mmm cheese 🧀"],
  derp: ["Brain.exe has stopped working 🤪", "Who needs brain cells when you have treats? 🍬"]
};

export const floatingElements = [
  { emoji: "🌟", delay: 0, duration: 6, size: "24px" },
  { emoji: "🚀", delay: 1, duration: 8, size: "32px" },
  { emoji: "🌈", delay: 2, duration: 7, size: "28px" },
  { emoji: "✨", delay: 3, duration: 5, size: "20px" },
  { emoji: "🎈", delay: 4, duration: 9, size: "30px" },
  { emoji: "🎉", delay: 5, duration: 7, size: "26px" },
];