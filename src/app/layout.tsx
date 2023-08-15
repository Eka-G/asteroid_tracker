import { Passion_One, Roboto } from "next/font/google";
import "@/assets/styles/globals.scss";

const passionOne = Passion_One({
  subsets: ["latin"],
  weight: "400",
});

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
