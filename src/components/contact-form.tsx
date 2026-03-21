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
  const form = useForm({
    defaultValues: {
      email: "",
      inquiryType: "",
      message: "",
      name: "",
    },
    onSubmit: async ({ value, formApi }) => {
      const data = contactFormSchema.parse(value);

      try {
        const response = await $submitContact({
          data,
        });

        formApi.reset();
        toast.success(response.message);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the inquiry.";

        toast.error(message);
      } finally {
      }
    },
  });

  return (
    <form
      id="contact-form"
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
    >
      <FieldGroup className="gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <form.Field
            name="name"
            validators={{
              onChange: contactFormSchema.shape.name,
            }}
          >
            {(field) => {
              const isInvalid =
                (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
                !field.state.meta.isValid;
              const errorId = isInvalid ? "contact-name-error" : undefined;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor="contact-name">Full Name</FieldLabel>
                  <Input
                    id="contact-name"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-errormessage={errorId}
                    aria-invalid={isInvalid}
                    autoComplete="name"
                    className="h-12 rounded-2xl border-white/10 bg-white/3 px-4 text-base text-(--marketing-heading) placeholder:text-(--marketing-copy-soft)"
                    placeholder="John Doe"
                  />
                  {isInvalid ? <FieldError id={errorId} errors={field.state.meta.errors} /> : null}
                </Field>
              );
            }}
          </form.Field>
          <form.Field
            name="email"
            validators={{
              onChange: contactFormSchema.shape.email,
            }}
          >
            {(field) => {
              const isInvalid =
                (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
                !field.state.meta.isValid;
              const errorId = isInvalid ? "contact-email-error" : undefined;

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
                    aria-errormessage={errorId}
                    aria-invalid={isInvalid}
                    autoComplete="email"
                    className="h-12 rounded-2xl border-white/10 bg-white/3 px-4 text-base text-(--marketing-heading) placeholder:text-(--marketing-copy-soft)"
                    placeholder="john@company.com"
                  />
                  {isInvalid ? <FieldError id={errorId} errors={field.state.meta.errors} /> : null}
                </Field>
              );
            }}
          </form.Field>
        </div>

        <form.Field
          name="inquiryType"
          validators={{
            onChange: contactFormSchema.shape.inquiryType,
          }}
        >
          {(field) => {
            const isInvalid =
              (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
              !field.state.meta.isValid;
            const descriptionId = "contact-inquiry-type-description";
            const errorId = isInvalid ? "contact-inquiry-type-error" : undefined;

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
                    aria-errormessage={errorId}
                    aria-invalid={isInvalid}
                    className="h-14 w-full rounded-2xl border-white/10 bg-white/3 px-4 text-base text-(--marketing-heading) data-placeholder:text-(--marketing-copy-soft)"
                  >
                    <SelectValue placeholder="Select the project type" />
                  </SelectTrigger>
                  <SelectContent
                    align="start"
                    className="rounded-2xl border border-white/10 bg-(--marketing-panel) text-(--marketing-heading)"
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
                <FieldDescription id={descriptionId}>
                  Pick the closest fit so the follow-up can stay focused.
                </FieldDescription>
                {isInvalid ? <FieldError id={errorId} errors={field.state.meta.errors} /> : null}
              </Field>
            );
          }}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: contactFormSchema.shape.message,
          }}
        >
          {(field) => {
            const isInvalid =
              (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
              !field.state.meta.isValid;
            const errorId = isInvalid ? "contact-message-error" : undefined;

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                <Textarea
                  id="contact-message"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-errormessage={errorId}
                  aria-invalid={isInvalid}
                  className="min-h-40 rounded-3xl border-white/10 bg-white/3 px-4 py-4 text-base text-(--marketing-heading) placeholder:text-(--marketing-copy-soft)"
                  placeholder="Tell me about your project, timeline, or the friction you want to solve."
                />
                <FieldDescription>
                  Include enough context to understand the project goals, constraints, or room
                  setup.
                </FieldDescription>
                {isInvalid ? <FieldError id={errorId} errors={field.state.meta.errors} /> : null}
              </Field>
            );
          }}
        </form.Field>
      </FieldGroup>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => {
            form.reset();
          }}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-12 rounded-full border-white/10 bg-transparent px-5 text-(--marketing-heading) hover:bg-white/5",
          )}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={form.state.isSubmitting}
          className={cn(
            buttonVariants(),
            "h-12 rounded-full px-5 text-sm font-semibold shadow-[0_18px_40px_rgba(0,0,0,0.25)]",
          )}
        >
          {form.state.isSubmitting ? "Sending..." : "Send Inquiry"}
          <IconArrowRight data-icon="inline-end" />
        </button>
      </div>
    </form>
  );
}
