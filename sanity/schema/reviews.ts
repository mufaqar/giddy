import { AiFillDatabase } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { VscFileMedia } from "react-icons/vsc";
import { defineType } from "sanity";

export const reviews = defineType({
  name: "reviews",
  type: "document",
  title: "Reviews",
  groups: [
    {
      title: "Main",
      name: "main",
      icon: AiFillDatabase,
      default: true,
    },
    {
      title: "Media",
      name: "media",
      icon: VscFileMedia,
    },
  ],
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      group: "main",
    },
    {
      name: "review",
      type: "text",
      title: "Review",
      group: "main",
    },
    {
      name: "image",
      type: "image",
      title: "Profile Image",
      group: "media",
    },
    {
      name: "twitter_link",
      type: "string",
      title: "Twitter Link",
      group: "main",
    },
    {
      name: "linkedin_link",
      type: "string",
      title: "Linkedin Link",
      group: "main",
    },
    {
      name: "insta_link",
      type: "string",
      title: "Instagram Link",
      group: "main",
    },
   
  ],
});
