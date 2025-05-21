export interface TarotCardData {
  id: number;
  name: string;
  imageKeywords: string; // For data-ai-hint
  uprightKeywords: string; // For display or potential future use
  imageSrc: string; // Placeholder image
}

export const majorArcana: TarotCardData[] = [
  { id: 0, name: "The Fool", imageKeywords: "jester cliff", uprightKeywords: "Beginnings, innocence, spontaneity, a free spirit", imageSrc: "https://placehold.co/260x450/FEF4A0/333333.png" },
  { id: 1, name: "The Magician", imageKeywords: "magician tools", uprightKeywords: "Manifestation, resourcefulness, power, inspired action", imageSrc: "https://placehold.co/260x450/A0FEF4/333333.png" },
  { id: 2, name: "The High Priestess", imageKeywords: "priestess moon", uprightKeywords: "Intuition, sacred knowledge, divine feminine, the subconscious mind", imageSrc: "https://placehold.co/260x450/F4A0FE/333333.png" },
  { id: 3, name: "The Empress", imageKeywords: "empress nature", uprightKeywords: "Femininity, beauty, nature, nurturing, abundance", imageSrc: "https://placehold.co/260x450/A0F4FE/333333.png" },
  { id: 4, name: "The Emperor", imageKeywords: "emperor throne", uprightKeywords: "Authority, establishment, structure, a father figure", imageSrc: "https://placehold.co/260x450/FEA0F4/333333.png" },
  { id: 5, name: "The Hierophant", imageKeywords: "priest keys", uprightKeywords: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions", imageSrc: "https://placehold.co/260x450/F4FEA0/333333.png" },
  { id: 6, name: "The Lovers", imageKeywords: "lovers couple", uprightKeywords: "Love, harmony, relationships, values alignment, choices", imageSrc: "https://placehold.co/260x450/A0FEA0/333333.png" },
  { id: 7, name: "The Chariot", imageKeywords: "chariot warrior", uprightKeywords: "Control, willpower, success, action, determination", imageSrc: "https://placehold.co/260x450/FEF4A0/333333.png" },
  { id: 8, name: "Strength", imageKeywords: "woman lion", uprightKeywords: "Strength, courage, patience, control, compassion", imageSrc: "https://placehold.co/260x450/A0FEF4/333333.png" },
  { id: 9, name: "The Hermit", imageKeywords: "hermit lantern", uprightKeywords: "Soul-searching, introspection, inner guidance, withdrawal", imageSrc: "https://placehold.co/260x450/F4A0FE/333333.png" },
  { id: 10, name: "Wheel of Fortune", imageKeywords: "wheel symbols", uprightKeywords: "Good luck, karma, life cycles, destiny, a turning point", imageSrc: "https://placehold.co/260x450/A0F4FE/333333.png" },
  { id: 11, name: "Justice", imageKeywords: "justice scales", uprightKeywords: "Justice, fairness, truth, cause and effect, law", imageSrc: "https://placehold.co/260x450/FEA0F4/333333.png" },
  { id: 12, name: "The Hanged Man", imageKeywords: "man hanging", uprightKeywords: "Pause, surrender, letting go, new perspectives", imageSrc: "https://placehold.co/260x450/F4FEA0/333333.png" },
  { id: 13, name: "Death", imageKeywords: "skeleton horse", uprightKeywords: "Endings, change, transformation, transition", imageSrc: "https://placehold.co/260x450/A0FEA0/333333.png" },
  { id: 14, name: "Temperance", imageKeywords: "angel water", uprightKeywords: "Balance, moderation, patience, purpose", imageSrc: "https://placehold.co/260x450/FEF4A0/333333.png" },
  { id: 15, name: "The Devil", imageKeywords: "devil chains", uprightKeywords: "Shadow self, attachment, addiction, restriction, sexuality", imageSrc: "https://placehold.co/260x450/A0FEF4/333333.png" },
  { id: 16, name: "The Tower", imageKeywords: "tower lightning", uprightKeywords: "Sudden change, upheaval, chaos, revelation, awakening", imageSrc: "https://placehold.co/260x450/F4A0FE/333333.png" },
  { id: 17, name: "The Star", imageKeywords: "woman star", uprightKeywords: "Hope, faith, purpose, renewal, spirituality", imageSrc: "https://placehold.co/260x450/A0F4FE/333333.png" },
  { id: 18, name: "The Moon", imageKeywords: "moon crayfish", uprightKeywords: "Illusion, fear, anxiety, subconscious, intuition", imageSrc: "https://placehold.co/260x450/FEA0F4/333333.png" },
  { id: 19, name: "The Sun", imageKeywords: "sun child", uprightKeywords: "Positivity, fun, warmth, success, vitality", imageSrc: "https://placehold.co/260x450/F4FEA0/333333.png" },
  { id: 20, name: "Judgement", imageKeywords: "angel trumpet", uprightKeywords: "Judgement, rebirth, inner calling, absolution", imageSrc: "https://placehold.co/260x450/A0FEA0/333333.png" },
  { id: 21, name: "The World", imageKeywords: "dancer wreath", uprightKeywords: "Completion, integration, accomplishment, travel", imageSrc: "https://placehold.co/260x450/FEF4A0/333333.png" },
];
