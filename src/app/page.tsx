import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main className="flex-1 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-8 min-h-screen">
        <div className="w-full max-w-6xl ">
          <h1 className="text-2xl font-bold  mb-4">{t("mainTitle")}</h1>
          <p className="mt-4 text-gray-600">{t("description1")}</p>
          <p className="mt-4 text-gray-600">{t("description2")}</p>
          <p className="mt-4 text-gray-600">{t("description3")}</p>
          <p className="mt-4 text-gray-600">{t("description4")}</p>
          <p className="mt-4 text-gray-600">{t("invitationText")}</p>
          <div className="mt-6 flex flex-col lg:flex-row gap-6 ">
            <Link href="/govermentssurvey">
              <Button>{t("startGovButton")}</Button>
            </Link>
            <Link href="/digitalmaturity">
              <Button>{t("startMspButton")}</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="w-full max-w-6xl mx-auto">
          <p className="mt-6 text-gray-600">
            {t("projectInfo_preLink")}
            <Link
              href={t("projectInfo_linkUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t("projectInfo_linkText")}
            </Link>
            {t("projectInfo_postLink")}
          </p>
          <p className="mt-6 text-gray-600">{t("roundtableInfoText")}</p>
          <Link
            href={t("roundtableInfoLinkUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("roundtableInfoLinkUrl")}
          </Link>
          <div className="mt-6 space-y-2 text-gray-500">
            <p>
              {t("contactInfo_preLink")}
              <a
                href={`mailto:${t("contactInfo_email")}`}
                className="text-blue-600 hover:underline"
              >
                {t("contactInfo_email")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
