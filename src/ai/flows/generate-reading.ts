// src/ai/flows/generate-reading.ts
'use server';
/**
 * @fileOverview A tarot card reading AI agent.
 *
 * - generateReading - A function that handles the tarot card reading process.
 * - GenerateReadingInput - The input type for the generateReading function.
 * - GenerateReadingOutput - The return type for the generateReading function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReadingInputSchema = z.object({
  card1: z.string().describe('The first tarot card drawn.'),
  card2: z.string().describe('The second tarot card drawn.'),
  card3: z.string().describe('The third tarot card drawn.'),
  query: z.string().describe('The user provided query.'),
});
export type GenerateReadingInput = z.infer<typeof GenerateReadingInputSchema>;

const GenerateReadingOutputSchema = z.object({
  reading: z.string().describe('The tarot card reading.'),
});
export type GenerateReadingOutput = z.infer<typeof GenerateReadingOutputSchema>;

export async function generateReading(input: GenerateReadingInput): Promise<GenerateReadingOutput> {
  return generateReadingFlow(input);
}

const generateReadingPrompt = ai.definePrompt({
  name: 'generateReadingPrompt',
  input: {schema: GenerateReadingInputSchema},
  output: {schema: GenerateReadingOutputSchema},
  prompt: `You are an expert tarot card reader. A user has drawn three cards and has a particular query in mind. Your job is to provide a insightful reading.

Cards:
Card 1: {{{card1}}}
Card 2: {{{card2}}}
Card 3: {{{card3}}}

Query: {{{query}}}

Reading:`,
});

const generateReadingFlow = ai.defineFlow(
  {
    name: 'generateReadingFlow',
    inputSchema: GenerateReadingInputSchema,
    outputSchema: GenerateReadingOutputSchema,
  },
  async input => {
    const {output} = await generateReadingPrompt(input);
    return output!;
  }
);
