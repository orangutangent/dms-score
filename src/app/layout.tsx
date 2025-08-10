import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Maturity Score",
  description: "Digital Maturity Score for Governments and Businesses",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <div className="pt-20 flex-1 flex flex-col ">
              {children}
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
