import type { Metadata } from "next";
import { Roboto_Slab, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Filatelia Machins SK",
    default: "Slovenský sprievodca svetom Machins | Filatelia Machins SK",
  },
  description:
    "Slovenský sprievodca svetom britských definitívnych známok Machins. Parametre, typy, raritné kusy, regionálne vydania a ďalšie informácie.",
  authors: [{ name: "Pavol Hrabčák" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sk"
      data-scroll-behavior="smooth"
      className={`${robotoSlab.variable} ${lora.variable}`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W5HV8GM');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5HV8GM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
