"use client";

import { Button } from "@/components/shared-ui/Button";

interface LoadMoreButtonProps {
  label: string;
  remainingCount: number;
  onClick: () => void;
}

export function LoadMoreButton({
  label,
  remainingCount,
  onClick,
}: LoadMoreButtonProps) {
  if (remainingCount <= 0) {
    return null;
  }

  return (
    <div className="mt-10 flex justify-center">
      <Button
        aria-label={`${label}. ${remainingCount} more items available.`}
        onClick={onClick}
        size="lg"
        type="button"
        variant="outline"
      >
        {label}
      </Button>
    </div>
  );
}

