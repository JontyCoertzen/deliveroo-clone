export default {
  name: "restuarant",
  title: "Restuarant",
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
      name: "image",
      type: "image",
      title: "Image of the restuarant",
    },
    {
      name: "lat",
      type: "string",
      title: "Latitude",
    },
    {
      name: "long",
      type: "string",
      title: "Longitude",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "string",
      title: "Rating",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Catetory",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
