import "@/components/tiptap-ui-primitive/badge/badge-colors.scss";
import "@/components/tiptap-ui-primitive/badge/badge-group.scss";
import "@/components/tiptap-ui-primitive/badge/badge.scss";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "ghost" | "white" | "gray" | "green" | "default";
  size?: "default" | "small";
  appearance?: "default" | "subdued" | "emphasized";
  trimText?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export function Badge({
  variant,
  size = "default",
  appearance = "default",
  trimText = false,
  className,
  children,
  ref,
  ...props
}: BadgeProps) {
  return (
    <div
      ref={ref}
      className={`tiptap-badge ${className || ""}`}
      data-style={variant}
      data-size={size}
      data-appearance={appearance}
      data-text-trim={trimText ? "on" : "off"}
      {...props}
    >
      {children}
    </div>
  );
}

export default Badge;
