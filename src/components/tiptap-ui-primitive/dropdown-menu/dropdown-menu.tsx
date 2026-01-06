import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/tiptap-utils";
import "@/components/tiptap-ui-primitive/dropdown-menu/dropdown-menu.scss";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root modal={false} {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal {...props} />;
}

function DropdownMenuTrigger({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> & {
  ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Trigger>>;
}) {
  return <DropdownMenuPrimitive.Trigger ref={ref} {...props} />;
}

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuItem = DropdownMenuPrimitive.Item;

const DropdownMenuSubTrigger = DropdownMenuPrimitive.SubTrigger;

function DropdownMenuSubContent({
  className,
  portal = true,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & {
  portal?: boolean | React.ComponentProps<typeof DropdownMenuPortal>;
  ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>>;
}) {
  const content = (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn("tiptap-dropdown-menu", className)}
      {...props}
    />
  );

  return portal ? (
    <DropdownMenuPortal {...(typeof portal === "object" ? portal : {})}>
      {content}
    </DropdownMenuPortal>
  ) : (
    content
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  portal = false,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
  portal?: boolean;
  ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Content>>;
}) {
  const content = (
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      onCloseAutoFocus={(e) => e.preventDefault()}
      className={cn("tiptap-dropdown-menu", className)}
      {...props}
    />
  );

  return portal ? (
    <DropdownMenuPortal {...(typeof portal === "object" ? portal : {})}>
      {content}
    </DropdownMenuPortal>
  ) : (
    content
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
