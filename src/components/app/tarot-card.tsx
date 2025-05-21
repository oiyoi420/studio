
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
  const cardBackSrc = "https://placehold.co/700x1200/2c1a3d/2c1a3d.png";
  const cardBackAiHint = "card back pattern";

  return (
    <div className={`w-[160px] md:w-[200px] perspective group ${className}`}>
      <div
        className={`relative w-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Invisible Spacer Div to establish height based on front card's content structure */}
        {/* This div's structure mirrors the front card's content to define the flipper's height */}
        <div className="w-full flex flex-col opacity-0 pointer-events-none" aria-hidden="true">
          <div className="h-6 md:h-8 shrink-0"></div> {/* Mimics caption height */}
          <div className="flex-grow"> {/* Mimics CardContent that grows to fill space */}
            <div className="relative w-full" style={{ aspectRatio: "7 / 12" }}></div> {/* Mimics image area aspect ratio */}
          </div>
        </div>

        {/* Card Back - Absolutely positioned to fill the space defined by the spacer */}
        <div className="absolute inset-0 backface-hidden">
          <ShadCard className="w-full h-full overflow-hidden shadow-lg border-2 border-primary/50 bg-card flex flex-col">
            <CardContent className="p-0 relative flex-grow flex items-center justify-center">
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

        {/* Card Front - Absolutely positioned to fill the space defined by the spacer */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          {cardData ? (
            <ShadCard className="w-full h-full flex flex-col overflow-hidden shadow-xl border-2 border-accent bg-card">
              <div className="p-1 md:p-2 text-center h-6 md:h-8 shrink-0 flex items-center justify-center">
                <p
                  className="text-xs md:text-sm font-semibold text-primary-foreground truncate"
                  title={cardData.name}
                  style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.7)' }}
                >
                  {cardData.name}
                </p>
              </div>
              <CardContent className="p-0 flex-grow flex items-center justify-center w-full">
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
             // Fallback for when cardData is null (e.g. initial draw state before newDrawnCards is set)
             <ShadCard className="w-full h-full flex flex-col items-center justify-center bg-muted shadow-lg border-2 border-muted-foreground/30">
               <div className="h-6 md:h-8 shrink-0"></div> {/* Caption space */}
               <div className="flex-grow flex items-center justify-center w-full"> {/* Image area container */}
                 <div className="relative w-full flex items-center justify-center" style={{ aspectRatio: "7 / 12" }}>
                    <p className="text-muted-foreground text-center">Loading card...</p>
                 </div>
               </div>
             </ShadCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
