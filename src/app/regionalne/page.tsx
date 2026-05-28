import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Regionálne vydania Machins. Wales, Škótsko, Severné Írsko a Man.",
  description:
    "Regionálne vydania Machins s heraldickými symbolmi pre Wales, Škótsko, Severné Írsko a ostrov Man. Typy heraldických symbolov.",
  alternates: { canonical: "https://www.filatelia-machins.sk/regionalne.html" },
};

export default function RegionalnePage() {
  return (
    <SiteLayout>
      <h1>Regionálne vydania</h1>
      <p>
        Početnú skupinu tvoria regionálne Machins (angl. regionals/country definitives) s heraldickým symbolom
        umiestneným v ľavom hornom rohu. Pošta zmenila oficiálne pomenovanie týchto vydaní od januára 1974
        z počiatočného "regionals" na "country stamps" pre nevôľu časti verejnosti, ale medzi zberateľmi ostal
        zaužívaný termín regionals. Zaradzujeme sem <strong>Severné Írsko</strong> (Right Red Hand of Ulster),{" "}
        <strong>Škótsko</strong> (Lion of Scotland), <strong>Wales</strong> (Dragon of Wales) a ostrov{" "}
        <strong>Man</strong> (Three Legs of Man).
      </p>

      <h2>Vydavateľská činnosť</h2>
      <p>
        Najmenej známok bolo vydaných pre posledne menovaný Isle of Man, iba 4 nominály v júli 1971 (2½p, 3p, 5p,
        7½p). Pre ostatné regióny bola vydavateľská činnosť oveľa bohatšia - 60 a viac známok pre každú oblasť -
        a trvala skoro 3 desaťročia.
      </p>
      <div className="callout callout-warning">
        <p>
          <strong>Poznámka:</strong> Wales vydal 4 nominály (20, 26, 37, 63) až v dvoch verziách, v prvej klasickej
          s označením meny a v druhej bez označenia meny, teda len s číslom a{" "}
          <strong>chýbajúcim písmenom p</strong>. K vynechaniu došlo kvôli waleskému jazykovému zákonu. Penca sa
          vo waleštine povie <em>ceiniog</em>, ale "c" nakoniec nebolo použité, aby nedošlo k zámene pencí za
          centy ostatnými obyvateľmi Británie.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 my-4 max-w-xl mx-auto">
        <div className="text-center">
          <p className="text-sm mb-1">SEV. ÍRSKO</p>
          <img
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/ireland_jwuf6o.jpg"
            alt="Northern Ireland"
            width={100}
          />
        </div>
        <div className="text-center">
          <p className="text-sm mb-1">ŠKÓTSKO</p>
          <img
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/scotland_brlflb.jpg"
            alt="Scotland"
            width={100}
          />
        </div>
        <div className="text-center">
          <p className="text-sm mb-1">WALES</p>
          <img
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/wales_rykwom.jpg"
            alt="Wales"
            width={100}
          />
        </div>
        <div className="text-center">
          <p className="text-sm mb-1">MAN</p>
          <img
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/isleofman_w7akli.jpg"
            alt="Isle of Man"
            width={100}
          />
        </div>
      </div>
      <p className="img-caption">Image credit: Robin Harris, Adminware</p>

      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Hoci v mnohých prípadoch majú regionálne verzie v porovnaní s
          národnými vydaniami viditeľne odlišný odtieň, pomenovanie použitej <strong>farby</strong> z
          oficiálnych zdrojov je rovnaké. Pri vyhľadávaní v katalógoch a u predajcov je preto vhodné
          porovnávať odtiene priamo — dobrým príkladom sú rôzne odtiene modrosivej <em>(bluish grey)</em> u
          4½p:
        </p>
      </div>

      <div className="max-w-[506px] mx-auto my-2">
        <img
          className="w-full rounded"
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/reionals-shades_p5wjkd.jpg"
          alt="Regionálne farby a odtiene"
        />
        <p className="img-caption">Image credit: Myall Douglas, The Complete Deegam Machin Handbook</p>
      </div>

      <h2>Typy heraldických symbolov</h2>
      <p>
        Tak ako pri národných vydaniach, aj tu má zberateľ možnosť rozlišovať rôzne detaily a podľa nich budovať
        zbierku. Okrem klasických parametrov ako je farba, tlačiareň, typ tlače, fosforové pásiky či zúbkovanie,
        regionálne Machins sa odlišujú aj <strong>v type použitých heraldických symbolov</strong>. Škótsko, Wales
        aj Severné Írsko majú po dva základné typy. Pri pozornom skúmaní si môžeme všimnúť rozdiely vo vykreslení.
        Ako vidieť v názornej ukážke pre Škótsko - oko, jazyk, hriva, zadné nohy a chvost leva vyzerajú inak:
      </p>

      <div className="w-4/5 mx-auto my-2">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/symboly_owfrvt.jpg"
          alt="Regionálne symboly - rozdiely"
          caption="Regionálne symboly - rozdiely"
          className="w-full rounded"
        />
        <p className="img-caption">Image credit: Connoisseur Catalogue, Connoisseur Publications</p>
      </div>

      <p>
        Pre každý región s rozlíšenými typmi heraldických symbolov existuje niekoľko nominálov, ktoré sa vyskytujú
        s oboma dostupnými typmi. Farby uvádzam v angl. forme pre lepšie vyhľadávanie v katalógoch a u predajcov:
      </p>
      <div className="grid grid-cols-3 gap-4 my-4 items-start">
        <div>
          <h4 className="text-center">Škótsko</h4>
          <ul>
            <li>13p <em>(reddish brown)</em></li>
            <li>17p <em>(blue grey)</em></li>
            <li>22p <em>(moss green)</em></li>
            <li>31p <em>(deep lilac)</em></li>
          </ul>
        </div>
        <div>
          <h4 className="text-center">Wales</h4>
          <ul>
            <li>13p <em>(reddish brown)</em></li>
            <li>17p <em>(blue grey)</em></li>
            <li>28p <em>(greyish violet)</em></li>
          </ul>
        </div>
        <div>
          <h4 className="text-center">Severné Írsko</h4>
          <ul>
            <li>17p <em>(blue grey)</em></li>
            <li>28p <em>(greyish violet)</em></li>
            <li>31p <em>(deep lilac)</em></li>
          </ul>
        </div>
      </div>

      <h2>FDC a booklety</h2>
      <p>
        Regionálne Machins môžeme samozrejme nájsť aj na obálkach prvého dňa vydania (FDC) a v{" "}
        <strong>Prestige bookletoch</strong>. V niektorých prípadoch ide o kombináciu viacerých krajín, ako vidieť
        na nasledovnom príklade:
      </p>

      <div className="w-4/5 mx-auto my-2">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/regionals-block_vwwimh.jpg"
          alt="Regionálne booklet DX18"
          caption="Regionálne booklet DX18"
          className="w-full rounded"
        />
        <p className="img-caption">
          Ukážka booklet pane z Prestige Bookletu DX18 z roku 1996 (Škótsko, Wales, Sev. Írsko a národné vydanie).
        </p>
      </div>

      <h2>Desiatkový systém a posledné vydania</h2>
      <p>
        Všetky regionálne Machins boli vydané už <strong>v novom desiatkovom systéme</strong>, hoci sa pôvodne
        uvažovalo s ich vydaním aj ako pre-decimals. Kvôli nahusteným produkčným plánom a finančnej nevýhodnosti
        nahrádzať existujúce známky len na krátky čas pred decimalizáciou, sa od týchto plánov upustilo. Nakoniec
        došlo k meškaniu tlače aj pri desiatkovej mene, prvé regionálne Machins vyšli až 7. júla 1971 (Prvé národné
        5. jún 1967).
      </p>
      <p>
        <strong>Posledné vydania</strong> regionálnych Machins vyšli v roku 2000, nečíselný nominál 1<sup>st</sup>{" "}
        (pre Wales dvojjazyčne) vo farbe{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482214/img/regionals-flame_svxhxq.jpg">
          <em>flame</em>
        </ModalLink>
        , odvtedy už všetky krajiny vydávajú namiesto Machins tzv. Regional pictorials, kde sú na známke dominatné
        národné emblémy/motívy a silueta kráľovnej je už len doplnková resp. plní funkciu označenia britskej pošty.
      </p>
    </SiteLayout>
  );
}
