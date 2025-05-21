
"use client";

import type { TarotCardData } from "@/lib/tarot-data";
import Image from "next/image";
import { Card as ShadCard, CardContent } from "@/components/ui/card";

interface TarotCardProps {
  cardData: TarotCardData | null;
  isFlipped: boolean;
  className?: string;
}

const TarotCard: React.FC<TarotCardProps> = ({ cardData, isFlipped, className }) => {
  const cardBackSrc = "https://placehold.co/200x350/4B0082/FFFFFF.png"; // Indigo placeholder
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
            <ShadCard className="w-full h-full flex flex-col overflow-hidden shadow-xl border-2 border-accent bg-card relative">
              {/* Caption at the top */}
              <div className="absolute top-0 left-0 right-0 p-1 md:p-2 justify-center bg-black/20 backdrop-blur-sm border-b border-accent/30 z-10">
                <p className="text-xs md:text-sm font-semibold text-center text-card-foreground truncate" title={cardData.name}>
                  {cardData.name}
                </p>
              </div>
              <CardContent className="p-0 flex-grow relative h-full w-full">
                <Image
                  src={cardData.imageSrc}
                  alt={cardData.name}
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint={cardData.imageKeywords}
                  className="p-1" // Add a little padding if caption overlays edge of image content
                />
              </CardContent>
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
