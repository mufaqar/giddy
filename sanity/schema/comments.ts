import { defineType } from "sanity";

export const comments = defineType({
     name: "comments",
     type: "document",
     title: "Comments",
     fields: [
       {
         name: "name",
         type: "string",
         title: "Name",
       },
       {
         name: "approved",
         type: "boolean",
         title: "Approved",
       },
       {
         name: "email",
         type: "string",
         title: "Email",
       },
       {
         name: "comment",
         type: "text",
         title: "Comment",
       },
       {
         name: "article",
         type: "reference",
         readOnly: true,
         to: [{ type: "articles" }],
       },
     ]
 })