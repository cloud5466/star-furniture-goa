import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

interface ContactCard {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

interface ContactCardsProps {
  cards: ContactCard[];
}

export function ContactCards({ cards }: ContactCardsProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-10 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-14 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <a
              className="group rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition-colors duration-200 hover:border-[rgba(212,160,60,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
              href={card.href}
              key={card.label}
              rel={card.external ? "noreferrer" : undefined}
              target={card.external ? "_blank" : undefined}
            >
              <Icon
                aria-hidden="true"
                className="mb-5 h-5 w-5 text-[var(--color-gold)]"
                strokeWidth={1.8}
              />
              <p className="section-kicker mb-3">{card.label}</p>
              <p className="text-sm leading-6 text-[rgba(255,248,238,0.78)] transition-colors duration-200 group-hover:text-[var(--color-cream)]">
                {card.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export const contactCardIcons = {
  email: Mail,
  map: MapPin,
  phone: Phone,
  whatsapp: MessageCircle,
} as const;

