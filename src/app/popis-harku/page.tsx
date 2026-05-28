import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Informácie na nových hárkoch",
  description:
    "Popis nových hárkov Machins od roku 2009 - cylinder čísla, colour tabs, dátum tlače a ďalšie informácie na okrajoch hárkov.",
  alternates: {
    canonical: "https://www.filatelia-machins.sk/popis-harku.html",
  },
};

export default function PopisHarkuPage() {
  return (
    <SiteLayout>
      <h1>Informácie na nových hárkoch</h1>
      <p>
        Od roku <strong>2009</strong> nájdeme na okrajoch nového typu hárku
        celkovo až <strong>8 doplňujúcich informácií</strong> - číslo cylindra
        (napr. W1), pozičnú mriežku, meno použitej farby (napr. Holly Green),
        dátum tlače (napr. 10/03/20), typ použitého papiera (napr. MIX Paper),
        čiarový kód, nominálnu hodnotu známok (napr. P382) a certifikáciu. Hárok
        celkovo obsahuje 25 známok, v piatich radoch po päť.
      </p>
      <p>
        Keďže každá z týchto doplňujúcich informácií sa nachádza len pri jednej
        známke z celého 25 kusového hárku, jednotlivo sa tieto známky s
        popisnými okrajmi predávajú drahšie ako rovnaké známky bez okraja, v
        závislosti aj od aktuálnej dostupnosti a roku vydania. V ponuke sú
        dostupné aj bloky, pásiky a páry s kombináciami viacerých tabov, napr.
        cylinder + pozičná mriežka (horizontálny 4-blok až 10-blok), alebo celá
        ľavá strana (vertikálne, pásik 5-tich alebo 10-blok).
      </p>

      <div className="max-w-2xl mx-auto my-6">
        <img
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482216/img/holly-green-sheet-25_wni42o.jpg"
          alt="Kompletný hárok 25"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Kompletný hárok 25 známok s doplňujúcimi informáciami na okrajoch
        </p>
      </div>

      <h2 id="colours">Colour Tabs</h2>
      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Medzi zberateľmi sú už tradične obľúbené krajné známky v spojení s
          číslom cylindra, pozičnou mriežkou, dátumom tlače a najnovšie aj s názvom farby —{" "}
          <strong>Colour Tab</strong>. Niektorým stačí z každej farby jedno vydanie z ľubovoľného roku, iní
          zbierajú kompletné sady po jednotlivých rokoch (počínajúc od 2009), takže napríklad z 20p{" "}
          <em>Light Green</em> majú v zbierke 10 rôznych kusov (vydaná v 2011, 2012, 2014-2021 každý rok).
        </p>
      </div>

      <div className="max-w-xs mx-auto my-6">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/colour-tab-green-light-2_leap4b.jpg"
          alt="Colour Tab Light Green 20p"
          caption="Colour Tab Light Green 20p"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Light Green 2018 Colour Tab (M18L+MAIL)</p>
      </div>

      <p>
        Zaujímavý je rozsah použitých farieb a ich názvy. Napríklad v rámci
        zelenej farby nájdeme veľké množstvo odtieňov: Dark Green, Light Green,
        Sea Green, Gooseberry Green, Lime Green, Holly Green, Emerald Green,
        Dark Pine Green, Tarragon Green, Spruce Green, Aqua Green.
      </p>
      <p>
        Od roku 2009 bolo vydaných viac ako 70 rôznych nominálov, pri ktorých
        môžeme nájsť Colour Tab. Niektoré farby sa opakujú viackrát, či už pri
        inom nominále alebo rôznom roku vydania. Pri vyzbieraní všetkých
        dostupných kombinácií farba/rok sa dostaneme na vyše 200 známok (počty
        platné k 2021). Pripravil som{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632402499/img/colour-tabs-zoznam_t4llhl.png">
          prehľadný zoznam
        </ModalLink>{" "}
        jednotlivých nominálov s názvami farieb a rokmi vydania, ktorý môže
        slúžiť ako pomôcka.
      </p>
      <p>
        Na záver ešte{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/strips-with-colors_f48uaq.jpg">
          ukážka
        </ModalLink>{" "}
        pre porovnanie, ako vyzeralo označovanie použitej farby na okraji
        predošlých typov hárku. Zobrazené sú časti hárkov produkovaných v
        rokoch 2005 a 2007 tlačiarňou De La Rue.
      </p>
    </SiteLayout>
  );
}
