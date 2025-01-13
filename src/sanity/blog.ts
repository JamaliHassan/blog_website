import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      validation: (Role) => Role.required(),
      description: "A unique identifier for the blog post",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Role) => Role.required(),
      description: "The title of the blog post",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Role) => Role.required(),
      description: "A short description of the blog post",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The main image for the blog post",
      validation: (Role) => Role.required(),
      options: {
        hotspot: true, 
      },
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "Date",
      description: "The date the blog post was published",
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      description: "The name of the author",
      validation: (Role) => Role.required(),
    }),
    defineField({
      name: "authorDesignation",
      title: "Author Designation",
      type: "string",
      description: "The designation or role of the author",
      validation: (Role) => Role.required(),
    }),
    defineField({
      name: "authorImage",
      title: "Author Image",
      type: "image",
      description: "A profile image of the author",
      validation: (Role) => Role.required(),
      options: {
        hotspot: true, 
      },
    }),
  ],
});
