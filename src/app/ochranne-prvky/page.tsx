import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Ochranné prvky",
  description:
    "Ochranné prvky Machins: eliptická perforácia, oválne výrezy, textové kódovanie, barcode a falzifikáty.",
  alternates: {
    canonical: "https://www.filatelia-machins.sk/ochranne-prvky.html",
  },
};

export default function OchrannePrvkyPage() {
  return (
    <SiteLayout>
      <h1>Ochranné prvky</h1>
      <p>
        V snahe zabrániť množiacim sa pokusom o falšovanie poštových známok boli
        postupne aj pri produkcii Machins zavádzané rôzne ochranné prvky (
        <strong>security features</strong>). Základné sú popísané nižšie:
      </p>

      <h2>Eliptická perforácia</h2>
      <p>
        U Machins bola zavedená eliptická forma perforácie 6. apríla 1993. Jedna
        alebo viac dier majú namiesto kruhového tvaru formu elipsy. Machins s
        týmto druhom perforácie sú označované aj ako Y-Machins, podľa
        katalógových čísel Stanley Gibbons, ktoré majú rozsah od Y1667 do Y1803.
      </p>

      <div className="max-w-2xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633033917/img/ellipt-perf_jpioiw.jpg"
          alt="Ukážka Y-Machins s eliptickou perforáciou"
          caption="Ukážka Y-Machins s eliptickou perforáciou"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Ukážka Y-Machins s eliptickou perforáciou</p>
      </div>

      <div className="callout callout-warning">
        <p>
          <strong>Poznámka:</strong> Štandardne sa elipsy nachádzajú v spodnej časti vertikálnych strán, ale
          existuje vydanie, kde sú omylom vytvorené v hornej časti — konkrétne ide
          o Prestige booklet <em>Merchant Navy</em> z roku 2013:
        </p>
      </div>

      <div className="max-w-2xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633036076/img/island-nation_bfyurw.jpg"
          alt="Merchant Navy, eliptická perforácia hore"
          caption="Merchant Navy, eliptická perforácia hore"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Booklet Merchant Navy, eliptická perforácia hore
        </p>
      </div>

      <p>
        Elipsy sa môžu okrem pozície odlišovať aj dĺžkou a tvarom. Rozlišujeme{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1633089405/img/elipsa-typy_qkoxzs.jpg">
          dva základné typy
        </ModalLink>
        , <strong>eR</strong> a <strong>eS</strong>, kde eR má zaoblené
        vertikálne strany (<strong>R</strong>ounded) a vyzerá užšie vo vrchnej a
        spodnej časti. Oproti tomu eS má skoro rovné strany (<strong>S</strong>
        traight) a vyzerá širšie vo vrchnej a spodnej časti. Tieto rozdiely je
        ľahšie identifikovať pri spojených známkach, teda pároch a blokoch.
      </p>

      <h2>Oválne výrezy</h2>
      <p>
        V angličtine <strong>Security cuts, Security slits</strong>. Ide o 4
        výrezy v tvare U, ktoré dokopy vytvárajú dva ovály. Boli zavedené od
        roku 2009 v snahe zabrániť opätovnému predaju a použitiu známok, ktoré
        po použití ostali bez pečiatky, prípadne bola slabo viditeľná. Tieto
        výrezy spôsobia znehodnotenie známok pri pokuse odlepiť ich z plochy,
        kde boli použité.
      </p>

      <div className="max-w-2xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633029660/img/ovalne_vyrezy_vlph5b.jpg"
          alt="Typy oválnych výrezov"
          caption="Typy oválnych výrezov"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Typy oválnych výrezov</p>
      </div>

      <p>
        Machins s týmto ochranným prvkom sú označované aj ako U-Machins, podľa
        katalógových čísel Stanley Gibbons, ktoré majú rozsah od U2911 do U3966,
        a tiež podľa tvaru výrezov. Ďalšie často používané označenie pre tieto
        známky je <strong>Security Machins</strong>.
      </p>

      <h2>Textové kódovanie</h2>
      <p>
        Pri modernizácii postupov tlače nastala možnosť pridať súvislý vlnový
        vzor s textom vyplnený perleťovým atramentom. Jednou z jeho vlastností
        je, že sa mení jeho viditeľnosť v závislosti od uhla náhľadu.
      </p>

      <h3>Kód podľa zdroja známky (od 02/2009)</h3>
      <p>
        Ako prvé bolo do textu zakomponované kódové označenie zdroja odkiaľ
        známka pochádza. Okrem ochrannej funkcie proti falšovaniu jeho hlavnou
        úlohou bola ľahká identifikácia zdroja v prípade technických problémov
        vydania, napríklad pri slabom alebo chýbajúcom signále fosforových
        pásikov.
      </p>
      <p>Textové kódy majú nasledovné významy:</p>
      <ul>
        <li>
          Bez špeciálneho kódu - text je MAIL a zdroj známok je priehradkový
          hárok.
        </li>
        <li>
          <strong>B</strong> - zdroj je <strong>B</strong>usiness Sheet. Kód má
          tvar MBIL alebo ROYBL.
        </li>
        <li>
          <strong>C</strong> - zdroj je <strong>C</strong>ustom Booklet. Kód má
          tvar MCIL.
        </li>
        <li>
          <strong>F</strong> - zdroj je booklet of <strong>F</strong>our stamps.
          Kód má tvar MFIL alebo FOYA.
        </li>
        <li>
          <strong>M</strong> - zdroj je <strong>M</strong>iniature sheet. Kód má
          tvar MMIL.
        </li>
        <li>
          <strong>P</strong> - zdroj je <strong>P</strong>restige booklet. Kód
          má tvar MPIL.
        </li>
        <li>
          <strong>R</strong> - zdroj je <strong>R</strong>oll of 10 000 stamps.
          Kód má tvar MRIL.
        </li>
        <li>
          <strong>S</strong> - zdroj je booklet of <strong>S</strong>ix stamps.
          Kód má tvar MSIL.
        </li>
        <li>
          <strong>T</strong> - zdroj je booklet of <strong>T</strong>welve
          stamps. Kód má tvar MTIL.
        </li>
      </ul>

      <div className="max-w-3xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633074144/img/kody-text_gdbkzh.jpg"
          alt="Ukážka textových kódov"
          caption="Ukážka textových kódov"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Image credit: Connoisseur Catalogue, Connoisseur Publications. Ukážka
          textových kódov.
        </p>
      </div>

      <p>
        U príležitostného vydania Diamond Jubilee majú kódy odlišný tvar:{" "}
        M<strong>B</strong>ND, IL<strong>B</strong>E, M<strong>C</strong>ND,
        IL<strong>F</strong>E, M<strong>M</strong>ND, M<strong>P</strong>ND,
        M<strong>S</strong>ND a M<strong>T</strong>ND. Sú odvodené od slov
        diaMOND a jubILEE.
      </p>

      <h3>Kód podľa roku vydania (od 01/2010)</h3>
      <p>
        K vyššie uvedeným textovým kódom označujúcim pôvod známky sú od januára
        2010 pridané aj kódové označenia pre rok vydania. Oficiálne mali byť
        posledné dve písmená slova MAIL nahradené rokom, čiže výsledný kód pre
        rok 2012 má byť MA12, ale tlačiarenské firmy nedodržiavajú dôsledne toto
        pravidlo a vyskytujú sa aj kódy s číslom v strede, ako napríklad M11L,
        M12L a M13L.
      </p>
      <p>
        Pri výročnom vydaní 65th Anniversary (£5 Sapphire Blue) je text
        ACCESSION upravený na{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1633198438/img/accession_xg5cnc.jpg">
          ACCE<strong>17</strong>ION
        </ModalLink>
        .
      </p>

      <h2>Barcode (03/2021)</h2>
      <div className="callout callout-info">
        <p>
          Skúšobné vydanie Business hárku s 50 známkami pre 2.triedu má nový
          bezpečnostný prvok - QR kód. Nové známky používajú datamatrix
          technológiu, čo v praxi znamená, že každá známka bude mať{" "}
          <strong>unikátny kód</strong>. Tento bude naskenovaný pri použití a
          známka bude v systéme evidovaná ako použitá, hoci fyzicky bude
          neopečiatkovaná. Každý ďalší pokus o použitie takejto známky bude
          systémom zamietnutý.
        </p>
      </div>

      <div className="max-w-sm mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633197684/img/2nd-barcode_pwfktt.jpg"
          alt="2.trieda s QR kódom"
          caption="2.trieda s QR kódom (2021)"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">2.trieda s QR kódom (2021)</p>
      </div>

      <p>
        Známka má{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1633198172/img/barcode-size_puas0b.jpg">
          väčší rozmer
        </ModalLink>{" "}
        ako doteraz štandardne používané a perforácia na pravej strane je len
        simulovaná.
      </p>

      <h2>Hong Kong</h2>
      <p>
        Ochranným prvkom použitým pre Machins Hong Kongu sa venujem{" "}
        <a href="/hongkong#security">v sekcii</a> zameranej na toto bývalé
        zámorské územie. Zaujímavosťou je použitie vodoznaku, ktorý u britských
        vydaní chýba.
      </p>

      <h2>Falzifikáty</h2>
      <p>
        Tak ako u iných cenín, aj u Machins boli zachytené v obehu podvrhy.
        Chýbajú im ochranné prvky, majú iný typ papiera, zúbkovania či odlišný
        farebný odtieň v porovnaní s oficiálnym poštovým vydaním. Známy je
        napríklad výskyt falzifikátov <strong>24p</strong> (vtedajšia tarifa pre
        1.triedu) vo farbe <em>rust</em> z roku 1993:
      </p>

      <div className="max-w-2xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633201237/img/24p-forgery_rujh9z.jpg"
          alt="24p falzifikát"
          caption="24p falzifikát"
          className="max-w-full h-auto rounded"
        />
      </div>

      <p>
        Opakovane boli falšované aj vydania pre 1. a 2. triedu, či ostatné
        predplatené služby. Ukážka s porovnaním falzifikátu a originálu pre{" "}
        <strong>Royal Mail Signed For (Large)</strong>: horná známka je podvrh,
        s odlišným štýlom zvlneného textu, bez reakcie pod UV svetlom, bez
        fosforových pásikov, na viditeľne odlišnom podkladovom papieri, s
        rozdielnou hrúbkou fontu atď. Spodná známka je platné poštové vydanie.
      </p>

      <div className="max-w-sm mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633090556/img/fake2_o8itti.jpg"
          alt="RMSF Podvrh vs originál"
          caption="RMSF: Podvrh (hore) vs originál (dolu)"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Royal Mail Signed For: Podvrh (hore) vs originál (dolu)
        </p>
      </div>
    </SiteLayout>
  );
}
