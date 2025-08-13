import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-custom-blue mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
      <p className="text-lg text-center mb-8">{t("description")}</p>
      <Link
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        href="/"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
}
