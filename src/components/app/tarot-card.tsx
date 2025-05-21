
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
  const cardBackSrc = "https://placehold.co/700x1200/4B0082/FFFFFF.png"; 
  const cardBackAiHint = "card back pattern";

  return (
    <div className={`w-[160px] md:w-[200px] perspective group ${className}`}>
      <div
        className={`relative w-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ aspectRatio: "7 / 12" }} 
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden">
          <ShadCard className="w-full h-full overflow-hidden shadow-lg border-2 border-primary/50 bg-card">
            <CardContent className="p-0 h-full relative">
              <Image
                src={cardBackSrc}
                alt="Card Back"
                layout="responsive"
                width={700}
                height={1200}
                data-ai-hint={cardBackAiHint}
              />
            </CardContent>
          </ShadCard>
        </div>

        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {cardData ? (
            <ShadCard className="w-full h-full flex flex-col overflow-hidden shadow-xl border-2 border-accent bg-card relative">
              {/* Caption div at the top */}
              <div className="absolute top-0 left-0 right-0 p-1 md:p-2 z-10">
                <p 
                  className="text-xs md:text-sm font-semibold text-center text-primary-foreground truncate" 
                  title={cardData.name}
                  style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)' }}
                >
                  {cardData.name}
                </p>
              </div>
              <CardContent className="p-0 flex-grow relative h-full w-full">
                <Image
                  src={cardData.imageSrc}
                  alt={cardData.name}
                  layout="responsive"
                  width={700} 
                  height={1200} 
                  objectFit="contain" 
                  data-ai-hint={cardData.imageKeywords}
                  className="h-full w-full"
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

