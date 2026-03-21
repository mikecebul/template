import type { ComponentProps, ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function FieldGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="field-group" className={cn("flex flex-col gap-5", className)} {...props} />
  );
}

function Field({
  className,
  orientation = "vertical",
  ...props
}: ComponentProps<"div"> & {
  orientation?: "horizontal" | "responsive" | "vertical";
}) {
  return (
    <div
      data-slot="field"
      data-orientation={orientation}
      className={cn(
        "flex flex-col gap-2",
        "data-[orientation=horizontal]:sm:flex-row data-[orientation=horizontal]:sm:items-center data-[orientation=horizontal]:sm:justify-between data-[orientation=horizontal]:sm:gap-4",
        "data-[orientation=responsive]:gap-3 data-[orientation=responsive]:sm:flex-row data-[orientation=responsive]:sm:items-start data-[orientation=responsive]:sm:justify-between data-[orientation=responsive]:sm:gap-6",
        className,
      )}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn("text-sm text-foreground", className)}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  );
}

function FieldError({
  className,
  errors,
  ...props
}: ComponentProps<"div"> & {
  errors: unknown;
}) {
  const messages = getErrorMessages(errors);

  if (!messages.length) {
    return null;
  }

  return (
    <div
      data-slot="field-error"
      aria-live="polite"
      className={cn("text-sm leading-6 text-destructive", className)}
      {...props}
    >
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </div>
  );
}

function FieldSet({ className, ...props }: ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn("flex min-w-0 flex-col gap-3", className)}
      {...props}
    />
  );
}

function FieldLegend({ className, ...props }: ComponentProps<"legend">) {
  return (
    <legend
      data-slot="field-legend"
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="field-title"
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

function FieldSeparator({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="field-separator" className={cn("h-px bg-border", className)} {...props} />;
}

function getErrorMessages(errors: unknown): string[] {
  if (typeof errors === "string") {
    return [errors];
  }

  if (!Array.isArray(errors)) {
    return [];
  }

  const messages = errors
    .map((error) => {
      if (typeof error === "string") {
        return error;
      }

      if (error && typeof error === "object" && "message" in error) {
        const message = (error as { message?: ReactNode }).message;
        return typeof message === "string" ? message : null;
      }

      return null;
    })
    .filter((message): message is string => Boolean(message));

  return [...new Set(messages)];
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
