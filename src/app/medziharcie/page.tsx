import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Tlačiarenské značky na medzihárčí",
  description:
    "Medzihárčie, gutters, traffic lights a šípky na medzihárčí u britských Machins.",
  alternates: {
    canonical: "https://www.filatelia-machins.sk/medziharcie.html",
  },
};

export default function MedziharciaPage() {
  return (
    <SiteLayout>
      <h1>Tlačiarenské značky na medzihárčí</h1>
      <p>
        Niekedy sa k zberateľom dostanú neporezané tlačové hárky s
        neoddelenými priehradkovými hárkami. Známky zo susedných hárkov spojené
        plochou papiera sa v anglickej terminológii nazývajú{" "}
        <strong>gutters</strong> (z angl. gutter = žľab). V slovenčine sa táto
        časť nazýva medzihárčie. To môže byť čisté alebo s tlačiarenskými
        značkami.
      </p>

      <div className="my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482216/img/gutter-arrow-1_ww2ytr.jpg"
          alt="Medzihárčie so stredovou šípkou"
          caption="Medzihárčie so stredovou šípkou"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Medzihárčie so stredovými šípkami (1976)</p>
      </div>

      <h2>Traffic lights a arrows</h2>
      <div className="callout callout-info">
        <p>
          Pri Machins sú zaujímavé dva druhy týchto značiek - farebné kruhové
          stupnice v rámčeku, tzv. <strong>traffic lights</strong> a šípky
          určujúce stred hárku, tzv. <strong>arrows</strong>. Traffic lights
          nájdeme len u Machins vo veľkom formáte z rokov 1977-1986 v nominálnych
          hodnotách £1, £1.30, £1.33, £1.41, £1.50, £1.60, £2 a £5.
        </p>
      </div>

      <div className="my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/traffic-lights-gutters_fftveh.jpg"
          alt="Medzihárčia s farebnými značkami"
          caption="Medzihárčia s farebnými značkami"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Medzihárčia s farebnými značkami, <em>Traffic lights</em> (1977 a
          1984)
        </p>
      </div>

      <p>
        Najčastejšie sa s medzihárčím zbierajú páry, ale v zbierkach nájdeme aj
        bloky z viacerých párov, prípadne samostatné kusovky s vyššie
        spomínanými tlačiarenskými značkami.
      </p>
    </SiteLayout>
  );
}
