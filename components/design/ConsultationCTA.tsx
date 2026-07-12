"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";

interface ConsultationCTAProps {
  label: string;
  onClick: () => void;
}

export function ConsultationCTA({ label, onClick }: ConsultationCTAProps) {
  return (
    <div className="flex justify-start">
      <Button className="group" onClick={onClick} size="lg" type="button">
        <Send aria-hidden="true" className="h-4 w-4" />
        {label}
      </Button>
    </div>
  );
}

