import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import { GalleryProvider, GalleryTrigger } from "@/components/LightboxGalleryContext";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Rarity",
  description:
    "Raritné Machins: chybotlače, testovacie vydania, Cambridge Colour Trials, osemuholníkové Machins.",
  alternates: { canonical: "https://www.filatelia-machins.sk/rarity.html" },
};

export default function RarityPage() {
  return (
    <SiteLayout>
      <h1>Rarity</h1>
      <p>
        Čo zaujme každého filatelistu? Určite zriedkavé či jedinečné exempláre.
        Počas niekoľkých desaťročí produkcie Machins sa dostalo do obehu viacero
        zaujímavých a raritných kúskov. Či už sa jednalo napríklad o
        chybotlače, testovacie vydania alebo o osemuholníkové samolepky.
      </p>

      <h2>Chybotlače</h2>
      <p>
        Napriek kontrolám sa niektoré z nich dostanú do obehu a patria k cenným
        súčastiam zbierok. Typickým príkladom je chýbajúca alebo nepresná
        perforácia medzi známkami, chýbajúci alebo nadbytočný fosforový pásik,
        odchýlka vo farebnom odtieni, chýbajúce označenie meny a podobne.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div>
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633121386/img/chyba-5_anrdb9.jpg"
            alt="Chýbajúca perforácia"
            caption="Chýbajúca perforácia"
            className="max-w-full h-auto rounded"
          />
          <p className="img-caption">Chýbajúca perforácia</p>
        </div>
        <div>
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1633120798/img/missing-pound_vbhqok.jpg"
            alt="Chýbajúce označenie meny (vľavo)"
            caption="Chýbajúce označenie meny (vľavo)"
            className="max-w-full h-auto rounded"
          />
          <p className="img-caption">Chýbajúce označenie meny (vľavo)</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/chybotlac1_iotfu4.jpg"
          alt="Nepresná a duplicitná perforácia"
          caption="Nepresná a duplicitná perforácia"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Nepresná a duplicitná perforácia</p>
      </div>

      <h2>Testovacie vydania</h2>
      <p>
        Označované ako <strong>trials</strong>. Skúšobná tlač známok sa robí z
        viacerých dôvodov. Buď kvôli{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632858644/img/decimal-approved-colour-scheme_ntdblo.jpg">
          výberu/odsúhlaseniu použitých farieb
        </ModalLink>
        , kvôli odoslaniu do ostatných tlačiarenských firiem za účelom
        dosiahnutia zhody farebných odtieňov alebo kvôli testu výslednej kvality
        farby a ďalších parametrov. Tieto testovacie Machins sú oficiálne
        nedostupné pre verejnosť, ale občas sa objavia ponuky na predaj cez eBay
        alebo u špecializovaných predajcov.
      </p>

      <h3>Cambridge Colour Trials</h3>
      <p>
        V roku 1968 Poštový Úrad poveril Oddelenie aplikovanej psychológie na
        Cambridgeskej univerzite vytvoriť paletu farieb pre pripravované
        definitívne vydania, plánované na rok 1971 už v novom, desiatkovom
        systéme. Pri posudzovaní bolo potrebné zohľadniť tri podmienky:
      </p>
      <ul>
        <li>Dostatočný signál fosforového pásika pre strojové triedenie</li>
        <li>Dobrá vzájomná rozlíšiteľnosť jednotlivých farieb</li>
        <li>Esteticky príjemný výsledný dizajn</li>
      </ul>
      <p>Na testovanie boli vybrané 3 nominálne hodnoty starého menového systému:</p>
      <ul>
        <li><strong>8d</strong> pre známky s tmavým pozadím</li>
        <li><strong>1/-</strong> pre známky so svetlým pozadím</li>
        <li><strong>1/6</strong> pre známky s dvojfarebným dizajnom</li>
      </ul>
      <p>
        Pôvodných 61 farieb bolo selekciou zredukovaných najprv na 40, potom na
        25 a nakoniec vznikol finálny zoznam 14 farieb. Arnold Machin osobne
        konzultoval finálny výber s výskumníkmi a odobril len 5 farieb. Jeho
        výhrady sa týkali estetického hľadiska. Nakoniec však došlo k dohode a
        výsledkom bola odsúhlasená paleta 12-tich nových farieb.
      </p>

      <GalleryProvider slides={[
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge2_lppxbe.jpg", alt: "Cambridge Trials 1", caption: "Cambridge Colour Trials" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge1_qyu6sw.jpg", alt: "Cambridge Trials 2", caption: "Cambridge Colour Trials" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge6_f0xenv.jpg", alt: "Cambridge Trials 3", caption: "Cambridge Colour Trials" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge7_mmaqeb.jpg", alt: "Cambridge Trials 4", caption: "Cambridge Colour Trials" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge4_fe7o3s.jpg", alt: "Cambridge Trials 5", caption: "Cambridge Colour Trials" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge5_rbaduy.jpg", alt: "Cambridge Trials 6", caption: "Cambridge Colour Trials" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1632913822/img/Cambridge3_kpfj3v.jpg", alt: "Cambridge Trials 7", caption: "Cambridge Colour Trials" },
      ]}>
        <div className="md:max-w-[80%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
            <GalleryTrigger index={0} className="w-full h-auto rounded" />
            <GalleryTrigger index={1} className="w-full h-auto rounded" />
            <GalleryTrigger index={2} className="w-full h-auto rounded" />
            <GalleryTrigger index={3} className="w-full h-auto rounded" />
          </div>
          <div className="grid grid-cols-3 gap-3 my-4 md:w-3/4 mx-auto">
            <GalleryTrigger index={4} className="w-full h-auto rounded" />
            <GalleryTrigger index={5} className="w-full h-auto rounded" />
            <GalleryTrigger index={6} className="w-full h-auto rounded" />
          </div>
        </div>
        <p className="img-caption">Ukážka Cambridge Colour Trials</p>
      </GalleryProvider>

      <h3>Courvoisier</h3>
      <p>
        3 rôzne trials{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632858463/img/GB_1997_Machin_Courvoisier_Non_Value_Trials_ku6ycd.jpg">
          bez nominálnej hodnoty
        </ModalLink>{" "}
        vytlačila švajčiarska firma Courvoisier v roku 1997, keď hľadala Britská
        pošta nových dodávateľov kvôli zvýšeným potrebám trhu. Existujú v
        nasledovných farbách: <strong>deep green</strong> - neskôr použitá pre
        nominál 2p, <strong>light grey</strong> - neskôr použitá pre nominál 29p
        a <strong>flame</strong> - neskôr použitá pre prvú triedu. Vydanie bolo
        bez fosforových pásikov, so zúbkovaním 15x14.
      </p>
      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Tieto trials boli &ldquo;znovuobjavené&rdquo; až v roku 2017
          v hárkoch po{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1633289958/img/svajc-trial_xunhoq.jpg">
            100 známok
          </ModalLink>
          . Malá časť sa dostala na britský trh — väčšina zostáva v súkromných rukách
          amerických investorov.
        </p>
      </div>

      <h3 id="00p">De La Rue</h3>
      <p>
        Na rozdiel od vyššie spomínanej tlače od Courvoisier, v De La Rue dostali
        testovacie Machins nominálnu hodnotu <strong>00p</strong>. Cieľom týchto
        vydaní bolo poskytnúť jednotný spôsob zabezpečenia zhody farebných
        odtieňov u všetkých firiem podieľajúcich sa na tlači Machins. Nulové
        nominály od De La Rue existujú aj zúbkované, aj{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632858846/img/2002_IMPERF_00p_Colour_Trial_wzkvrx.jpg">
          bez perforácie
        </ModalLink>
        . Všeobecne je známych{" "}
        <a
          href="https://ucarecdn.com/26adb4d7-090f-4c0b-a59a-cff9e772047e/color_trials_dlr.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          34 farieb
        </a>{" "}
        použitých pre trials v roku 2003.
      </p>

      <div className="max-w-3xl mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632853805/img/00p-ukazka_o4f9wh.jpg"
          alt="Testovacie Machins 00p (De La Rue)"
          caption="Porovnanie: Testovacie Machins 00p (De La Rue) a definitívne vydania"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Porovnanie: Testovacie Machins 00p (De La Rue) a definitívne vydania
        </p>
      </div>

      <h3>Pre zdravotne znevýhodnených</h3>
      <p>
        V snahe uľahčiť používanie známok napríklad slabozrakým či ľudom s
        artritídou, boli v roku 2002 navrhnuté známky pre prvú a druhú triedu.
        Majú väčšie čísla (bez ST a ND) a známkové zošitky boli spracované tak,
        aby sa ľahšie otvárali a známky sa jednoduchšie oddeľovali. Produkciu
        zabezpečovala firma Questa.
      </p>

      <div className="max-w-sm mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632935917/img/blind_rvrmvs.jpg"
          alt="Skúšobné Machins pre zdravotne znevýhodnených"
          caption="Skúšobné Machins pre zdravotne znevýhodnených"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Skúšobné Machins pre zdravotne znevýhodnených
        </p>
      </div>

      <div className="callout callout-warning">
        <p>
          Nie všetky skúšobné zošitky boli vrátené — časť sa objavila na filatelistickom trhu.
          Väčšina je nepoužitá; sú známe len <strong>3 ks použitých známok pre 1. triedu</strong>{" "}
          a žiadna pre 2. triedu.
        </p>
      </div>
      <p>
        Nakoniec sa Britská pošta rozhodla nepokračovať v ďalšom vývoji a tieto
        návrhy sa nedostali do tlače vo forme definitívnych známok.
      </p>

      <h2 id="octagonals">Osemuholníky (Worboys/Daynes issue)</h2>
      <p>
        V rokoch 1973-74 vyšli vo veľmi nízkom náklade samolepiace Machins v
        tvare osemuholníka, 900-2200 kusov pre každý z 9 nominálov v rozsahu od
        ½p do 5p. Najmenej, len 900, bolo vydaných 5p. Z toho vyplýva aj
        maximálny počet kompletných sérii, je možné ich vyskladať teda len 900.
      </p>
      <p>
        Vydania prebehli celkovo v troch vlnách, pod dozorom úradu Her
        Majesty&apos;s Stationery Office. Hárky obsahovali len 12 známok, v
        štyroch radoch po tri. Pri prvej a druhej vlne mal papier obdĺžníkový
        tvar (zadávateľ Derek Worboys), pri tretej vlne (zadávateľ John Daynes)
        kruhový, ako vidieť na obrázku nižšie:
      </p>

      <div className="max-w-sm mx-auto my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632931035/img/John-Daynes-1974octagonal-3rd-printing_ye7nnf.jpg"
          alt="Kompletný set osemuholníkových Machins (Daynes)"
          caption="Kompletný set 8-uholníkových Machins (Daynes)"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">
          Kompletný set 8-uholníkových Machins (Daynes)
        </p>
      </div>

      <p>
        Hoci produkcia týchto osemuholníkových Machins bola objednaná a
        sponzorovaná súkromnými osobami, sú uznané ako platné pre použitie v
        poštových službách. Neoficiálne ide o prvé samolepiace Machins, hoci
        britská pošta uvádzala ako prvé (aj na propagačných posteroch) až klasické
        obdĺžnikové vydanie pre 1.tr. z roku 1993.
      </p>
    </SiteLayout>
  );
}
