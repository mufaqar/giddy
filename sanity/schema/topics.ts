import { defineField, defineType } from "sanity";

export const topics = defineType({
     name: "topics",
     type: "document",
     title: "Topics",
     
     fields: [
      defineField({
         name: "name",
         type: "string",
         title: "Name",
       }),
       defineField({
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200,
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      }),
     ]
 })