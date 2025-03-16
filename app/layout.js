import "./globals.css";


export const metadata = {
  title: "تسک پرشین عصر هوشمند",
  description: "تسک شکرت پرشین عصر هوشمند با nextjs v15 و tailwindCSS",
  author: "seyed ali taghawi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazirMatn">
        {children}
      </body>
    </html>
  );
}
