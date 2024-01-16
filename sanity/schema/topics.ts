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
          source: "name",
          maxLength: 200,
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      }),
      defineField({
        title: "Sub Topics",
        name: "subtopics",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "subTopics" }],
          },
        ],
      }),
      
      {
        title: "Content",
        type: "array",
        name: "content",
        of: [
          {
            type: "object",
            name: "inline",
            fields: [
              { type: "string", name: "Title" },
              {
                name: "excerpt",
                title: "Excerpt",
                type: "array",
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
              {
                name: "readmore",
                title: "Read More",
                type: "array",
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
            ]
          }
        ],
      },
      
      defineField({
        title: "People Also Ask",
        name: "peopleAlsoAsk",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "questions" }],
          },
        ],
      }),
     ]
 })