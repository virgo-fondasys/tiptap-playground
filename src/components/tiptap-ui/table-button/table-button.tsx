import {
  Button,
  type ButtonProps,
} from "@/components/tiptap-ui-primitive/button";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import type { Editor } from "@tiptap/core";
import React from "react";

interface TableButtonProps extends Omit<ButtonProps, "type"> {
  editor?: Editor | null;
}

export function TableButton({
  editor: providedEditor,
  ...buttonProps
}: TableButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const { editor } = useTiptapEditor(providedEditor);

  if (!editor) return null;

  return (
    <Button
      onClick={() =>
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run()
      }
      type="button"
      data-style="ghost"
      role="button"
      tabIndex={-1}
      tooltip="Table"
      {...buttonProps}
    >
      TB
    </Button>
  );
}
