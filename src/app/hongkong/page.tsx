import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Machins pre zámorské územie Hong Kong",
  description: "Poštové známky s dizajnom Arnolda Machina vydávané pre zámorské územie Hong Kong v rokoch 1992 až 1997. Prehľad a zaujímavosti.",
  alternates: { canonical: "https://www.filatelia-machins.sk/hongkong.html" },
};

export default function HongkongPage() {
  return (
    <SiteLayout>
      <h1>Hong Kong</h1>
      <p>
        Definitívne známky Hong Kongu s dizajnom busty od Arnolda Machina boli vydávané v rokoch 1992-1996, booklety aj v roku 1997. Busta
        bola doplnená na pozadí nápisom Hong Kong v čínskych znakoch písaných ručným kaligrafickým písmom. Celkový dizajn je prácou I.
        Leunga. Známky boli dostupné vo forme hárkov, roliek, bookletov a hárčekov. Väčšina bola tlačená firmou Enschede, ale časť tlačila
        aj austrálska firma Leigh-Mardon z Melbourne. Použité boli dve techniky tlače - photogravírovanie a litografia.
      </p>
      <h2>Vyššie/nižšie nominály a ich formát</h2>
      <p>
        Známky do nominálnej hodnoty 5 dolárov majú klasický malý <strong>formát</strong>, aký sa používa aj pre britské definitívne
        Machins. Nominály 10 dolárov a viac majú väčší rozmer, podobný ako britské pre-decimálne (recess) vysoké nominály. Tri z nich (na
        nasledujúcom obrázku prvé tri) vyšli ako definitívne známky, ďalších jedenásť bolo súčasťou hárčekov. Teda celkovo ich je vo veľkom
        formáte 14.
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-velke_x99je8.jpg"
        alt="Hong Kong, veľký formát"
        className="max-w-full h-auto rounded my-2"
      />
      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-velke1_fl3kfj.jpg"
        alt="Hong Kong, veľký formát"
        caption="Kompletná sada vyšších nominálov (10$ a viac) vo väčšom formáte"
        className="max-w-full h-auto rounded my-2"
      />

      <p>
        <strong>Hárčeky (sheetlet)</strong> s vyššími nominálmi obsahovali vždy len jednu $10 známku a nájdeme ich pod nasledujúcimi
        označeniami: <em>Definitives</em> (No.5,6,7,9,10), <em>Classics</em> (No.2,6), <em>Exhibition</em> (No.1,2,3) a <em>Olympics</em>.
      </p>
      <p>
        Hárček s označením <em>Definitives No.8</em> obsahuje tiež len jednu známku, ale $5 a už v malom formáte. Hárčeky
        <em>Classics No.3,4,5,7,8,9</em> boli súčasťou <strong>bookletov</strong> a obsahujú bloky šiestich známok tiež v malom formáte.
        Ukážka niekoľkých z nich:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div>
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-booklet-01_m5phyl.jpg"
            alt="Hong Kong Classics #3"
            caption="6-blok z bookletu Classics No.3"
            className="max-w-full h-auto rounded my-2"
          />
        </div>
        <div>
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-booklet-03_tsfcf5.jpg"
            alt="Hong Kong Classics #4"
            caption="6-blok z bookletu Classics No.4"
            className="max-w-full h-auto rounded my-2"
          />
        </div>
        <div>
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-booklet-02_hrddbz.jpg"
            alt="Hong Kong Classics #5"
            caption="6-blok z bookletu Classics No.5"
            className="max-w-full h-auto rounded my-2"
          />
        </div>
      </div>

      <h2>Zberateľské zaujímavosti</h2>
      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Pre zberateľov sú veľmi zaujímavé{" "}
          <strong>bloky s farebnými tlačiarenskými značkami</strong> a číslami cylindrov. Značky (tzv.{" "}
          <em>traffic lights</em>) sú, narozdiel od okrúhlych britských, <strong>štvorcové</strong>. Dve pre
          farby pozadia, jedna pre farbu hlavy. Často sa jedná o 4-bloky, ale v ponuke nájdeme aj väčšie, až
          20-bloky.
        </p>
      </div>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/block-colors-hk-long_qgc6g9.jpg"
        alt="Hong Kong, 20-blok s farebnými tlačiarenskými značkami"
        caption="Hong Kong, 20-blok s farebnými tlačiarenskými značkami"
        className="max-w-full h-auto rounded my-2"
      />

      <h2 id="security">Parametre a ochranné prvky</h2>
      <p>
        Aj pre Hong Kong je možné budovať zbierku podľa rôznych parametrov: základnú podľa nominálov, alebo širšiu podľa typu tlače,
        tlačiarne, zúbkovania, zdroja, (ne)prítomnosti ochranných prvkov.
      </p>
      <p>
        K ochranným prvkom môžeme zaradiť okrem fosforových pásikov či{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/crown-CA_xotqtd.jpg">
          vodoznaku
        </ModalLink>{" "}
        (Crown CA) aj{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/rolka-cislo_tetm5b.jpg">
          kontrolné číslo
        </ModalLink>{" "}
        na zadnej strane každej piatej známky v rolke, či špecálnu perforáciu. Nejde o typickú eliptickú, ktorá bola použitá u britských
        Machins, ale o zväčšené rohové dierovanie, ktoré je dobre viditeľné na hárčekoch:
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-sheetlet_jrivht.jpg"
        alt="Hong Kong, zväčšená rohová perforácia"
        caption="Zväčšená rohová perforácia, hárček (sheetlet) Exhibition No.2"
        className="max-w-full h-auto rounded my-2"
      />

      <h2>Posledné vydanie</h2>
      <div className="callout callout-info">
        <p>
          K dostupným filatelistickým materiálom patria klasicky aj obálky prvého dňa vydania (FDC). Zaujímavosťou
          je ale obálka <strong>posledného dňa vydania</strong> z 25. januára 1997. Známky Hong Kongu ako
          britského územia stratili platnosť 1. júla 1997, kedy prešlo územie pod čínsku správu.
        </p>
      </div>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/hk-ldc_yhfnqx.jpg"
        alt="Hong Kong, Obálka POSLEDNÉHO dňa vydania (1997)"
        caption="Obálka POSLEDNÉHO dňa vydania (1997)"
        className="max-w-full h-auto rounded my-2"
      />
    </SiteLayout>
  );
}
