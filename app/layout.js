import Providers from "@redux/Providers";
import "./globals.css";
import Layout from "@layout/Layout";

export const metadata = {
  title: "تسک پرشین عصر هوشمند",
  description: "تسک شکرت پرشین عصر هوشمند با nextjs v15 و tailwindCSS",
  author: "seyed ali taghawi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazirMatn">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
