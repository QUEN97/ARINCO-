import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    client: z.string(),
    year: z.number(),
    location: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }).strict()
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { proyectos, blog };