"use client";

import { useState } from "react";

import { ConsultationCTA } from "@/components/design/ConsultationCTA";
import {
  ContactForm,
  type ContactDetailsValue,
} from "@/components/design/ContactForm";
import {
  DimensionsForm,
  type DimensionsValue,
} from "@/components/design/DimensionsForm";
import { FurnitureSelector } from "@/components/design/FurnitureSelector";
import { ImageUploader } from "@/components/design/ImageUploader";
import { PinterestInput } from "@/components/design/PinterestInput";
import { ProcessTimeline } from "@/components/design/ProcessTimeline";
import { RequirementsForm } from "@/components/design/RequirementsForm";
import { contact } from "@/data/contact";
import {
  designFurnitureCategories,
  designYourSpaceContent,
  type DesignFurnitureCategory,
} from "@/data/designYourSpace";

function createWhatsAppHref(message: string) {
  return `https://wa.me/91${contact.phoneNumbers[0]}?text=${encodeURIComponent(
    message,
  )}`;
}

function formatOptionalValue(value: string) {
  return value.trim() || "Not provided";
}

interface DesignYourSpaceFormProps {
  content: typeof designYourSpaceContent;
}

export function DesignYourSpaceForm({ content }: DesignYourSpaceFormProps) {
  const [selectedCategory, setSelectedCategory] = useState<DesignFurnitureCategory>(
    designFurnitureCategories[0],
  );
  const [files, setFiles] = useState<File[]>([]);
  const [pinterestLink, setPinterestLink] = useState("");
  const [dimensions, setDimensions] = useState<DimensionsValue>({
    width: "",
    length: "",
    height: "",
  });
  const [requirements, setRequirements] = useState("");
  const [contactDetails, setContactDetails] = useState<ContactDetailsValue>({
    name: "",
    phone: "",
    email: "",
  });

  function handleStartProject() {
    const message = [
      "Hello Star Furniture Goa,",
      "",
      "I would like to start a custom furniture project.",
      "",
      `Furniture Category: ${selectedCategory}`,
      `Pinterest Link: ${formatOptionalValue(pinterestLink)}`,
      "",
      "Room Dimensions:",
      `Width: ${formatOptionalValue(dimensions.width)}`,
      `Length: ${formatOptionalValue(dimensions.length)}`,
      `Height: ${formatOptionalValue(dimensions.height)}`,
      "",
      "Requirements:",
      formatOptionalValue(requirements),
      "",
      "Contact Details:",
      `Name: ${formatOptionalValue(contactDetails.name)}`,
      `Phone: ${formatOptionalValue(contactDetails.phone)}`,
      `Email: ${formatOptionalValue(contactDetails.email)}`,
      "",
      files.length > 0
        ? `I have ${files.length} inspiration image(s) to attach in WhatsApp.`
        : "No inspiration images selected yet.",
      "",
      "Thank you.",
    ].join("\n");

    window.open(createWhatsAppHref(message), "_blank", "noreferrer");
  }

  return (
    <div className="bg-[var(--color-bg-dark)] px-4 pb-16 text-[var(--color-cream)] sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1280px] gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.48fr)] lg:items-start">
        <div className="grid gap-6">
          <FurnitureSelector
            categories={designFurnitureCategories}
            kicker={content.furnitureSelector.kicker}
            label={content.furnitureSelector.label}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            title={content.furnitureSelector.title}
          />

          <section className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 sm:p-6">
            <p className="section-kicker mb-5">{content.inspiration.kicker}</p>
            <div className="grid gap-4 lg:grid-cols-[1fr_0.86fr]">
              <ImageUploader
                files={files}
                note={content.inspiration.imageNote}
                onFilesChange={setFiles}
                title={content.inspiration.imageTitle}
              />
              <PinterestInput
                onChange={setPinterestLink}
                placeholder={content.inspiration.pinterestPlaceholder}
                title={content.inspiration.pinterestTitle}
                value={pinterestLink}
              />
            </div>
          </section>

          <DimensionsForm
            helperText={content.dimensions.helperText}
            kicker={content.dimensions.kicker}
            onChange={setDimensions}
            value={dimensions}
          />
          <RequirementsForm
            kicker={content.requirements.kicker}
            onChange={setRequirements}
            placeholder={content.requirements.placeholder}
            value={requirements}
          />
          <ContactForm
            kicker={content.contact.kicker}
            onChange={setContactDetails}
            value={contactDetails}
          />
          <ConsultationCTA
            label={content.cta.label}
            onClick={handleStartProject}
          />
        </div>

        <div className="lg:sticky lg:top-28">
          <ProcessTimeline
            kicker={content.timeline.kicker}
            steps={content.timeline.steps}
            title={content.timeline.title}
          />
        </div>
      </div>
    </div>
  );
}
