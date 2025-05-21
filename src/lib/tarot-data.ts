
export interface TarotCardData {
  id: number;
  name: string;
  imageKeywords: string; // For data-ai-hint
  uprightKeywords: string; // For display or potential future use
  imageSrc: string;
}

export const majorArcana: TarotCardData[] = [
  { id: 0, name: "The Fool", imageKeywords: "jester cliff edge", uprightKeywords: "Beginnings, innocence, spontaneity, a free spirit", imageSrc: "/the fool.jpg" },
  { id: 1, name: "The Magician", imageKeywords: "magician altar tools", uprightKeywords: "Manifestation, resourcefulness, power, inspired action", imageSrc: "/the magician.jpg" },
  { id: 2, name: "The High Priestess", imageKeywords: "priestess pillars moon", uprightKeywords: "Intuition, sacred knowledge, divine feminine, the subconscious mind", imageSrc: "/the high priestess.jpg" },
  { id: 3, name: "The Empress", imageKeywords: "empress throne nature", uprightKeywords: "Femininity, beauty, nature, nurturing, abundance", imageSrc: "/the empress.jpg" },
  { id: 4, name: "The Emperor", imageKeywords: "emperor ram throne", uprightKeywords: "Authority, establishment, structure, a father figure", imageSrc: "/the emperor.jpg" },
  { id: 5, name: "The Hierophant", imageKeywords: "hierophant keys pillars", uprightKeywords: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions", imageSrc: "/the hierophant.jpg" },
  { id: 6, name: "The Lovers", imageKeywords: "lovers angel couple", uprightKeywords: "Love, harmony, relationships, values alignment, choices", imageSrc: "/the lovers.jpg" },
  { id: 7, name: "The Chariot", imageKeywords: "chariot warrior sphinxes", uprightKeywords: "Control, willpower, success, action, determination", imageSrc: "/the chariot.jpg" },
  { id: 8, name: "Strength", imageKeywords: "woman lion strength", uprightKeywords: "Strength, courage, patience, control, compassion", imageSrc: "/strength.jpg" },
  { id: 9, name: "The Hermit", imageKeywords: "hermit lantern staff", uprightKeywords: "Soul-searching, introspection, inner guidance, withdrawal", imageSrc: "/the hermit.jpg" },
  { id: 10, name: "Wheel of Fortune", imageKeywords: "wheel sphinx creatures", uprightKeywords: "Good luck, karma, life cycles, destiny, a turning point", imageSrc: "/wheel of fortune.jpg" },
  { id: 11, name: "Justice", imageKeywords: "justice scales sword", uprightKeywords: "Justice, fairness, truth, cause and effect, law", imageSrc: "/justice.jpg" },
  { id: 12, name: "The Hanged Man", imageKeywords: "man hanging tree", uprightKeywords: "Pause, surrender, letting go, new perspectives", imageSrc: "/the hanged man.jpg" },
  { id: 13, name: "Death", imageKeywords: "skeleton horse death", uprightKeywords: "Endings, change, transformation, transition", imageSrc: "/death.jpg" },
  { id: 14, name: "Temperance", imageKeywords: "angel water cups", uprightKeywords: "Balance, moderation, patience, purpose", imageSrc: "/temperance.jpg" },
  { id: 15, name: "The Devil", imageKeywords: "devil figures chains", uprightKeywords: "Shadow self, attachment, addiction, restriction, sexuality", imageSrc: "/the devil.jpg" },
  { id: 16, name: "The Tower", imageKeywords: "tower lightning falling", uprightKeywords: "Sudden change, upheaval, chaos, revelation, awakening", imageSrc: "/the tower.jpg" },
  { id: 17, name: "The Star", imageKeywords: "woman star water", uprightKeywords: "Hope, faith, purpose, renewal, spirituality", imageSrc: "/the star.jpg" },
  { id: 18, name: "The Moon", imageKeywords: "moon dogs crayfish", uprightKeywords: "Illusion, fear, anxiety, subconscious, intuition", imageSrc: "/the moon.jpg" },
  { id: 19, name: "The Sun", imageKeywords: "sun child horse", uprightKeywords: "Positivity, fun, warmth, success, vitality", imageSrc: "/the sun.jpg" },
  { id: 20, name: "Judgement", imageKeywords: "angel trumpet judgement", uprightKeywords: "Judgement, rebirth, inner calling, absolution", imageSrc: "/judgement.jpg" },
  { id: 21, name: "The World", imageKeywords: "dancer wreath world", uprightKeywords: "Completion, integration, accomplishment, travel", imageSrc: "/the world.jpg" },
];

