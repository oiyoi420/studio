
"use client";

import type { TarotCardData } from "@/lib/tarot-data";
import Image from "next/image";
import { Card as ShadCard, CardContent, CardFooter } from "@/components/ui/card"; // Added CardFooter

interface TarotCardProps {
  cardData: TarotCardData | null;
  isFlipped: boolean;
  className?: string;
}

const TarotCard: React.FC<TarotCardProps> = ({ cardData, isFlipped, className }) => {
  const cardBackSrc = "https://placehold.co/200x350/4B0082/FFFFFF.png";
  const cardBackAiHint = "card back pattern";

  return (
    <div className={`w-[160px] h-[280px] md:w-[200px] md:h-[350px] perspective group ${className}`}>
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden">
          <ShadCard className="w-full h-full overflow-hidden shadow-lg border-2 border-primary/50 bg-card">
            <CardContent className="p-0 h-full relative">
              <Image
                src={cardBackSrc}
                alt="Card Back"
                layout="fill"
                objectFit="cover"
                data-ai-hint={cardBackAiHint}
              />
            </CardContent>
          </ShadCard>
        </div>

        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {cardData ? (
            <ShadCard className="w-full h-full flex flex-col overflow-hidden shadow-xl border-2 border-accent bg-card">
              <CardContent className="p-0 flex-grow relative">
                <Image
                  src={cardData.imageSrc}
                  alt={cardData.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                  data-ai-hint={cardData.imageKeywords}
                />
              </CardContent>
              <CardFooter className="p-1 md:p-2 justify-center bg-card/80 backdrop-blur-sm border-t border-accent/30">
                <p className="text-xs md:text-sm font-semibold text-center text-card-foreground truncate" title={cardData.name}>
                  {cardData.name}
                </p>
              </CardFooter>
            </ShadCard>
          ) : (
             <ShadCard className="w-full h-full flex items-center justify-center bg-muted shadow-lg">
               <p className="text-muted-foreground">Loading card...</p>
             </ShadCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
