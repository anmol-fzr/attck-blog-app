import { buttonVariants } from "../ui";
import { default as RawLink, LinkProps as RawLinkProps } from "next/link";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface LinkProps
  extends RawLinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

const Link = ({
  children,
  variant = "link",
  size,
  className,
  ...props
}: LinkProps) => (
  <RawLink
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  >
    {children}
  </RawLink>
);

export { Link };
