import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Užitočné zdroje a pomôcky",
  description:
    "Zdroje a pomôcky pre zberateľov Machins: kde kúpiť, katalógy, webové stránky a publikácie.",
  alternates: {
    canonical: "https://www.filatelia-machins.sk/zdroje.html",
  },
};

export default function ZdrojePage() {
  return (
    <SiteLayout>
      <h1>Užitočné zdroje a pomôcky</h1>
      <p>
        Kde získať podrobnejšie informácie o Machins? Kde môžem nájsť ďalšie
        kusy do svojej zbierky? Čo znamenajú jednotlivé skratky a katalógové
        čísla? Odpovede na tieto či ďalšie otázky týkajúce sa Machins môže
        zberateľ získať z mnohých zdrojov, či už webových stránok alebo
        publikácií. Nižšie uvádzam tie, ktoré pomohli mne.
      </p>

      <h2>Kde kúpiť</h2>
      <p>
        Dobrým zdrojom na vytvorenie či doplnenie zbierky Machins za priaznivé
        ceny sú pre zberateľov hlavne aukčné portály ako napríklad{" "}
        <a
          href="http://www.ebay.co.uk/sch/Machin-Definitives-/70090/i.html?_catref=1"
          title="eBay Machins (UK verzia)"
          target="_blank"
          rel="noopener noreferrer"
        >
          eBay
        </a>{" "}
        (UK verzia),{" "}
        <a
          href="https://www.delcampe.net/en_GB/collectables/stamps/great-britain-1952-elizabeth-ii/machins/"
          title="Delcampe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Delcampe
        </a>
        , a tiež stránky britských špecializovaných dealerov, ako napríklad{" "}
        <a
          href="http://hampsteadcastle.co.uk/"
          title="Hampstead Castle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hampstead Castle
        </a>
        . Zberateľ tu nájde pečiatkované i čisté, bežné i raritné kusy. Potom
        už záleží len na ňom, akým spôsobom chce formovať zbierku a akým tempom
        ju kompletizovať, v závislosti od svojich predstáv a finančných
        možností.
      </p>

      <h2>Čo študovať</h2>
      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Množstvo užitočných informácií je k dispozícii na výbornej stránke{" "}
          <a
            href="http://www.adminware.ca/machin.htm"
            title="Adminware Machins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adminware Machins
          </a>{" "}
          kanadského zberateľa R.Harrisa (&ldquo;Machin Nut&rdquo;), kde sú veľmi
          dobre popísané a vysvetlené jednotlivé parametre, aj s názornými
          ukážkami. <strong>Pre začínajúceho zberateľa</strong> ju preto
          odporúčam ako <strong>hlavný zdroj</strong> na štúdium tejto známkovej
          oblasti. Jednoduché vyhľadávanie podľa rokov vydania či nominálnej
          hodnoty uľahčuje orientáciu v doteraz vydaných Machins. Na stránke je
          popísaných okolo 2600 typov a môžete si tu stiahnuť aj{" "}
          <a
            href="http://www.adminware.ca/machin/m_album.htm"
            title="Adminware albumové listy"
            target="_blank"
            rel="noopener noreferrer"
          >
            albumové listy
          </a>{" "}
          vo formáte pdf, ktoré dobre poslúžia ako základná predloha pre
          vytvorenie zbierky.
        </p>
      </div>
      <p>
        Pre zberateľov, ktorí sa chcú tejto oblasti venovať skutočne{" "}
        <strong>do hĺbky a pokryť čo najviac odlišných typov</strong>, bude
        najlepšou pomôckou{" "}
        <a
          href="http://www.deegam.com/"
          title="Deegam Machin Handbook - web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deegam Machin Handbook
        </a>{" "}
        vydávaná a aktualizovaná ľuďmi okolo Douglasa Myalla. Táto kvalitná
        publikácia, nazývaná aj <strong>The Machin Encyclopaedia</strong>, je
        dostupná na CD vo formáte pdf. Nájdete tu viac ako 15 000 (!) podrobne
        spracovaných profilov, ktoré zohľadňujú jednotlivé kombinácie
        existujúcich parametrov skutočne do najmenších detailov. Ako je v
        Handbooku spracovaný napríklad nominál 5p, si možete pozrieť v{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/Deegam-ukazka_ugz8hd.png">
          ukážke #1
        </ModalLink>{" "}
        a{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482213/img/Deegam-ukazka2_b920yh.png">
          ukážke #2
        </ModalLink>
        . Momentálne (k 07/2021) je aktuálne 5. vydanie tohto Handbooku s
        označením HB5.
      </p>

      <h2>Katalógy</h2>
      <p>
        <strong>Connoisseur Catalogue</strong>. Dostupný{" "}
        <a
          href="http://www.connoisseurcatalogue.net/catalogue.htm"
          title="Connoisseur katalóg"
          target="_blank"
          rel="noopener noreferrer"
        >
          online
        </a>{" "}
        a zadarmo, jednotlivé kapitoly je možné stiahnuť vo formáte pdf.
        Bohužiaľ, zatiaľ je dokončená len prvá časť - Single stamps - s 26
        kapitolami.
      </p>
      <p>
        <strong>
          The Complete Machin Stamp Catalogue: A Specialised Guide 1967-2021 GB
        </strong>
        . Špecializovaný katalóg, ktorého autorom je G.J.Burgess. Autor a
        predajca v jednej osobe nemá samostatný web, katalóg predáva na eBay
        pod užívateľským menom{" "}
        <a
          href="https://www.ebay.co.uk/usr/burgess-family"
          title="Burgess Machins katalóg"
          target="_blank"
          rel="noopener noreferrer"
        >
          burgess-family
        </a>{" "}
        a je dostupný v tlačenej i elektronickej forme (kvôli pravidlám eBay
        zasielaný na USB). Momentálne je v predaji druhé, doplnené vydanie
        (2021).
      </p>
      <p>
        <strong>2021 Great Britain Concise Stamp Catalogue</strong>. Katalóg od
        firmy{" "}
        <a
          href="https://www.stanleygibbons.com/products/2021-great-britain-concise-stamp-catalogue"
          title="Stanley Gibbons katalóg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stanley Gibbons
        </a>{" "}
        nie je síce špecializovaný výlučne na Machins, ale tie sú spracované v
        samostatnej sekcii a úplne aktualizované. Mnoho predajcov i zberateľov
        používa katalógové čísla SG ako referenčné.
      </p>
    </SiteLayout>
  );
}
