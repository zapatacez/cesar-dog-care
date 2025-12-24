import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    sendContact: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            dog_name: z.string(),
            dates: z.string().optional(),
            message: z.string().optional(),
        }),
        handler: async (input) => {
            console.log('Received form submission:', input);

            const { name, dog_name, dates, message } = input;

            // Handle empty strings from form submission as null for optional fields
            const cleanedDates = dates === '' ? null : dates;
            const cleanedMessage = message === '' ? null : message;

            console.log('Cleaned input:', { name, dog_name, dates: cleanedDates, message: cleanedMessage });

            return { success: true };
        },
    }),
};
