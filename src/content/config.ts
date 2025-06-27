import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string().optional(),
        category: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const siteContentCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'site-content': siteContentCollection,
};