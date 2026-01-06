import {
  Button,
  type ButtonProps,
} from "@/components/tiptap-ui-primitive/button";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import type { Editor } from "@tiptap/core";
import React from "react";

interface ShoppingCardButtonProps extends Omit<ButtonProps, "type"> {
  editor?: Editor | null;
}

export function ShoppingCardButton({
  editor: providedEditor,
  ...buttonProps
}: ShoppingCardButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const { editor } = useTiptapEditor(providedEditor);

  if (!editor) return null;

  return (
    <Button
      onClick={() =>
        editor
          .chain()
          .focus()
          .insertContent({
            type: "shoppingCard",
            attrs: {
              name: "Sample Product",
              url: "https://example.com",
              description: "This is a sample product description.",
              price: "$19.99",
            },
          })
          .run()
      }
      type="button"
      data-style="ghost"
      role="button"
      tabIndex={-1}
      tooltip="Shopping Card"
      {...buttonProps}
    >
      SP
    </Button>
  );
}
