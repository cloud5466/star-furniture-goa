import { MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import { WishlistButton } from "@/components/products/WishlistButton";

interface ProductActionItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
}

interface ProductActionsProps {
  bookConsultationLabel: string;
  whatsappEnquiryLabel: string;
  wishlistSaveLabel: string;
  wishlistSavedLabel: string;
  bookConsultationHref: string;
  whatsappEnquiryHref: string;
  product: ProductActionItem;
}

export function ProductActions({
  bookConsultationLabel,
  whatsappEnquiryLabel,
  wishlistSaveLabel,
  wishlistSavedLabel,
  bookConsultationHref,
  whatsappEnquiryHref,
  product,
}: ProductActionsProps) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      <Button asChild className="group" size="lg">
        <a href={bookConsultationHref} rel="noreferrer" target="_blank">
          <Send aria-hidden="true" className="h-4 w-4" />
          {bookConsultationLabel}
        </a>
      </Button>
      <Button asChild size="lg" variant="outline">
        <a href={whatsappEnquiryHref} rel="noreferrer" target="_blank">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          {whatsappEnquiryLabel}
        </a>
      </Button>
      <WishlistButton
        product={product}
        saveLabel={wishlistSaveLabel}
        savedLabel={wishlistSavedLabel}
      />
    </div>
  );
}
