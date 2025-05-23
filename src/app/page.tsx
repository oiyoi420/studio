
"use client";

import { useState, useEffect } from "react";
import { Sparkles, RefreshCw, MessageSquareText, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TarotCard from "@/components/app/tarot-card";
import LoadingSpinner from "@/components/app/loading-spinner";
import { fullTarotDeck, type TarotCardData } from "@/lib/tarot-data";
import { generateReading } from "@/ai/flows/generate-reading";
import { summarizeReading } from "@/ai/flows/summarize-reading";
import { useToast } from "@/hooks/use-toast";

type SupportedLanguages = 'en' | 'es';

const translations = {
  en: {
    subtitle: "Unveil your path. Ask your question and draw three cards.",
    yourQuestion: "Your Question:",
    questionPlaceholder: "What guidance do you seek from the cards?",
    drawCards: "Draw Your Cards",
    loadingReading: "The spirits are contemplating your query...",
    toastQuestionNeededTitle: "Question Needed",
    toastQuestionNeededDesc: "Please enter your question before drawing cards.",
    toastAiErrorTitle: "AI Error",
    toastAiErrorDesc: "Could not generate tarot reading. Please try again.",
    yourReadingTitle: "Your Reading",
    keyMessagesTitle: "Key Messages",
    askAnotherQuestion: "Ask Another Question",
    footerEntertainment: "For entertainment purposes only."
  },
  es: {
    subtitle: "Revela tu camino. Haz tu pregunta y saca tres cartas.",
    yourQuestion: "Tu Pregunta:",
    questionPlaceholder: "¿Qué guía buscas de las cartas?",
    drawCards: "Saca Tus Cartas",
    loadingReading: "Los espíritus están contemplando tu consulta...",
    toastQuestionNeededTitle: "Pregunta Necesaria",
    toastQuestionNeededDesc: "Por favor, ingresa tu pregunta antes de sacar las cartas.",
    toastAiErrorTitle: "Error de IA",
    toastAiErrorDesc: "No se pudo generar la lectura del tarot. Por favor, inténtalo de nuevo.",
    yourReadingTitle: "Tu Lectura",
    keyMessagesTitle: "Mensajes Clave",
    askAnotherQuestion: "Hacer Otra Pregunta",
    footerEntertainment: "Solo para fines de entretenimiento."
  }
};

export default function MysticSightPage() {
  const [question, setQuestion] = useState<string>("");
  const [drawnCards, setDrawnCards] = useState<(TarotCardData | null)[]>([null, null, null]);
  const [flippedStates, setFlippedStates] = useState<boolean[]>([false, false, false]);
  const [reading, setReading] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);
  const [language, setLanguage] = useState<SupportedLanguages>('en');

  const { toast } = useToast();

  useEffect(() => {
    document.body.classList.add('perspective-container');
    
    const browserLang = navigator.language.split('-')[0] as SupportedLanguages;
    if (translations[browserLang]) {
      setLanguage(browserLang);
    } else {
      setLanguage('en'); // Default to English
    }

    return () => {
      document.body.classList.remove('perspective-container');
    };
  }, []);

  const t = translations[language];

  const handleDrawCards = async () => {
    if (!question.trim()) {
      toast({
        title: t.toastQuestionNeededTitle,
        description: t.toastQuestionNeededDesc,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setHasDrawn(true);
    setReading(null);
    setSummary(null);
    setFlippedStates([false, false, false]);
    setDrawnCards([null, null, null]); 

    await new Promise((resolve) => setTimeout(resolve, 50));

    const shuffledDeck = [...fullTarotDeck].sort(() => 0.5 - Math.random());
    const newDrawnCards = shuffledDeck.slice(0, 3) as TarotCardData[];
    setDrawnCards(newDrawnCards);

    for (let i = 0; i < 3; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setFlippedStates((prev) => {
        const updated = [...prev];
        updated[i] = true;
        return updated;
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 500)); 

    try {
      if (newDrawnCards.every(card => card !== null)) {
        const readingResult = await generateReading({
          card1: newDrawnCards[0]!.name, 
          card2: newDrawnCards[1]!.name,
          card3: newDrawnCards[2]!.name,
          query: question,
        });
        setReading(readingResult.reading);

        const summaryResult = await summarizeReading({ reading: readingResult.reading });
        setSummary(summaryResult.summary);
      } else {
        throw new Error("Failed to draw all cards.");
      }
    } catch (error) {
      console.error("Error getting AI reading or summary:", error);
      toast({
        title: t.toastAiErrorTitle,
        description: t.toastAiErrorDesc,
        variant: "destructive",
      });
      setReading("Failed to generate reading.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setQuestion("");
    setDrawnCards([null, null, null]);
    setFlippedStates([false, false, false]);
    setReading(null);
    setSummary(null);
    setIsLoading(false);
    setHasDrawn(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 bg-background text-foreground font-sans">
      <header className="mb-8 text-center animate-in fade-in slide-in-from-top-5 duration-700">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Mystic Sight</h1>
        </div>
        <p className="text-muted-foreground mt-2 text-lg">
          {t.subtitle}
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-8">
        <Card className="shadow-lg border-primary/30 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="question" className="text-lg font-medium text-primary">
                {t.yourQuestion}
              </Label>
              <Textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={t.questionPlaceholder}
                className="mt-2 min-h-[80px] text-base focus:ring-accent focus:border-accent"
                disabled={isLoading || hasDrawn}
              />
            </div>
            {!hasDrawn && (
              <Button
                onClick={handleDrawCards}
                disabled={isLoading}
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isLoading ? <LoadingSpinner className="mr-2" /> : <Sparkles className="mr-2 h-5 w-5" />}
                {t.drawCards}
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-center items-start space-x-2 md:space-x-4 min-h-[320px] md:min-h-[400px]"> {/* Adjusted min-height slightly */}
          {drawnCards.map((card, index) => (
            card && hasDrawn ? ( // Only render TarotCard if card data exists AND hasDrawn is true
              <TarotCard
                key={card.id}
                cardData={card}
                isFlipped={flippedStates[index]}
                className={`animate-in fade-in duration-300 ${
                  index === 0 ? 'delay-0' : index === 1 ? 'delay-[100ms]' : 'delay-[200ms]'
                }`}
              />
            ) : (
              // Placeholder structure to mimic card layout
              <div key={`placeholder-${index}`} className="w-[160px] md:w-[200px] flex flex-col">
                <div className="h-6 md:h-8"></div> {/* Placeholder for caption area */}
                <div className="w-full bg-muted/20 rounded" style={{aspectRatio: "7 / 12"}}></div> {/* Placeholder for image area */}
              </div>
            )
          ))}
        </div>

        {isLoading && !reading && !summary && hasDrawn && (
          <div className="text-center py-8 animate-in fade-in duration-300">
            <LoadingSpinner size={48} />
            <p className="mt-4 text-muted-foreground text-lg">
              {t.loadingReading}
            </p>
          </div>
        )}

        {reading && (
          <Card className="shadow-lg border-accent/50 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-accent">
                <MessageSquareText className="mr-3 h-7 w-7" />
                {t.yourReadingTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 whitespace-pre-line leading-relaxed text-base">{reading}</p>
            </CardContent>
          </Card>
        )}

        {summary && (
          <Card className="shadow-lg border-secondary/50 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-100">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-secondary-foreground">
                 <BookOpenText className="mr-3 h-7 w-7 text-secondary" />
                {t.keyMessagesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 whitespace-pre-line leading-relaxed text-base">{summary}</p>
            </CardContent>
          </Card>
        )}

        {hasDrawn && (
           <Button
            onClick={handleReset}
            variant="outline"
            className="w-full text-lg py-6 border-primary text-primary hover:bg-primary/10 animate-in fade-in duration-500"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            {t.askAnotherQuestion}
          </Button>
        )}
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground animate-in fade-in duration-700 delay-300">
        <p>&copy; {new Date().getFullYear()} Mystic Sight. {t.footerEntertainment}</p>
      </footer>

      <style jsx global>{`
        .perspective-container {
          perspective: 1000px;
        }
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden; /* Safari */
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
