import { Roboto } from "next/font/google";
import { Header } from "@components";
import { CatalogProvider } from "@store/catalog";
import "@/assets/styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "AstroShield",
  description:
    "Онлайн-сервис по мониторингу и уничтожению опасных астероидов. Отследить астероид.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        <CatalogProvider>{children}</CatalogProvider>
      </body>
    </html>
  );
}
