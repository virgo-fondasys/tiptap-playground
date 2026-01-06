import { Fragment, useMemo } from "react";

// --- Tiptap UI Primitive ---
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tiptap-ui-primitive/tooltip";

// --- Lib ---
import { cn, parseShortcutKeys } from "@/lib/tiptap-utils";

import "@/components/tiptap-ui-primitive/button/button-colors.scss";
import "@/components/tiptap-ui-primitive/button/button-group.scss";
import "@/components/tiptap-ui-primitive/button/button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  showTooltip?: boolean;
  tooltip?: React.ReactNode;
  shortcutKeys?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

export function ShortcutDisplay({ shortcuts }: { shortcuts: string[] }) {
  if (shortcuts.length === 0) return null;

  return (
    <div>
      {shortcuts.map((key, index) => (
        <Fragment key={index}>
          {index > 0 && <kbd>+</kbd>}
          <kbd>{key}</kbd>
        </Fragment>
      ))}
    </div>
  );
}

export function Button({
  className,
  children,
  tooltip,
  showTooltip = true,
  shortcutKeys,
  "aria-label": ariaLabel,
  ref,
  ...props
}: ButtonProps) {
  const shortcuts = useMemo<string[]>(
    () => parseShortcutKeys({ shortcutKeys }),
    [shortcutKeys]
  );

  if (!tooltip || !showTooltip) {
    return (
      <button
        className={cn("tiptap-button", className)}
        ref={ref}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Tooltip delay={200}>
      <TooltipTrigger
        className={cn("tiptap-button", className)}
        ref={ref}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {tooltip}
        <ShortcutDisplay shortcuts={shortcuts} />
      </TooltipContent>
    </Tooltip>
  );
}

export function ButtonGroup({
  className,
  children,
  orientation = "vertical",
  ref,
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={cn("tiptap-button-group", className)}
      data-orientation={orientation}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

export default Button;
