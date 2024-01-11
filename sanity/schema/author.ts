import { defineType } from "sanity";

export const author = defineType({
     name: "author",
     type: "document",
     title: "Author",
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
         name: "bio",
         type: "text",
         title: "Bio",
       },
     ]
 })