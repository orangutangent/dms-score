import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl ">
        <h1 className="text-2xl font-bold  mb-4">{t("mainTitle")}</h1>
        <p className="mt-6  text-gray-600  ">
          {t("mainDescriptionPart1")}
          <Link
            href="https://unescap.org/sites/default/d8files/event-documents/For%20StP%20Flyer%20DPS4SMEs.pdf?_gl=1*1spougv*_ga*MTY5MjM4NTkyOC4xNzA2MTU1NjIz*_ga_SB1ZX36Y86*czE3NTUwNzcxNDYkbzExMjIkZzEkdDE3NTUwNzcxNTkkajQ3JGwwJGgw*_ga_FNVGF7TE9P*czE3NTUwNzcxNDYkbzExMTUkZzEkdDE3NTUwNzcxNTkkajQ3JGwwJGgw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("unescapProjectLinkText")}
          </Link>
          {t("mainDescriptionPart2")}
          <Link
            href="https://www.unescap.org/events/2025/regional-roundtable-digital-public-services-small-and-medium-sized-enterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("roundtableLinkText")}
          </Link>
        </p>
        <div className="mt-6 space-y-2 text-gray-500">
          <p>{t("invitationText")}</p>
          <p>{t("timeToComplete")}</p>
          <p>{t("questionCount")}</p>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row gap-6">
          <Link href="/govermentssurvey">
            <Button>{t("startGovButton")}</Button>
          </Link>
          <Link href="/digitalmaturity">
            <Button>{t("startMspButton")}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
