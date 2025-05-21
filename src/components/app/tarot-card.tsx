
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
  const cardBackSrc = "https://placehold.co/700x1200/2c1a3d/FFFFFF.png";
  const cardBackAiHint = "card back pattern";

  return (
    <div className={`w-[160px] md:w-[200px] perspective group ${className}`}>
      <div
        className={`relative w-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Card Back */}
        <div className="absolute w-full backface-hidden">
          <ShadCard className="w-full overflow-hidden shadow-lg border-2 border-primary/50 bg-card">
            <CardContent className="p-0 relative">
              <Image
                src={cardBackSrc}
                alt="Card Back"
                layout="responsive"
                width={700}
                height={1200}
                objectFit="cover"
                data-ai-hint={cardBackAiHint}
                className="w-full h-auto"
              />
            </CardContent>
          </ShadCard>
        </div>

        {/* Card Front */}
        <div className="absolute w-full backface-hidden rotate-y-180">
          {cardData ? (
            <ShadCard className="w-full flex flex-col overflow-hidden shadow-xl border-2 border-accent bg-card">
              {/* Caption div - now part of normal flow, with fixed height */}
              <div className="p-1 md:p-2 text-center h-6 md:h-8 shrink-0 flex items-center justify-center">
                <p
                  className="text-xs md:text-sm font-semibold text-primary-foreground truncate"
                  title={cardData.name}
                  style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)' }}
                >
                  {cardData.name}
                </p>
              </div>
              {/* CardContent fills the remaining space due to flex-grow */}
              <CardContent className="p-0 flex-grow flex items-center justify-center w-full">
                {/* Wrapper to enforce image aspect ratio */}
                <div className="relative w-full" style={{ aspectRatio: "7 / 12" }}>
                  <Image
                    src={cardData.imageSrc}
                    alt={cardData.name}
                    layout="fill"
                    objectFit="contain"
                    data-ai-hint={cardData.imageKeywords}
                  />
                </div>
              </CardContent>
            </ShadCard>
          ) : (
             <ShadCard className="w-full flex flex-col items-center justify-center bg-muted shadow-lg" style={{ minHeight: '200px' /* Approximate minimum height */ }}>
               <div className="h-6 md:h-8 shrink-0"></div>
               <div className="flex-grow flex items-center justify-center">
                 <p className="text-muted-foreground">Loading card...</p>
               </div>
             </ShadCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
