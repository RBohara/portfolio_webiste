export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      Title: "Date",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "client", title: "Client" },
        ],
      },
    },
    {
      name: "websiteLink",
      title: "Website URL",
      type: "string",
    },
    {
      name: "githubLink",
      title: "Github Repo URL",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
