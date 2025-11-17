import { defineConfig } from "tinacms";

// Your TinaCMS configuration
export default defineConfig({
  branch:
    process.env.VITE_TINA_BRANCH || // Override branch in Vite environment
    process.env.TINA_BRANCH ||
    process.env.HEAD ||
    "main",
  clientId: process.env.VITE_TINA_CLIENT_ID || null, // Get from Tina Cloud (optional - for local you can leave null)
  token: process.env.VITE_TINA_TOKEN || null, // Get from Tina Cloud (optional)

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        format: "json",
        ui: {
          router: ({ document }) => {
            return `/`;
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "mainTitle",
                label: "Main Title (Line 1)",
                required: true,
              },
              {
                type: "string",
                name: "mainSubtitle",
                label: "Main Title (Line 2)",
                required: true,
              },
              {
                type: "string",
                name: "brandText",
                label: "Brand Text",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Description (Part 1)",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "descriptionHighlight",
                label: "Description Highlight",
                required: true,
              },
              {
                type: "string",
                name: "descriptionEnd",
                label: "Description (Part 2)",
                required: true,
              },
              {
                type: "string",
                name: "backgroundImage",
                label: "Background Image URL",
                required: true,
              },
              {
                type: "string",
                name: "primaryButtonText",
                label: "Primary Button Text",
                required: true,
              },
              {
                type: "string",
                name: "primaryButtonIcon",
                label: "Primary Button Icon Class",
                required: true,
              },
              {
                type: "string",
                name: "primaryButtonLink",
                label: "Primary Button Link",
                required: true,
              },
              {
                type: "string",
                name: "secondaryButtonText",
                label: "Secondary Button Text",
                required: true,
              },
              {
                type: "string",
                name: "secondaryButtonIcon",
                label: "Secondary Button Icon Class",
                required: true,
              },
              {
                type: "string",
                name: "secondaryButtonLink",
                label: "Secondary Button Link",
                required: true,
              },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Value",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Color (Hex)",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
