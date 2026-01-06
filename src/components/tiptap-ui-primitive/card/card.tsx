"use client";

import { cn } from "@/lib/tiptap-utils";
import "@/components/tiptap-ui-primitive/card/card.scss";

function Card({
  className,
  ref,
  ...props
}: React.ComponentProps<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return <div ref={ref} className={cn("tiptap-card", className)} {...props} />;
}

function CardHeader({
  className,
  ref,
  ...props
}: React.ComponentProps<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn("tiptap-card-header", className)} {...props} />
  );
}

function CardBody({
  className,
  ref,
  ...props
}: React.ComponentProps<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn("tiptap-card-body", className)} {...props} />
  );
}

function CardItemGroup({
  className,
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
      data-orientation={orientation}
      className={cn("tiptap-card-item-group", className)}
      {...props}
    />
  );
}

function CardGroupLabel({
  className,
  ref,
  ...props
}: React.ComponentProps<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn("tiptap-card-group-label", className)}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ref,
  ...props
}: React.ComponentProps<"div"> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn("tiptap-card-footer", className)} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardItemGroup,
  CardGroupLabel,
};
