"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const otherLocale = locale === "ru" ? "en" : "ru";

  const switchLocale = () => {
    // Set cookie for the new locale
    document.cookie = `NEXT_LOCALE=${otherLocale};path=/;max-age=31536000`;
    // Refresh the page to apply the new locale
    router.refresh();
  };

  return (
    <Button onClick={switchLocale} variant="secondary">
      {locale.toUpperCase()}
    </Button>
  );
}
