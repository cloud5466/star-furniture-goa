"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

interface ImageUploaderProps {
  title: string;
  note: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
}

export function ImageUploader({
  title,
  note,
  files,
  onFilesChange,
}: ImageUploaderProps) {
  const [previews, setPreviews] = useState<
    Array<{
      key: string;
      name: string;
      url: string;
    }>
  >([]);

  useEffect(() => {
    const nextPreviews = files.map((file) => ({
      key: `${file.name}-${file.lastModified}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPreviews(nextPreviews);

    return () => {
      nextPreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [files]);

  return (
    <div className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(25,25,25,0.24)] p-4">
      <label
        className="flex cursor-pointer flex-col gap-3 rounded-[8px] border border-dashed border-[rgba(212,160,60,0.36)] p-4 transition-colors duration-200 hover:border-[var(--color-gold)] focus-within:ring-2 focus-within:ring-[var(--color-gold)]"
        htmlFor="inspiration-images"
      >
        <span className="flex items-center gap-3 font-display text-[1.35rem] font-semibold text-[var(--color-gold)]">
          <ImagePlus aria-hidden="true" className="h-5 w-5" />
          {title}
        </span>
        <span className="text-sm leading-6 text-[rgba(255,248,238,0.72)]">
          Select multiple inspiration images from your device.
        </span>
        <input
          accept="image/*"
          className="sr-only"
          id="inspiration-images"
          multiple
          onChange={(event) => {
            onFilesChange(Array.from(event.target.files ?? []));
          }}
          type="file"
        />
      </label>

      {files.length > 0 ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {previews.map((preview) => (
              <div
                className="flex items-center gap-3 rounded-[8px] border border-[rgba(212,160,60,0.18)] bg-[rgba(255,248,238,0.035)] p-2"
                key={preview.key}
              >
                <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-[6px] bg-[#111]">
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    sizes="64px"
                    src={preview.url}
                    unoptimized
                  />
                </div>
                <p className="min-w-0 truncate text-xs font-semibold text-[rgba(255,248,238,0.78)]">
                  {preview.name}
                </p>
              </div>
            ))}
        </div>
      ) : null}

      <p className="mt-4 text-xs leading-5 text-[rgba(255,248,238,0.58)]">
        {note}
      </p>
    </div>
  );
}
