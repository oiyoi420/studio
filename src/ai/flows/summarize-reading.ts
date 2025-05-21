'use server';
/**
 * @fileOverview Summarizes a tarot reading to provide key messages.
 *
 * - summarizeReading - A function that summarizes the tarot reading.
 * - SummarizeReadingInput - The input type for the summarizeReading function.
 * - SummarizeReadingOutput - The return type for the summarizeReading function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReadingInputSchema = z.object({
  reading: z.string().describe('The complete tarot card reading to summarize.'),
});
export type SummarizeReadingInput = z.infer<typeof SummarizeReadingInputSchema>;

const SummarizeReadingOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the tarot card reading.'),
});
export type SummarizeReadingOutput = z.infer<typeof SummarizeReadingOutputSchema>;

export async function summarizeReading(input: SummarizeReadingInput): Promise<SummarizeReadingOutput> {
  return summarizeReadingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeReadingPrompt',
  input: {schema: SummarizeReadingInputSchema},
  output: {schema: SummarizeReadingOutputSchema},
  prompt: `You are a tarot expert. Please summarize the following tarot card reading, removing extra detail, so that the user can easily remember and reflect on the key messages conveyed by the tarot cards.\n\nReading: {{{reading}}}`,
});

const summarizeReadingFlow = ai.defineFlow(
  {
    name: 'summarizeReadingFlow',
    inputSchema: SummarizeReadingInputSchema,
    outputSchema: SummarizeReadingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
