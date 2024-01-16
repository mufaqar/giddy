import { AiFillDatabase } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { defineField, defineType } from "sanity";

export const questions = defineType({
     name: "questions",
     type: "document",
     title: "Questions",
     groups: [
      {
        title: "Main",
        name: "main",
        icon: AiFillDatabase,
        default: true,
      },
      {
        title: "SEO",
        name: "seo",
        icon: TbSeo,
      },
    ],
     fields: [
      defineField({
         name: "question",
         type: "string",
         title: "Question",
         group: "main"
       }),
       defineField({
        title: "Slug",
        name: "slug",
        type: "slug",
        group: "main",
        options: {
          source: "question",
          maxLength: 200,
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      }),
      {
        name: "answer",
        title: "Answer",
        type: "array",
        group: "main",
        of: [
          {
            type: "block",
          },
          {
            type: "image",
            fields: [
              {
                type: "text",
                name: "alt",
                title: "Alternative text",
                description: `Some of your visitors cannot see images, 
                             be they blind, color-blind, low-sighted; 
                             alternative text is of great help for those 
                             people that can rely on it to have a good idea of 
                             what\'s on your page.`,
                options: {
                  isHighlighted: true,
                },
              },
            ],
          },
        ],
      },
      defineField({
        title: "Article",
        name: "article",
        type: "reference",
        group: "main",
        to: [{ type: "articles" }],
      }),

      // seo fields
      defineField({
        name: "metatitle",
        type: "string",
        title: "Meta Title",
        group: "seo",
      }),
      defineField({
        name: "metadescription",
        type: "text",
        title: "Meta Description",
        group: "seo",
      }),
      defineField({
        name: "metaKeywords",
        description: 'please seprate keyword with "," eg:( keyword1, keyword2, ... ) ',
        type: "text",
        title: "Meta Keywords",
        group: "seo",
      }),
      
     ]
 })