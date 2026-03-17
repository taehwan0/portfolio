import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/work' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    period: z.string(),
    company: z.string().optional(),
    tags: z.array(z.string()).default([]),
    logo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const project = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/project' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    period: z.string(),
    company: z.string().optional(),
    tags: z.array(z.string()).default([]),
    logo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const activity = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/activity' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    organization: z.string().optional(),
    order: z.number().default(99),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: 'skills.md', base: './content' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: 'education.md', base: './content' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

const certification = defineCollection({
  loader: glob({ pattern: 'certification.md', base: './content' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { work, project, activity, skills, education, certification };
