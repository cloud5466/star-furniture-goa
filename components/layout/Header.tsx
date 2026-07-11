import { BrandLockup } from "@/components/layout/BrandLockup";
import { MobileNav } from "@/components/layout/MobileNav";
import { Navbar } from "@/components/layout/Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(212,160,60,0.22)] bg-[rgba(25,25,25,0.94)] backdrop-blur-[14px]">
      <div className="mx-auto grid min-h-[82px] w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:min-h-[92px] lg:px-10 xl:px-14">
        <BrandLockup />
        <Navbar />
        <MobileNav />
      </div>
    </header>
  );
}
