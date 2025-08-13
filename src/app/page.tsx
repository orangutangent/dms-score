import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl ">
        <h1 className="text-2xl font-bold  mb-4">{t("mainTitle")}</h1>
        <div>
          <span className="mt-6  text-gray-600  ">{t("mainDescription")}</span>
          <span className="mt-2  text-gray-600">
            <Link
              href="https://www.unescap.org/events/2025/regional-roundtable-digital-public-services-small-and-medium-sized-enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t("moreInfoLinkText")}
            </Link>
          </span>
        </div>
        <div className="mt-6 space-y-2 text-gray-500">
          <p>{t("timeToComplete")}</p>
          <p>{t("questionCount")}</p>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row gap-6">
          <Link href="/digitalmaturity">
            <Button>{t("startMspButton")}</Button>
          </Link>
          <Link href="/govermentssurvey">
            <Button>{t("startGovButton")}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
