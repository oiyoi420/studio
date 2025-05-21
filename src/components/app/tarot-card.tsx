
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
  const cardBackSrc = "https://placehold.co/700x1200/4B0082/FFFFFF.png"; // Indigo placeholder matching 7:12
  const cardBackAiHint = "card back pattern";

  // Estimate caption height for padding.
  // The caption has p-1 md:p-2. Let's assume text height and padding sums to roughly 2.5rem (40px) for md, less for sm.
  // Tailwind classes for text size: text-xs md:text-sm.
  // Let's use Tailwind padding classes for consistency. pt-8 (2rem) or pt-10 (2.5rem)
  const captionPaddingClass = "pt-10 md:pt-12"; // Provides space for the caption

  return (
    <div className={`w-[160px] md:w-[200px] perspective group ${className}`}>
      <div
        className={`relative w-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ aspectRatio: "7 / 12" }} // Enforce aspect ratio on the flipping container
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
                objectFit="cover" // Cover for placeholder ensures it fills the 7:12 frame
                data-ai-hint={cardBackAiHint}
              />
            </CardContent>
          </ShadCard>
        </div>

        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {cardData ? (
            <ShadCard className="w-full h-full flex flex-col overflow-hidden shadow-xl border-2 border-accent bg-card relative">
              <div className="absolute top-0 left-0 right-0 p-1 md:p-2 bg-black/20 backdrop-blur-sm border-b border-accent/30 z-10">
                <p className="text-xs md:text-sm font-semibold text-center text-card-foreground truncate" title={cardData.name}>
                  {cardData.name}
                </p>
              </div>
              <CardContent className={`p-0 flex-grow relative h-full w-full ${captionPaddingClass}`}>
                <Image
                  src={cardData.imageSrc}
                  alt={cardData.name}
                  layout="responsive"
                  width={700} // Defines aspect ratio
                  height={1200} // Defines aspect ratio (7:12)
                  objectFit="contain" // Ensures entire image is visible within the 7:12 frame
                  data-ai-hint={cardData.imageKeywords}
                  className="p-1"
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
