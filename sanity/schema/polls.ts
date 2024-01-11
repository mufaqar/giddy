import { defineType } from "sanity";

export const polls = defineType({
     name: "polls",
     type: "document",
     title: "Polls",
     fields: [
       {
         name: "question",
         type: "string",
         title: "Question",
       },
       {
         name: "yes",
         type: "number",
         title: "Yes",
       },
       {
         name: "no",
         type: "number",
         title: "No",
       },
     ]
 })