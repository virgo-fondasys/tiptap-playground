import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ShoppingCard from "./shopping-card-ui";

export default Node.create({
  name: "shoppingCard",
  group: "block",
  atom: true,

  addAttributes() {
    return {
      name: {
        default: "",
      },
      url: {
        default: "",
      },
      description: {
        default: "",
      },
      price: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "shopping-card",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["shopping-card", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ShoppingCard);
  },
});
