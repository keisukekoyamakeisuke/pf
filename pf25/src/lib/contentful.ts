import { createClient, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPostFields {
  title: string;
  slug: string;
  content: Document;
}

export interface IPost extends Entry<IPostFields> { }

export const buildClient = () => {
  const client = createClient({
    space: process.env.CF_SPACE_ID || "",
    accessToken: process.env.CF_ACCESS_TOKEN || "",
  });
  return client;
};

