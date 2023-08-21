import { Roboto } from "next/font/google";
import { Header, HeroImg } from "@components";
import { CatalogProvider, CartProvider } from "@store";
import styles from "./layout.module.scss";
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
        <CatalogProvider>
          <CartProvider>
            <main className={styles.main}>
              <HeroImg />
              {children}
            </main>
          </CartProvider>
        </CatalogProvider>
      </body>
    </html>
  );
}
