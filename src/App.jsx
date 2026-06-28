import React from "react";
import BlockRenderer from "./components/blocks/BlockRenderer";

export default function App() {

  console.log("APP MOUNTED");

  // 🧪 TEST CHARACTER DATA
  const character = {
    name: "Star",
    avatar: "https://placehold.co/120",
    title: "Prototype Character",
    quote: "This is where the world begins.",
    bio: "A test character used to verify the LEGO block system.",
    moodboard: [
      "https://placehold.co/200",
      "https://placehold.co/200",
      "https://placehold.co/200",
      "https://placehold.co/200"
    ]
  };

  // 🧱 LEGO LAYOUT (your first real block tree)
  const page = {
    type: "column",
    children: [

      {
        type: "row",
        props: {
          gap: "20px"
        },
        children: [

          {
            type: "header",
            props: {
              name: "{{name}}",
              avatar: "{{avatar}}",
              subtitle: "{{title}}"
            }
          },

          {
            type: "moodboard",
            props: {
              images: [
                "{{moodboard.0}}",
                "{{moodboard.1}}",
                "{{moodboard.2}}",
                "{{moodboard.3}}"
              ]
            }
          }

        ]
      },

      {
        type: "quote",
        props: {
          text: "{{quote}}"
        }
      },

      {
        type: "bio",
        props: {
          text: "{{bio}}"
        }
      }

    ]
  };

  return (
    <div style={{ padding: "20px" }}>
      <BlockRenderer block={page} data={character} />
    </div>
  );
}