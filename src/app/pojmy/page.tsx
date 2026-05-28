import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Slovník pojmov",
  description:
    "Prehľad základných anglických výrazov súvisiacich s Machins používaných v katalógoch, predajcami a zberateľmi.",
  alternates: { canonical: "https://www.filatelia-machins.sk/pojmy.html" },
};

function Term({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-4">
      <h4 className="font-semibold text-[#003366] text-base mb-1">{term}</h4>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

export default function PojmyPage() {
  return (
    <SiteLayout>
      <h1>Používané pojmy</h1>
      <p>
        Prehľad základných anglických výrazov súvisiacich s Machins, používaných
        v katalógoch, predajcami, zberateľmi a v dostupných zdrojoch:
      </p>

      <Term term="Booklet">
        <p>
          Známkový{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632685643/img/Booklet-FH43_rlrdkm.jpg">
            zošitok
          </ModalLink>{" "}
          obsahujúci väčší počet známok zošitých alebo zložených v tvrdšom
          obale. Ak sú v zošitku známky rôznych nominálnych hodnôt, susediace
          páry vytvárajú kombinácie, ktoré nie sú bežné z iných zdrojov
          (se-tenant pairs). Vnútorná časť zošitka so známkami sa označuje ako{" "}
          <strong>booklet pane</strong>.
        </p>
        <p>
          Výrazom <strong>Prestige</strong> sú označované tie zošitky, kde sú
          známky doplnené textom a ilustráciami súvisiacimi s vybranou témou
          zošitka.
        </p>
      </Term>

      <Term term="Coil, Coil strips">
        <p>
          Známky vo forme{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/coil-full_yfhson.jpg">
            rolky/zvitku
          </ModalLink>{" "}
          (<strong>coil</strong>) väčšinou používané v známkových automatoch.
          Oficiálne používaný termín britskou poštou je <strong>roll</strong>.
          Známky troch a viac kusov oddelené z rolky tvoria{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482214/img/coil-3-five_dydmra.jpg">
            pásiky
          </ModalLink>{" "}
          (<strong>coil strips</strong>), ktoré môžu byť horizontálne alebo
          vertikálne.
        </p>
      </Term>

      <Term term="Commemoratives">
        <p>Pamätné známky vydávané pri rôznych príležitostiach a výročiach.</p>
      </Term>

      <Term term="Cylinder block">
        <p>
          Blok známok z rohovej časti hárku nesúci číslo tlačiarenského valca.
          U Machins sa najčastejšie zbierajú{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632651902/img/6-blok_n7b0jv.jpg">
            bloky zo 6 známok
          </ModalLink>{" "}
          (platí pre hárky z rokov 1967-2008).
        </p>
      </Term>

      <Term term="Decimals">
        <p>
          Známky vydané po februári 1971 už v desiatkovom systéme, kde 1 libra =
          100 pencí. Penca má už štandardné označenie <strong>p</strong>.
        </p>
      </Term>

      <Term term="Definitives">
        <p>
          Poštové známky na bežné použitie, dostupné v predaji na pošte dlhšie
          časové obdobie. Vydanie sa neviaže k žiadnej zvláštnej príležitosti.
        </p>
      </Term>

      <Term term="Double Head">
        <p>
          Označenie používané pre{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/anniversary_5_n8ihbi.jpg">
            výročné vydanie
          </ModalLink>{" "}
          z roku 1990 s dvomi kráľovnami, Alžbetou II. a Viktóriou, doplnené
          známkou pre prvú triedu v roku 2000.
        </p>
      </Term>

      <Term term="EME">
        <p>
          Skratka pre <strong>Electro-Mechanically Engraved</strong>. Technika
          tlače, pri ktorej sú viacnásobné obrazy známok vyryté priamo do
          tlačiarenského valca a tento proces je riadený počítačom. Výsledkom je
          oveľa jasnejší obraz.
        </p>
      </Term>

      <Term term="FDC (First Day Cover)">
        <p>
          Obálka prvého dňa vydania s nalepenými známkami a príležitostnou
          pečiatkou s dátumom prvého dňa vydania.
        </p>
      </Term>

      <Term term="Forgery">
        <p>
          Falošná známka, podvrh. Takéto známky sú neplatné v poštovom styku,
          ale je (neoficiálne) povolené ich mať na zberateľské účely. Chýbajú
          im ochranné prvky, majú iný typ papiera, zúbkovania či odlišný farebný
          odtieň v porovnaní s oficiálnym poštovým vydaním. Známy je napr.
          výskyt falzifikátov{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632678861/img/forgery_uckxts.jpg">
            24p Machin
          </ModalLink>{" "}
          vo farbe <em>rust</em> z roku 1993.
        </p>
      </Term>

      <Term term="Grid">
        <p>
          Jedna z tlačiarenských značiek na okraji hárku, zobrazuje{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632652197/img/tab-grid-2_jhhlxg.jpg">
            mriežku
          </ModalLink>{" "}
          s pozíciou pri tlači.
        </p>
      </Term>

      <Term term="Gutter, Gutter Pair">
        <p>
          Medzihárčie.{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632652615/img/medziharcie-2_tddstb.jpg">
            Plocha papiera
          </ModalLink>{" "}
          medzi neoddelenými priehradkovými hárkami. Známky zo susedných hárkov
          vytvárajú pár a plocha medzi nimi môže byť čistá alebo potlačená
          tlačiarenskými značkami.
        </p>
      </Term>

      <Term term="Imperforate">
        <p>Známka bez zúbkovania na jednej alebo viacerých stranách.</p>
      </Term>

      <Term term="Imprint">
        <p>
          Názov tlačiarenskej{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632680398/img/imprints_pszt84.jpg">
            firmy
          </ModalLink>{" "}
          na okraji hárku. Firmy podieľajúce sa na produkcii Machins: Harrison,
          De La Rue, Questa, Walsall, Waddington, Cartor. Posledne menovaná
          firma neoznačuje svoje meno na okrajoch.
        </p>
      </Term>

      <Term term="Label">
        <p>
          Kupón, potlačená alebo nepotlačená plocha papiera, ktorá dopĺňa
          hárček na potrebný počet známok. U Machins sa vyskytuje aj pri
          zvitkových{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-5_bpsixs.jpg">
            pásikoch
          </ModalLink>
          .
        </p>
      </Term>

      <Term term="Litography">
        <p>
          Litografia alebo kameňotlač je druhá najpoužívanejšia technika tlače
          pri produkcii Machins. Patrí do skupiny tlače z plochy a je založená
          na odpudivosti vody a mastnoty. Pokreslené miesta na litografickom
          kameni určené na odtláčanie priťahujú mastnotu - prijímajú farbu.
        </p>
      </Term>

      <Term term="Margin">
        <p>
          Okraj hárku okolo vytlačených známok. Môže byť čistý alebo s
          doplňujúcimi tlačiarenskými informáciami. Používa sa aj výraz{" "}
          <strong>selvedge</strong>.
        </p>
      </Term>

      <Term term="Minisheet/Miniature sheet">
        <p>
          Hárček (aršík). Zberateľský filatelistický materiál, vydávaný často
          pri rôznych{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632298205/img/arnold-machin_q48ey7.jpg">
            výročiach
          </ModalLink>{" "}
          alebo filatelistických výstavách.
        </p>
      </Term>

      <Term term="MNH">
        <p>
          Skratka pre <strong>Mint Never Hinged</strong>. Nepečiatkované známky
          bez poškodenia lepu. Ďalšie označenia sú UMM -{" "}
          <strong>Unmounted Mint</strong> alebo štandardne <strong>**</strong>.
        </p>
      </Term>

      <Term term="NVI Machins (Non-Value Indicators)">
        <p>
          Známky bez špecifikácie nominálnej hodnoty vo forme čísla. Namiesto
          toho je špecifikovaná predplatená služba, napr. <strong>1st</strong>{" "}
          pre prvú triedu, <strong>2nd</strong> pre druhú triedu a podobne. Môžu
          byť označované aj ako <em>Service Inscribed</em>.
        </p>
      </Term>

      <Term term="Octagonal">
        <p>
          <a href="/rarity#octagonals">Osemuholníkové</a> samolepiace Machins z
          rokov 1973/74.
        </p>
      </Term>

      <Term term="Phosphor band/bar">
        <p>
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632681395/img/phosphor-2b_fjggp4.jpg">
            Fosforový pásik
          </ModalLink>{" "}
          sa používa ako pomôcka pri strojovom triedení pošty a zároveň slúži aj
          ako bezpečnostný prvok na sťaženie falšovania. Označenia majú
          nasledovný význam: RB (<strong>Right Band</strong>) - pásik na pravej
          strane, LB (<strong>Left Band</strong>) - pásik na ľavej strane, CB (
          <strong>Center Band</strong>) - pásik v strede, 2B (<strong>2 Bands</strong>) - pásik na ľavej aj pravej strane súčasne.
        </p>
      </Term>

      <Term term="Photogravure">
        <p>
          Technika hĺbkotlače, ktorá používa fotografiu na vytvorenie{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632758366/img/photogravure_jevcos.jpg">
            viacnásobných obrázkov
          </ModalLink>{" "}
          z originálneho negatívu pôvodného diela. Tie sa potom chemicky
          vyleptajú pomocou kyseliny do tlačovej dosky. Najpoužívanejší spôsob
          produkcie Machins.
        </p>
      </Term>

      <Term term="PHQ Card">
        <p>
          Pohľadnica s vyobrazením existujúcej poštovej známky. Často s nalepenou
          skutočnou známkou na prednej strane a (príležitostnou) pečiatkou. V
          takom prípade ide o{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632652973/img/analogicka-pohladnica_wd0npw.jpg">
            analogickú
          </ModalLink>{" "}
          pohľadnicu.
        </p>
      </Term>

      <Term term="Pre-decimals">
        <p>
          Známky vydané v starom menovom systéme, do februára 1971. 1 libra sa
          delila na 24 shillingov a 1 shilling na 12 pencí. Ľahko
          identifikovateľné, penca je označená{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482211/img/4d-olive-sepia_n6rfha.jpg">
            písmenom D
          </ModalLink>{" "}
          alebo je nominálna hodnota v{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632654524/img/shilling_folggu.jpg">
            shillingoch
          </ModalLink>
          . Často označované aj ako <strong>£sd MACHINS</strong>.
        </p>
      </Term>

      <Term term="Regionals">
        <p>
          Súhrné označenie pre známky vydávané pre{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632664806/img/regionals_xbrzrt.jpg">
            ostrov Man, Severné Írsko, Škótsko a Wales
          </ModalLink>
          , v prípade Machins doplnené heraldickými symbolmi jednotlivých krajín.
        </p>
      </Term>

      <Term term="SBP">
        <p>
          Skratka pre <strong>Security Backing Paper</strong>. Do decembra 2015
          boli všetky Security Machins dodávané na čistom podkladovom papieri.
          Následne britská pošta zaviedla ako ochranný prvok{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632769671/img/SBP_fxpwq6.jpg">
            nový typ podkladového papiera
          </ModalLink>
          , ktorý už obsahuje slová ROYAL MAIL.
        </p>
      </Term>

      <Term term="Security cuts, Security slits">
        <p>
          Bezpečnostný prvok u samolepiacich Machins, dva oválne výrezy v tvare
          U vyrezané do známky.
        </p>
      </Term>

      <Term term="Security Machins">
        <p>
          Machins vydávané od roku 2009, s dvoma konkrétnymi typmi ochranných
          prvkov, majú oválne výrezy v tvare U a text na pozadí známky a/alebo
          podkladového papiera. Nazývané aj <strong>U-Machins</strong>.
        </p>
      </Term>

      <Term term="Self-adhesive">
        <p>
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632682834/img/self-adhesive_dwes1c.jpg">
            Samolepiace
          </ModalLink>{" "}
          známky bez potreby aktivácie lepu vodou. Prvá samolepiaca známka s
          dizajnom Machin bola uvedená do obehu 19. októbra 1993. Išlo o známku
          pre prvú triedu vo farbe <em>flame</em>.
        </p>
      </Term>

      <Term term="Se-tenant pairs/strips">
        <p>
          Horizontálne alebo vertikálne{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632687517/img/se-tenants_mjz1ea.jpg">
            páry/pásiky
          </ModalLink>{" "}
          známok odlišných nominálnych hodnôt, farieb alebo dizajnu. Zdrojom
          môžu byť napríklad známkové zošitky, hárčeky či rolky.
        </p>
      </Term>

      <Term term="Shade">
        <p>
          Odlišný farebný{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632654524/img/shilling_folggu.jpg">
            odtieň
          </ModalLink>
          , zväčša neplánovaná odchýlka vo výslednej farbe známky.
        </p>
      </Term>

      <Term term="Sheet">
        <p>
          Tlačový alebo priehradkový{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482216/img/holly-green-sheet-25_wni42o.jpg">
            hárok
          </ModalLink>{" "}
          (u Machins s 25, 50, 100, 200 alebo 240 známkami). Priehradkový -{" "}
          <strong>counter sheet</strong>, tlačový -{" "}
          <strong>printing sheet</strong>.
        </p>
      </Term>

      <Term term="Smiler">
        <p>
          Známkové{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632309069/img/40-th-Smiler_hbydnz.jpg">
            hárky
          </ModalLink>{" "}
          veľkosti A4 doplnené kupónmi (label) s generickým dizajnom. Doplnkový
          filatelistický materiál vydávaný britskou poštou.
        </p>
      </Term>

      <Term term="Tête-bêche">
        <p>
          Označenie pre spojenú dvojicu známok, kde jedna známka je{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1633810966/img/tete-beche_mqgj5z.jpg">
            hore nohami voči druhej
          </ModalLink>{" "}
          a vytvárajú horizontálne alebo vertikálne páry. Tieto dvojice môžu byť
          vytlačené úmyselne alebo náhodne.
        </p>
      </Term>

      <Term term="Traffic lights">
        <p>
          Kontrolné značky použitých farieb na okraji hárku alebo v medzihárčí.
          U britských Machins sú{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/traffic-lights-gutters_fftveh.jpg">
            kruhového tvaru
          </ModalLink>
          , pre Hong Kong sú{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632651351/img/hk-traffic-lights_jiugzy.jpg">
            štvorcové
          </ModalLink>
          .
        </p>
      </Term>

      <Term term="Trials">
        <p>
          Skúšobná tlač známok kvôli testu výslednej kvality farby, lepu a
          ďalších parametrov. U decimálnych Machins sa vyskytujú známky bez
          nominálnej hodnoty (tlač Courvoisier) alebo s nominálnou hodnotou 00p
          (tlač De La Rue). Oficiálne nedostupné pre verejnosť, ale objavujú sa
          v malých množstvách na predaj cez eBay a podobne.
        </p>
      </Term>

      <Term term="Underprint">
        <p>
          V rokoch 1982-86 bolo vydaných 8 nominálov so{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632677319/img/underprint_efksv6.jpg">
            symbolmi
          </ModalLink>{" "}
          na zadnej strane na označenie známok oficiálne predávaných so zľavou.
          Toto, medzi zberateľmi zaužívané označenie, je nepresné, lebo symboly
          boli vytlačené na vrchu lepu, nie pod ním.
        </p>
      </Term>

      <Term term="U-Machins">
        <p>
          Označenie Machins, ktoré majú katalógové číslo začínajúce na U, podľa
          Stanley Gibbons katalógov. Rozsah od U2911 do U3966. Majú ochranný
          prvok, oválne výrezy (<strong>security cuts</strong>), v tvare U.
        </p>
      </Term>

      <Term term="Watermark">
        <p>
          Vodoznak (priesvitka). Jeden z ochranných prvkov na sťaženie
          falšovania. U Machins sa používal len pri vydaniach pre{" "}
          <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/crown-CA_xotqtd.jpg">
            Hong Kong
          </ModalLink>
          . U britských boli namiesto vodoznaku použité iné{" "}
          <a href="/ochranne-prvky">ochranné prvky</a>.
        </p>
      </Term>

      <Term term="X-Machins">
        <p>
          Označenie Machins, ktoré majú katalógové číslo začínajúce na X, podľa
          Stanley Gibbons katalógov. Rozsah od X841 do X922. Zúbkovanie je
          štandardné, bez výrezov v tvare elipsy.
        </p>
      </Term>

      <Term term="Y-Machins">
        <p className="pb-4">
          Označenie Machins, ktoré majú katalógové číslo začínajúce na Y, podľa
          Stanley Gibbons katalógov. Rozsah od Y1667 do Y1803. Na oboch
          vertikálnych stranách má časť zúbkovania tvar elipsy.
        </p>
      </Term>
    </SiteLayout>
  );
}
