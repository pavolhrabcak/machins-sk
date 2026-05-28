import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "NVI Machins - bez špecifikácie nominálnej hodnoty vo forme čísla",
  description:
    "Non-Value Indicators (NVI) Machins bez špecifikácie nominálnej hodnoty vo forme čísla, 1. a 2. trieda, poistené a doporučené zásielky, Special delivery.",
  alternates: { canonical: "https://www.filatelia-machins.sk/nvi.html" },
};

export default function NviPage() {
  return (
    <SiteLayout>
      <h1>NVI Machins</h1>
      <p>
        Od augusta 1989 začala Britská pošta vydávať aj Machins{" "}
        <strong>bez špecifikácie nominálnej hodnoty vo forme čísla</strong>, s tzv. Non-Value Indicators (NVI), a to
        z dôvodu dlhodobého rýchleho nárastu cien poštových služieb. Namiesto rýchlej dotlače nových nominálov po
        zvýšení poštovného, boli do obehu uvedené univerzálne známky s nasledovnými označeniami jednotlivých
        služieb: <strong>1<sup>st</sup></strong> pre prvú triedu, <strong>2<sup>nd</sup></strong> pre druhú triedu a{" "}
        <strong>E</strong> pre listy vrámci Európy.
      </p>
      <p>
        1<sup>st</sup> a 2<sup>nd</sup> boli vydané v rôznych veľkostiach a formátoch, s klasickým lepom, aj ako
        samolepky. Neskôr pribudli NVI machins aj pre leteckú poštu (airmal) s nasledujúcimi označeniami:{" "}
        <strong>Europe, Worldwide, Postcard</strong>; poistené a doporučené zásielky{" "}
        <strong>Recorded Signed For</strong>, <strong>Royal Mail Signed For</strong> a rýchle doručenie zásielok
        (najneskôr do 13:00 nasledujúceho dňa) <strong>Special Delivery</strong> do 100 a 500 gramov.
      </p>
      <div className="callout callout-info">
        <p>
          Vyššie spomínané vydania s predplatenými službami sa zvyknú označovať aj ako{" "}
          <strong>Service Inscribed</strong>.
        </p>
      </div>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632055001/img/NVI_kcb7oz.jpg"
        alt="NVI Machins"
        caption="NVI Machins"
        className="max-w-full h-auto rounded my-2"
      />
      <p className="img-caption">Image credit: Robin Harris, Adminware. NVI Machins.</p>

      <h2>Príležitostné NVI</h2>
      <p>
        Okrem štandardných vydaní nájdeme aj výročné vydania NVI, ako napríklad:
      </p>
      <ul>
        <li>
          <strong>Amethyst Purple</strong> z roku 2015, Long to Reign Over Us - najdlhšie vládnuci britský monarcha
        </li>
        <li>
          <strong>Diamond Blue</strong> z roku 2012 pri príležitosti diamantového výročia vlády kráľovnej Alžbety II.
        </li>
        <li>
          <strong>Millennium</strong> z roku 2000
        </li>
        <li>
          Čierna <strong>Anniversary</strong> z roku 2000 pri príležitosti 160-teho výročia vydania Penny Black
        </li>
      </ul>
      <p>
        Vrámci <em>Profile on Print</em> prestige bookletu (DX22) z roku 1999 boli vydané aj tri známky 1<sup>st</sup>{" "}
        vo{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631540542/img/DX22_tl9drq.jpg">
          veľkom formáte v troch rôznych technikách tlače
        </ModalLink>{" "}
        - v reliéfnej tlači (embossed), gravírovaním (engraved) a typografickou tlačou (typhographed).
      </p>

      <h2>Regionálne NVI</h2>
      <p>
        Pre <strong>regióny</strong> bola vydavateľská činnosť NVI veľmi malá. Existuje v podstate len 1 regionálna
        NVI známka, a to 1<sup>st</sup> vo farbe{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482214/img/regionals-flame_svxhxq.jpg">
          <em>flame</em>
        </ModalLink>{" "}
        pre Severné Írsko, Škótsko a Wales (február 2000). Isle of Man nemá svoje NVI vydanie.
      </p>
    </SiteLayout>
  );
}
