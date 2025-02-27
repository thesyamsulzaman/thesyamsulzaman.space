import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*/index.md", base: "./src/data/projects" }),
  // loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  projects: projectsCollection,
};
