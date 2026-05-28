import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import LightboxGallery from "@/components/LightboxGallery";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Pohľadnice a postery",
  description:
    "PHQ Cards, pohľadnice s Machins a reklamné postery britskej pošty na nové vydania definitívnych známok.",
  alternates: {
    canonical: "https://www.filatelia-machins.sk/pohladnice-a-postery.html",
  },
};

export default function PohladniceAPosteryPage() {
  return (
    <SiteLayout>
      <h1>Pohľadnice a postery</h1>

      <h2>PHQ Cards</h2>
      <p>
        Názvom PHQ Cards sú označované pohľadnice zobrazujúce zväčšenú poštovú
        známku, definitívnu alebo pamätné vydanie. Skratka PHQ znamená{" "}
        <em>Postal Headquarters</em>. Pohľadnice sa dajú nájsť čisté (mint)
        alebo ofrankované. V prípade ofrankovania väčšinou ide o rovnakú známku
        ako je na nich vyobrazená a často zvykne byť nalepená na prednej strane
        pohľadnice. Pečiatka je mnohokrát príležitostná, napríklad prvého dňa
        vydania alebo z filatelistickej výstavy. Štandardný rozmer karty je
        104 mm x 148 mm.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <LightboxGallery
          className="max-w-full h-auto rounded"
          slides={[
            { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/phq-card-with-stamp_epxypg.jpg", alt: "Pohľadnica D6 (1993)", caption: "Pohľadnica D6 (1993)" },
            { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/phq-card-with-stamp-2_eczgz3.jpg", alt: "Pohľadnica D7 (1995)", caption: "Pohľadnica D7 (1995)" },
          ]}
        />
      </div>
      <p className="img-caption">
        Pohľadnice D6 a D7 (1993, 1995) so známkami a príležitostnými
        pečiatkami. Tlač - House of Questa
      </p>

      <p>
        Prvé pohľadnice s Machins boli vydané Britskou poštou v roku 1993. Okrem
        Britskej pošty produkuje PHQ Cards aj Britské poštové múzeum (
        <em>British Postal Museum &amp; Archive</em>), napríklad ako pri{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/phq-bpm-40_u00tsc.jpg">
          40-tom výročí
        </ModalLink>{" "}
        od vydania prvej známky s dizajnom Machin. Táto pohľadnica je zaujímavá
        aj tým, že zobrazuje neexistujúcu známku s &ldquo;nominálom&rdquo; 40th.
      </p>

      <h2>Katalógové označenia</h2>
      <p>
        V katalógoch špecializujúcich sa na tieto pohľadnice nájdeme niekoľko
        označení. Základné je <em>PHQ a číslo</em>. Pokiaľ je vyobrazená
        definitívna známka, je často použité označenie začínajúce písmenom{" "}
        <em>D</em>. Pod jedným takýmto katalógovým číslom sa môže nachádzať buď
        1 pohľadnica, alebo aj celý set pohľadníc.
      </p>
      <p>
        Napríklad <strong>D30</strong> z roku 2008 je{" "}
        <strong>set 24 rôznych kusov</strong> s názvom{" "}
        <strong>Machin Definitives</strong> v nasledovnom zložení: 1p, 2p, 5p,
        9p, 10p, 15p, 16p, 20p, 2nd class (blue), 1st class gold, 2nd class
        large, 48p, 50p, 1st class gold large, Worldwide postcard, 56p, Europe
        40 gr, 81p, £1 ruby, Worldwide 40 gr, £1.50, £2.00, £3.00 a £5.00.
        Tlač zabezpečila firma Fulmar Colour Printing.
      </p>

      <div className="max-w-3xl mx-auto my-6">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/phq-d30-2008a_ule1la.jpg"
          alt="D30 - Machin Definitives (2008), Sada 24 pohľadníc"
          caption="D30 - Machin Definitives (2008), Sada 24 pohľadníc"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          D30 - Machin Definitives (2008), Sada 24 pohľadníc
        </p>
      </div>

      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Mnoho zberateľov využíva tieto pohľadnice aj ako podkladový materiál
          na zbieranie rôznych pečiatok, čo vytvára priestor pre ďalšiu, už samostatnú zberateľskú oblasť
          s bohatým portfóliom.
        </p>
      </div>

      <h2>Postery nových vydaní</h2>
      <p>
        Britská pošta propaguje nové vydania definitívnych známok aj cez
        prezentačné postery, ktoré môžeme vidieť v angličtine alebo waleštine.
        Niekoľko ukážok posterov s Machins z rôznych časových období:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <LightboxGallery
          className="max-w-full h-auto rounded"
          slides={[
            { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/poster-2_vumhet.jpg", alt: "Poster 1", caption: "Reklamný poster – nové vydania definitívnych známok" },
            { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/poster-4_ocq3xw.jpg", alt: "Poster 2", caption: "Reklamný poster – nové vydania definitívnych známok" },
            { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/poster-5_utuqyr.jpg", alt: "Poster 3", caption: "Reklamný poster – nové vydania definitívnych známok" },
          ]}
        />
      </div>
      <p className="img-caption">
        Reklamné postery na nové vydania definitívnych známok
      </p>

      <p>
        Zbieranie posterov je už samostatná zberateľská oblasť a venujú sa jej
        špecializované stránky. Pre zberateľov Machins sú postery doplnkovým
        grafickým materiálom, vhodným na obohatenie zbierky a doplnenie
        súvisiacich informácií, napr. konkrétnych dní vydania jednotlivých
        definitívnych známok, vtedy platné{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/poster-tarify_wwwmiq.jpg">
          tarify
        </ModalLink>{" "}
        či{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/poster-philatelic-details_covxhp.jpg">
          filatelistické detaily
        </ModalLink>
        . Ukážky sú z postera k vydaniu z 26. októbra 1993.
      </p>
    </SiteLayout>
  );
}
