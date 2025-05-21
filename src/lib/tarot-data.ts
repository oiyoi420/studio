
export interface TarotCardData {
  id: number;
  name: string;
  imageKeywords: string; // For data-ai-hint
  uprightKeywords: string; // For display or potential future use
  imageSrc: string;
}

export const fullTarotDeck: TarotCardData[] = [
  // Major Arcana
  { id: 0, name: "The Fool", imageKeywords: "jester cliff dog", uprightKeywords: "Beginnings, innocence, spontaneity, a free spirit", imageSrc: "/the fool.jpg" },
  { id: 1, name: "The Magician", imageKeywords: "magician altar tools", uprightKeywords: "Manifestation, resourcefulness, power, inspired action", imageSrc: "/the magician.jpg" },
  { id: 2, name: "The High Priestess", imageKeywords: "priestess pillars moon", uprightKeywords: "Intuition, sacred knowledge, divine feminine, subconscious", imageSrc: "/the high priestess.jpg" },
  { id: 3, name: "The Empress", imageKeywords: "empress throne nature", uprightKeywords: "Femininity, beauty, nature, nurturing, abundance", imageSrc: "/the empress.jpg" },
  { id: 4, name: "The Emperor", imageKeywords: "emperor ram throne", uprightKeywords: "Authority, establishment, structure, father figure", imageSrc: "/the emperor.jpg" },
  { id: 5, name: "The Hierophant", imageKeywords: "hierophant keys pillars", uprightKeywords: "Spiritual wisdom, tradition, conformity, institutions", imageSrc: "/the hierophant.jpg" },
  { id: 6, name: "The Lovers", imageKeywords: "lovers angel couple", uprightKeywords: "Love, harmony, relationships, values alignment, choices", imageSrc: "/lovers.jpg" },
  { id: 7, name: "The Chariot", imageKeywords: "chariot warrior sphinxes", uprightKeywords: "Control, willpower, success, action, determination", imageSrc: "/the chariot.jpg" },
  { id: 8, name: "Strength", imageKeywords: "woman lion infinity", uprightKeywords: "Strength, courage, patience, control, compassion", imageSrc: "/strength.jpg" },
  { id: 9, name: "The Hermit", imageKeywords: "hermit lantern staff", uprightKeywords: "Soul-searching, introspection, inner guidance, withdrawal", imageSrc: "/the hermit.jpg" },
  { id: 10, name: "Wheel of Fortune", imageKeywords: "wheel sphinx creatures", uprightKeywords: "Good luck, karma, life cycles, destiny, turning point", imageSrc: "/wheel of fortune.jpg" },
  { id: 11, name: "Justice", imageKeywords: "justice scales sword", uprightKeywords: "Justice, fairness, truth, cause and effect, law", imageSrc: "/justice.jpg" },
  { id: 12, name: "The Hanged Man", imageKeywords: "man hanging tree", uprightKeywords: "Pause, surrender, letting go, new perspectives", imageSrc: "/the hanged man.jpg" },
  { id: 13, name: "Death", imageKeywords: "skeleton horse death", uprightKeywords: "Endings, change, transformation, transition", imageSrc: "/death.jpg" },
  { id: 14, name: "Temperance", imageKeywords: "angel water cups", uprightKeywords: "Balance, moderation, patience, purpose", imageSrc: "/temperance.jpg" },
  { id: 15, name: "The Devil", imageKeywords: "devil figures chains", uprightKeywords: "Shadow self, attachment, addiction, restriction, sexuality", imageSrc: "/the devil.jpg" },
  { id: 16, name: "The Tower", imageKeywords: "tower lightning falling", uprightKeywords: "Sudden change, upheaval, chaos, revelation, awakening", imageSrc: "/the tower.jpg" },
  { id: 17, name: "The Star", imageKeywords: "woman star water", uprightKeywords: "Hope, faith, purpose, renewal, spirituality", imageSrc: "/the star.jpg" },
  { id: 18, name: "The Moon", imageKeywords: "moon dogs crayfish", uprightKeywords: "Illusion, fear, anxiety, subconscious, intuition", imageSrc: "/the moon.jpg" },
  { id: 19, name: "The Sun", imageKeywords: "sun child horse", uprightKeywords: "Positivity, fun, warmth, success, vitality", imageSrc: "/the sun.jpg" },
  { id: 20, name: "Judgement", imageKeywords: "angel trumpet judgement", uprightKeywords: "Judgement, rebirth, inner calling, absolution", imageSrc: "/judgment.jpg" }, // Note: filename is judgment.jpg
  { id: 21, name: "The World", imageKeywords: "dancer wreath world", uprightKeywords: "Completion, integration, accomplishment, travel", imageSrc: "/the world.jpg" },

  // Wands
  { id: 22, name: "Ace of Wands", imageKeywords: "hand wand leaves", uprightKeywords: "Inspiration, new opportunities, growth, potential", imageSrc: "/ace of wands.jpg" },
  { id: 23, name: "Two of Wands", imageKeywords: "man globe wands", uprightKeywords: "Future planning, progress, decisions, discovery", imageSrc: "/two of wands.jpg" },
  { id: 24, name: "Three of Wands", imageKeywords: "man ships wands", uprightKeywords: "Preparation, foresight, enterprise, expansion", imageSrc: "/three of wands.jpg" },
  { id: 25, name: "Four of Wands", imageKeywords: "celebration wands canopy", uprightKeywords: "Celebration, joy, harmony, relaxation, homecoming", imageSrc: "/four of wands.jpg" },
  { id: 26, name: "Five of Wands", imageKeywords: "men fighting wands", uprightKeywords: "Conflict, disagreements, competition, tension, diversity", imageSrc: "/five of wands.jpg" },
  { id: 27, name: "Six of Wands", imageKeywords: "man horse victory", uprightKeywords: "Success, public recognition, progress, self-confidence", imageSrc: "/six of wands.jpg" },
  { id: 28, name: "Seven of Wands", imageKeywords: "man defending wands", uprightKeywords: "Challenge, competition, perseverance, defensive", imageSrc: "/seven of wands.jpg" },
  { id: 29, name: "Eight of Wands", imageKeywords: "wands flying air", uprightKeywords: "Rapid action, movement, quick decisions, speed", imageSrc: "/eight of wands.jpg" },
  { id: 30, name: "Nine of Wands", imageKeywords: "man wounded wands", uprightKeywords: "Resilience, courage, persistence, test of faith, boundaries", imageSrc: "/nine of wands.jpg" },
  { id: 31, name: "Ten of Wands", imageKeywords: "man carrying wands", uprightKeywords: "Burden, extra responsibility, hard work, stress", imageSrc: "/ten of wands.jpg" },
  { id: 32, name: "Page of Wands", imageKeywords: "page desert wand", uprightKeywords: "Enthusiasm, exploration, discovery, free spirit", imageSrc: "/page of wands.jpg" },
  { id: 33, name: "Knight of Wands", imageKeywords: "knight horse action", uprightKeywords: "Energy, passion, inspired action, adventure, impulsiveness", imageSrc: "/knight of wands.jpg" },
  { id: 34, name: "Queen of Wands", imageKeywords: "queen throne sunflower", uprightKeywords: "Courage, confidence, independence, social butterfly, determination", imageSrc: "/queen of wands.jpg" },
  { id: 35, name: "King of Wands", imageKeywords: "king throne lion", uprightKeywords: "Natural-born leader, vision, entrepreneur, honour", imageSrc: "/king of wands.jpg" },

  // Cups
  { id: 36, name: "Ace of Cups", imageKeywords: "hand cup dove", uprightKeywords: "Love, new relationships, compassion, creativity", imageSrc: "/ace of cups.jpg" },
  { id: 37, name: "Two of Cups", imageKeywords: "couple cups exchange", uprightKeywords: "Unified love, partnership, mutual attraction", imageSrc: "/two of cups.jpg" },
  { id: 38, name: "Three of Cups", imageKeywords: "women cups celebration", uprightKeywords: "Celebration, friendship, creativity, collaborations", imageSrc: "/three of cups.jpg" },
  { id: 39, name: "Four of Cups", imageKeywords: "man cups discontent", uprightKeywords: "Meditation, contemplation, apathy, reevaluation", imageSrc: "/four of cups.jpg" },
  { id: 40, name: "Five of Cups", imageKeywords: "man spilled cups", uprightKeywords: "Regret, failure, disappointment, pessimism", imageSrc: "/five of cups.jpg" },
  { id: 41, name: "Six of Cups", imageKeywords: "children cups nostalgia", uprightKeywords: "Revisiting the past, childhood memories, innocence, joy", imageSrc: "/six of cups.jpg" },
  { id: 42, name: "Seven of Cups", imageKeywords: "man choices cups", uprightKeywords: "Opportunities, choices, wishful thinking, illusion", imageSrc: "/seven of cups.jpg" },
  { id: 43, name: "Eight of Cups", imageKeywords: "man leaving cups", uprightKeywords: "Disappointment, abandonment, withdrawal, escapism", imageSrc: "/eight of cups.jpg" },
  { id: 44, name: "Nine of Cups", imageKeywords: "man wishes cups", uprightKeywords: "Contentment, satisfaction, gratitude, wish come true", imageSrc: "/nine of cups.jpg" },
  { id: 45, name: "Ten of Cups", imageKeywords: "family rainbow cups", uprightKeywords: "Divine love, blissful relationships, harmony, alignment", imageSrc: "/ten of cups.jpg" },
  { id: 46, name: "Page of Cups", imageKeywords: "page fish cup", uprightKeywords: "Creative opportunities, intuitive messages, curiosity, possibility", imageSrc: "/page of cups.jpg" },
  { id: 47, name: "Knight of Cups", imageKeywords: "knight horse cup", uprightKeywords: "Romance, charm, 'knight in shining armour', imagination", imageSrc: "/knight of cups.jpg" },
  { id: 48, name: "Queen of Cups", imageKeywords: "queen throne cup", uprightKeywords: "Compassionate, caring, intuitive, flowing", imageSrc: "/queen of cups.jpg" },
  { id: 49, name: "King of Cups", imageKeywords: "king throne sea", uprightKeywords: "Emotionally balanced, compassionate, diplomatic", imageSrc: "/king of cups.jpg" },

  // Swords
  { id: 50, name: "Ace of Swords", imageKeywords: "hand sword crown", uprightKeywords: "Breakthroughs, new ideas, mental clarity, success", imageSrc: "/ace of swords.jpg" },
  { id: 51, name: "Two of Swords", imageKeywords: "woman blindfold swords", uprightKeywords: "Difficult decisions, indecision, stalemate, truce", imageSrc: "/two of swords.jpg" },
  { id: 52, name: "Three of Swords", imageKeywords: "heart swords rain", uprightKeywords: "Heartbreak, emotional pain, sorrow, grief, hurt", imageSrc: "/three of swords.jpg" },
  { id: 53, name: "Four of Swords", imageKeywords: "knight tomb swords", uprightKeywords: "Rest, relaxation, meditation, contemplation, recuperation", imageSrc: "/four of swords.jpg" },
  { id: 54, name: "Five of Swords", imageKeywords: "man conflict swords", uprightKeywords: "Conflict, tension, loss, defeat, win at all costs", imageSrc: "/five of swords.jpg" },
  { id: 55, name: "Six of Swords", imageKeywords: "boat swords passage", uprightKeywords: "Transition, change, rite of passage, releasing baggage", imageSrc: "/six of swords.jpg" },
  { id: 56, name: "Seven of Swords", imageKeywords: "man stealing swords", uprightKeywords: "Betrayal, deception, getting away with something, stealth", imageSrc: "/seven of swords.jpg" },
  { id: 57, name: "Eight of Swords", imageKeywords: "woman bound swords", uprightKeywords: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality", imageSrc: "/eight of swords.jpg" },
  { id: 58, name: "Nine of Swords", imageKeywords: "person nightmare swords", uprightKeywords: "Anxiety, worry, fear, depression, nightmares", imageSrc: "/nine of swords.jpg" },
  { id: 59, name: "Ten of Swords", imageKeywords: "man defeated swords", uprightKeywords: "Painful endings, deep wounds, betrayal, loss, crisis", imageSrc: "/ten of swords.jpg" },
  { id: 60, name: "Page of Swords", imageKeywords: "page sword alert", uprightKeywords: "New ideas, curiosity, thirst for knowledge, new ways of communicating", imageSrc: "/page of swords.jpg" },
  { id: 61, name: "Knight of Swords", imageKeywords: "knight charging sword", uprightKeywords: "Ambitious, action-oriented, driven to succeed, fast-thinking", imageSrc: "/knight of swords.jpg" },
  { id: 62, name: "Queen of Swords", imageKeywords: "queen throne sword", uprightKeywords: "Independent, unbiased judgement, clear boundaries, direct communication", imageSrc: "/queen of swords.jpg" },
  { id: 63, name: "King of Swords", imageKeywords: "king throne butterfly", uprightKeywords: "Mental clarity, intellectual power, authority, truth", imageSrc: "/king of swords.jpg" },

  // Pentacles
  { id: 64, name: "Ace of Pentacles", imageKeywords: "hand pentacle garden", uprightKeywords: "New financial or career opportunity, manifestation, abundance", imageSrc: "/ace of pentacles.jpg" },
  { id: 65, name: "Two of Pentacles", imageKeywords: "man juggling pentacles", uprightKeywords: "Multiple priorities, time management, prioritisation, adaptability", imageSrc: "/two of pentacles.jpg" },
  { id: 66, name: "Three of Pentacles", imageKeywords: "craftsman church pentacles", uprightKeywords: "Teamwork, collaboration, learning, implementation", imageSrc: "/three of pentacles.jpg" },
  { id: 67, name: "Four of Pentacles", imageKeywords: "man holding pentacles", uprightKeywords: "Saving money, security, conservatism, scarcity, control", imageSrc: "/four of pentacles.jpg" },
  { id: 68, name: "Five of Pentacles", imageKeywords: "poor figures snow", uprightKeywords: "Financial loss, poverty, lack mindset, isolation, worry", imageSrc: "/five of pentacles.jpg" },
  { id: 69, name: "Six of Pentacles", imageKeywords: "man giving pentacles", uprightKeywords: "Giving, receiving, sharing wealth, generosity, charity", imageSrc: "/six of pentacles.jpg" },
  { id: 70, name: "Seven of Pentacles", imageKeywords: "man looking plant", uprightKeywords: "Long-term view, sustainable results, perseverance, investment", imageSrc: "/seven of pentacles.jpg" },
  { id: 71, name: "Eight of Pentacles", imageKeywords: "craftsman pentacles work", uprightKeywords: "Apprenticeship, repetitive tasks, mastery, skill development", imageSrc: "/eight of pentacles.jpg" },
  { id: 72, name: "Nine of Pentacles", imageKeywords: "woman garden falcon", uprightKeywords: "Abundance, luxury, self-sufficiency, financial independence", imageSrc: "/nine of pentacles.jpg" },
  { id: 73, name: "Ten of Pentacles", imageKeywords: "family estate pentacles", uprightKeywords: "Wealth, financial security, family, long-term success, contribution", imageSrc: "/ten of pentacles.jpg" },
  { id: 74, name: "Page of Pentacles", imageKeywords: "page holding pentacle", uprightKeywords: "Manifestation, financial opportunity, skill development", imageSrc: "/page of pentacles.jpg" },
  { id: 75, name: "Knight of Pentacles", imageKeywords: "knight horse pentacle", uprightKeywords: "Hard work, productivity, routine, conservatism", imageSrc: "/knight of pentacles.jpg" },
  { id: 76, name: "Queen of Pentacles", imageKeywords: "queen garden rabbit", uprightKeywords: "Nurturing, practical, providing financially, a working parent", imageSrc: "/queen of pentacles.jpg" },
  { id: 77, name: "King of Pentacles", imageKeywords: "king throne bull", uprightKeywords: "Wealth, business, leadership, security, discipline, abundance", imageSrc: "/king of pentacles.jpg" },
];
