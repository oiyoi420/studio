"use client";

import type { TarotCardData } from "@/lib/tarot-data";
import Image from "next/image";
import { Card as ShadCard, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Renamed to avoid conflict

interface TarotCardProps {
  cardData: TarotCardData | null;
  isFlipped: boolean;
  className?: string;
}

const TarotCard: React.FC<TarotCardProps> = ({ cardData, isFlipped, className }) => {
  // Updated to match new dark theme primary and a light foreground color
  const cardBackSrc = "https://placehold.co/260x450/8F5BFF/F0F0FC.png"; 
  const cardBackAiHint = "card back";

  return (
    <div className={`w-[160px] h-[280px] md:w-[200px] md:h-[350px] perspective group ${className}`}>
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden">
          <ShadCard className="w-full h-full overflow-hidden shadow-lg border-2 border-primary/50 bg-card"> {/* Added bg-card for consistency */}
            <CardContent className="p-0 h-full">
              <Image
                src={cardBackSrc}
                alt="Card Back"
                width={200}
                height={350}
                className="object-cover w-full h-full"
                data-ai-hint={cardBackAiHint}
              />
            </CardContent>
          </ShadCard>
        </div>

        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {cardData ? (
            <ShadCard className="w-full h-full overflow-hidden shadow-xl border-2 border-accent bg-card"> {/* Added bg-card */}
              <CardHeader className="p-2 md:p-3 absolute top-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-10 rounded-t-md">
                <CardTitle className="text-xs md:text-sm font-semibold text-primary-foreground text-center truncate">
                  {cardData.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-full">
                <Image
                  src={cardData.imageSrc}
                  alt={cardData.name}
                  width={200}
                  height={350}
                  className="object-cover w-full h-full"
                  data-ai-hint={cardData.imageKeywords}
                />
              </CardContent>
            </ShadCard>
          ) : (
             <ShadCard className="w-full h-full flex items-center justify-center bg-muted shadow-lg">
               <p className="text-muted-foreground">No card data</p>
             </ShadCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
