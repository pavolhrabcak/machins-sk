import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Príležitostné vydania. Anniversary Machins. Double heads a ďalšie.",
  description:
    "Príležitostné vydania Machins. Anniversary, Double heads, Long to Reign Over Us, zlatá fólia a ďalšie.",
  alternates: {
    canonical: "https://www.filatelia-machins.sk/prilezitostne.html",
  },
  openGraph: {
    url: "https://www.filatelia-machins.sk/prilezitostne.html",
    type: "website",
    title: "Príležitostné vydania Machins",
    description:
      "Príležitostné vydania Machins. Anniversary, Double heads, Long to Reign Over Us, zlatá fólia a ďalšie.",
    images: [
      {
        url: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482216/img/01_exhibition_tv1ii0.jpg",
      },
    ],
  },
};

export default function RilezitostnePage() {
  return (
    <SiteLayout>
      <h1>Príležitostné vydania</h1>
      <p>
        Britská pošta vydáva okrem definitívnych známok aj známky pamätné (<em>commemoratives</em>). Pri rôznych príležitostiach boli vydané aj
        výročné Machins, či už samostatne alebo ako súčasť hárčekov a bookletov.
      </p>
      <h2>Penny Black Anniversary (1990, 2000)</h2>
      <p>
        Séria 5 známok pripomínajúcich 150. výročie vydania Penny Black, bola vydaná v roku 1990. Je známa tiež pod označením <em>Double Heads</em>.
        Machinov portrét Alžbety II. prekrýva portrét kráľovnej Viktórie. Vzhľadom na to, že ide o neveľký počet nominálov, existuje pomerne
        veľké množstvo odlišných typov. Jedným z dôvodov je aj to, že na tlači sa podieľali až štyri tlačiarenské firmy: Harrison, Walsall, Questa a Cartor. Ďalšie odlišnosti vznikli z dôvodu existencie známok s perforovanými aj neperforovanými stranami.
      </p>
      <p>
        V roku 2000 bola séria doplnená známkou v rovnakom dizajne aj pre prvú triedu, a to pri príležitosti 160. výročia vydania Penny Black, v
        čiernej farbe.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632250956/img/anniversary_1990_uskllo.jpg"
        alt="Penny Black Anniversary"
        caption="Image credit: Robin Harris, Adminware. Penny Black Anniversary"
        className="max-w-full h-auto rounded my-2"
      />

      <h2>Millennium (2000)</h2>
      <div className="callout callout-warning">
        <p>
          <strong>Poznámka:</strong> Špeciálne vydanie známky pre 1.triedu, tzv.{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632255980/img/Millennium_ouofxd.jpg">Millennium</ModalLink>,
          bolo vydané 6. januára 2000, pri príležitosti nového tisícročia (teda o rok v predstihu, keďže nové
          milénium začalo až 1.1.2001). Známka je špecifická tým, že hlava má väčší rozmer ako u definitívnych
          vydaní a tiež chýba orámovanie resp. vzdialenosť od okraja. Dočasne nahradila štandardnú známku pre
          prvú triedu vo farbe <em>flame</em> a bola stiahnutá na konci roka.
        </p>
      </div>

      <h2>Stamp Show (2000)</h2>
      <p>
        Pri príležitosti filatelistickej výstavy v Londýne bol vydaný tzv. <em>Exhibition souvenir</em>, hárček, na ktorom je 8 známok Machins doplnených farebnou paletou Jeffreyho Matthewsa.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1632253471/img/stamp-show-2000_bwezof.jpg"
        alt="Stamp show"
        caption='Hárček "Matthews Palette" zo Stamp Show (2000)'
        className="max-w-full h-auto rounded my-2"
      />

      <h2>The Machin Definitives 40th Anniversary (2007)</h2>
      <p>
        Pri 40. výročí vydávania definitívnych známok s dizajnom Arnolda Machina bol vydaný Hárček s dvoma známkami pre prvú triedu a dvoma Machins v nominálnej hodnote jednej libry. Dizajn zobrazuje portrét Arnolda Machina a prvú známku celej série v hodnote 4d.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632298205/img/arnold-machin_q48ey7.jpg"
        alt="40th Anniversary"
        caption="Hárček The Machin Definitives 40th Anniversary (2007)"
        className="max-w-full h-auto rounded my-2"
      />

      <h2>Festival of Stamps, London (2010)</h2>
      <p>
        Každých 10 rokov sa koná v Londýne medzinárodná filatelistická výstava a pri tejto priležitosti bol v roku 2010 vydaný ďalší hárček, tentokrát s 11 známkami Machins, doplnený kupónom s logom výstavy.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632318331/img/ehxhib_souvenir_f0rekf.jpg"
        alt="Festival of Stamps"
        caption="Hárček z Festival of Stamps, London (2010)"
        className="max-w-full h-auto rounded my-2"
      />

      <h2>Arnold Machin Birth Centenary (2011)</h2>
      <p>
        Pri príležitosti 100-ho výročia narodenia Arnolda Machina bol vydaný hárček s desiatimi známkami prvej triedy vo farbe gold. Známky v hárčeku majú jedinečné textové kódy, pre rok vydania AM11 (namiesto klasického MA11) a pre zdroj MMIL. Tlač Walsall.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633633290/img/Machin-miniharcek_vohbo1.jpg"
        alt="Arnold Machin Birth Centenary"
        caption="Hárček: Sté výročie narodenia Arnolda Machina (2011)"
        className="max-w-full h-auto rounded my-2"
      />

      <h2>Diamond Jubilee (2012)</h2>
      <p>
        Ďalšie výročné vydanie známky pre 1.triedu vyšlo v roku 2012, pri príležitosti <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632255446/img/diamond_rndxi0.jpg">diamantového jubilea</ModalLink> vládnutia Alžbety II. Známka sa používala do 30. júna 2013 a následne bola nahradená štandardnou známkou pre prvú triedu v červenej farbe <em>Royal Mail red</em>. Bola k dispozícii samostatne, aj ako súčasť hárčeka.
      </p>

      <h2>Long to Reign Over Us (2015)</h2>
      <p>
        V septembri 2015, k 90-tym narodeninám kráľovnej a súčasne z dôvodu, že sa Alžbeta II. stala najdlhšie vládnucim britským monarchom, bol vydaný prezentačný balíček obsahujúci hárček s 5 známkami, na ktorých dominuje ikonický Machinov dizajn. Súčasťou je aj definitívna známka pre prvú triedu vo farbe <em>Amethyst purple</em>, ktorá na 12 mesiacov nahradila dovtedy používanú, červenú.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482213/img/90th_mini_dscwmh.jpg"
        alt="Long to Reign Over Us"
        caption="Hárček Long to Reign Over Us (2015)"
        className="max-w-full h-auto rounded my-2"
      />

      <h2>Golden Anniversary (2017)</h2>
      <p>
        Rok 2017 bol bohatý na výročné vydania. Na počesť 50-teho výročia používania dizajnu od Arnolda Machina na poštových známkach vyšli hárčeky aj prestige booklet:
      </p>
      <ul>
        <li><strong>The Machin Definitive 50 Years of a Design Icon Miniature Sheet.</strong> Hárček so 7 známkami, pričom každá symbolizuje dôležitý míľnik (decimalizácia, výročie Penny Black, prvá samolepiaca známka atď). Posledná je £1 potiahnutá fóliou z 22-karátového zlata.</li>
        <li><strong>The Golden Anniversary Celebration Miniature Sheet.</strong> Hárček so 6 známkami pre prvú triedu, mapujúci postupný vývoj dizajnu použitej busty.</li>
        <li><strong>The Machin Definitive 50th Anniversary Prestige Stamp Book.</strong> Prestige booklet s 5 hárčekmi.</li>
      </ul>
      <p>
        Viac detailov o týchto vydaných materiáloch si môžete pozrieť v <a href="https://ucarecdn.com/2dddd034-5850-4ca7-a35d-b1b4200c6c15/BFBapril2017.pdf" target="_blank" rel="noopener noreferrer">Britskom filatelistickom buletine</a> (originál, v anglickom jazyku) z apríla 2017.
      </p>

      <h2>65th Anniversary of the Accession (2017)</h2>
      <p>
        Pri 65. výročí nástupu kráľovnej Alžbety II. na trón bola vydaná 5 librová známka vo veľkom formáte vo farbe <em>Sapphire Blue</em>. Oficiálne je zaradená medzi definitívne známky, hoci jej nominálna hodnota nezodpovedala vtedajším platným tarifám pre poštové služby.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632299430/img/65th_nw6br1.png"
        alt="65th Anniversary"
        caption="65th Anniversary of the Accession (2017)"
        className="max-w-full h-auto rounded my-2"
      />

      <p>
        Pri vyššie spomínaných výročiach a výstavách boli vydávané aj ďalšie filatelistické materiály ako napríklad obálky prvého dňa vydania, príležitostné pečiatky, prezentačné balíčky, <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632309069/img/40-th-Smiler_hbydnz.jpg">smilers</ModalLink> (známkové hárky veľkosti A4 doplnené kupónmi s generickým dizajnom) a iné.
      </p>
    </SiteLayout>
  );
}
