import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Slovenský sprievodca svetom Machins | Filatelia Machins SK",
  description:
    "Slovenský sprievodca svetom britských definitívnych známok Machins. História, parametre, typy, raritné kusy a ďalšie informácie.",
  alternates: { canonical: "https://www.filatelia-machins.sk/" },
  openGraph: {
    url: "https://www.filatelia-machins.sk/",
    title: "Slovenský sprievodca svetom Machins",
    description:
      "Slovenský sprievodca svetom britských definitívnych známok Machins.",
    images: [
      {
        url: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482216/img/01_exhibition_tv1ii0.jpg",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <SiteLayout>
      <h1>Slovenský sprievodca svetom MACHINS</h1>
      <p>
        Najviac reprodukované umelecké dielo v histórii, aj takto by sa dala
        charakterizovať podobizeň kráľovnej Alžbety II., navrhnutá a vytvorená
        britským sochárom <strong>Arnoldom Machinom O.B.E., R.A.</strong>
      </p>

      <h2>Začiatky ikonickej série</h2>
      <p>
        Potom, čo sa Machin stal členom Kráľovskej akadémie <em>(R.A.)</em>,
        bol spolu s ďalšími umelcami požiadaný, aby predložili návrhy na novú
        mincu pripravovaného desiatkového systému. Jeho návrh komisiu zaujal
        najviac a ním pripravený portrét kráľovnej bol zobrazený na minciach v
        rokoch 1968 až 1984. Za prácu na dizajne mincí získal ocenenie Rád
        britského impéria <em>(O.B.E.)</em>. Vďaka kvalite jeho práce a úspechu
        pri vytváraní predlohy pre razenie mincí bol Machin oslovený, aby
        pripravil aj návrhy nových definitívnych známok.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <img
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/amachin_vwicxb.jpg"
          alt="Arnold Machin"
          className="max-w-full h-auto rounded"
        />
        <img
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631568094/img/diadem-dressed-head-machin_bkbdnd.png"
          alt="Machin diadém"
          className="max-w-full h-auto rounded"
        />
      </div>
      <p className="img-caption">Arnold Machin a jeho víťazný návrh</p>

      <p>
        Bol jedným z piatich výtvarníkov, ktorí boli pozvaní do tejto súťaže.
        Poradný výbor pre známky <em>(Stamp Advisory Committee)</em> vyhodnotil
        jeho dizajn ako najlepší a odporučil ho Poštovému úradu. Víťazný
        Machinov návrh následne v roku 1966 schválila aj samotná kráľovná a
        umožnila tým vznik série definitívnych známok, označovaných ako Machins
        (angl. výslovnosť: &ldquo;may-chins&rdquo;).
      </p>
      <div className="callout callout-info">
        <p>
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482211/img/4d-olive-sepia_n6rfha.jpg">
            Prvá vydaná známka
          </ModalLink>{" "}
          mala farbu <strong>olive sepia</strong>, nominálnu hodnotu{" "}
          <strong>4d</strong> (4 pence v starej mene) a do obehu sa dostala{" "}
          <strong>5. júna 1967</strong>. O tlač sa postarala firma Harrison and
          Sons.
        </p>
      </div>

      <h2>Súčasnosť a pokusy o zmenu</h2>
      <p>
        V súčasnosti sú Machins{" "}
        <strong>
          najväčšou a zároveň najdlhšie vydávanou sériou definitívnych známok
        </strong>{" "}
        na svete. Aj v roku 2021 pribudli do zoznamu ďalšie nominály. Celkovo
        bolo vytlačených už viac ako 300 miliárd známok{" "}
        <em>(Zdroj: The Westminster Collection - The Official Blog)</em> vo viac
        ako 130 farbách a ich počet ďalej rastie. Počas desaťročí sa tak z
        Machins stala komplexná oblasť poskytujúca bohatý filatelistický
        materiál.
      </p>
      <p>
        V 80-tych rokoch 20. storočia bolo niekoľko pokusov nahradiť používaný
        dizajn novým (Matthews, Whidborne), ale bez úspechu. Posledný návrh na
        zmenu dizajnu prišiel pri príležitosti 150. výročia Penny Black v roku
        1990. Kráľovná všetky predložené návrhy zamietla a po poslednom bolo
        rozhodnuté, že zobrazenie panovníka na definitívnych známkach sa nebude
        meniť až do vymenovania jej nástupcu.
      </p>

      <div className="max-w-2xl mx-auto my-6">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/vyvoj_ipdvzl.jpg"
          alt="Machins 1967-2017"
          caption="Machins 1967-2017"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Image credit: BFDC, bfdc.co.uk</p>
      </div>

      <h2>Slovenský sprievodca</h2>
      <p>
        Je pochopiteľné, že drvivá väčšina stránok a dostupných materiálov
        zaoberajúcich sa Machins je v anglickom jazyku, keďže sa jedná o oblasť
        britskej filatelie. Cieľom týchto stránok je preto poskytnúť dostatok
        informácií aj slovenskému zberateľovi a byť základnou orientačnou
        pomôckou či sprievodcom vo svete Machins.
      </p>
      <p>
        Od vytvorenia dizajnu, cez základné delenie podľa meny a regiónov,
        príležitostné vydania, tlačiarenské firmy, bezpečnostné prvky, prehľad
        parametrov (fosfor, typ papiera, typ tlače, zdroj), rarity a chybotlače,
        obálky prvého dňa vydania, bloky a hárčeky, až po odkazy na užitočné
        zdroje pre doplnenie zbierky a získavanie ďaších informácií, to všetko
        na jednom mieste.
      </p>
      <div className="callout callout-warning">
        <p>
          <strong>Poznámka:</strong> Tento web neslúži ako eshop na predaj
          známok a neplní ani funkciu špecializovaných katalógov s cenami.
        </p>
      </div>
    </SiteLayout>
  );
}
