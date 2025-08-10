import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Read the locale from the cookie
  const locale = (await cookies()).get("NEXT_LOCALE")?.value || "ru";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
