"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form-start";
import * as React from "react";
import { toast } from "sonner";

import { buttonVariants } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, inquiryTypes, $submitContact } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isPending, setIsPending] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const form = useForm({
    defaultValues: {
      email: "",
      inquiryType: "" as (typeof inquiryTypes)[number] | "",
      message: "",
      name: "",
    },
    validators: {
      onChange: contactFormSchema,
      onBlur: contactFormSchema,
      onSubmit: contactFormSchema,
    },
  });

  async function handleContactSubmit() {
    if (!formRef.current) {
      return;
    }

    const fields = ["name", "email", "inquiryType", "message"] as const;

    for (const fieldName of fields) {
      form.setFieldMeta(fieldName, (meta) => ({
        ...meta,
        isTouched: true,
      }));
    }

    await form.validateAllFields("submit");

    const formData = new FormData(formRef.current);
    const result = contactFormSchema.safeParse({
      email: getFormString(formData, "email"),
      inquiryType: getFormString(formData, "inquiryType"),
      message: getFormString(formData, "message"),
      name: getFormString(formData, "name"),
    });

    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please review the form.");
      return;
    }

    setIsPending(true);

    try {
      const response = await $submitContact({
        data: result.data,
      });

      setIsSubmitted(true);
      form.reset();
      formRef.current?.reset();
      toast.success(response.message);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong while sending the inquiry.";

      toast.error(message);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form
      id="contact-form"
      ref={formRef}
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        void handleContactSubmit();
      }}
    >
      <FieldGroup className="gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <form.Field name="name">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor="contact-name">Full Name</FieldLabel>
                  <Input
                    id="contact-name"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-invalid={isInvalid}
                    autoComplete="name"
                    className="h-12 rounded-2xl border-white/10 bg-white/3 px-4 text-base text-[var(--marketing-heading)] placeholder:text-[var(--marketing-copy-soft)]"
                    placeholder="John Doe"
                  />
                  {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="email">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor="contact-email">Email Address</FieldLabel>
                  <Input
                    id="contact-email"
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-invalid={isInvalid}
                    autoComplete="email"
                    className="h-12 rounded-2xl border-white/10 bg-white/3 px-4 text-base text-[var(--marketing-heading)] placeholder:text-[var(--marketing-copy-soft)]"
                    placeholder="john@company.com"
                  />
                  {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
                </Field>
              );
            }}
          </form.Field>
        </div>

        <form.Field name="inquiryType">
          {(field) => {
            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor="contact-inquiry-type">Inquiry Type</FieldLabel>
                <Select
                  name={field.name}
                  value={field.state.value}
                  onValueChange={(value) => field.handleChange(value ?? "")}
                >
                  <SelectTrigger
                    id="contact-inquiry-type"
                    aria-invalid={isInvalid}
                    className="h-14 w-full rounded-2xl border-white/10 bg-white/3 px-4 text-base text-[var(--marketing-heading)] data-placeholder:text-[var(--marketing-copy-soft)]"
                  >
                    <SelectValue placeholder="Select the project type" />
                  </SelectTrigger>
                  <SelectContent
                    align="start"
                    className="rounded-2xl border border-white/10 bg-[var(--marketing-panel)] text-[var(--marketing-heading)]"
                  >
                    <SelectGroup>
                      {inquiryTypes.map((inquiryType) => (
                        <SelectItem key={inquiryType} value={inquiryType}>
                          {inquiryType}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FieldDescription>
                  Pick the closest fit so the follow-up can stay focused.
                </FieldDescription>
                {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
              </Field>
            );
          }}
        </form.Field>

        <form.Field name="message">
          {(field) => {
            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                <Textarea
                  id="contact-message"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-invalid={isInvalid}
                  className="min-h-40 rounded-3xl border-white/10 bg-white/3 px-4 py-4 text-base text-[var(--marketing-heading)] placeholder:text-[var(--marketing-copy-soft)]"
                  placeholder="Tell me about your project, timeline, or the friction you want to solve."
                />
                <FieldDescription>
                  Include enough context to understand the project goals, constraints, or room
                  setup.
                </FieldDescription>
                {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[var(--marketing-copy)]">
          {isSubmitted
            ? "Validation passed and the placeholder server function received the request."
            : "You will get a thoughtful follow-up once the final delivery integration is wired in."}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => form.reset()}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-full border-white/10 bg-transparent px-5 text-[var(--marketing-heading)] hover:bg-white/5",
            )}
          >
            Reset
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={() => void handleContactSubmit()}
            className={cn(
              buttonVariants(),
              "h-12 rounded-full px-5 text-sm font-semibold shadow-[0_18px_40px_rgba(0,0,0,0.25)]",
            )}
          >
            {isPending ? "Sending..." : "Send Inquiry"}
            <IconArrowRight data-icon="inline-end" />
          </button>
        </div>
      </div>
    </form>
  );
}

function getFormString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}
