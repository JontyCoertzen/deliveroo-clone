export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "restuarants",
      type: "array",
      title: "Restuarants",
      of: [{ type: "reference", to: [{ type: "restuarant" }] }],
    },
  ],
};
