import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import LightboxImage from "@/components/LightboxImage";
import ModalLink from "@/components/ModalLink";

export const metadata: Metadata = {
  title: "Prehľad najdôležitejších parametrov u Machins.",
  description:
    "Parametre u Machins. Tlačiarenské firmy, typ hlavy, pre-decimals, decimals, fosforové pásiky, typ papiera, čísla, zúbkovanie, pôvod.",
  alternates: { canonical: "https://www.filatelia-machins.sk/parametre.html" },
};

export default function ParametrePage() {
  return (
    <SiteLayout>
      <h1>Prehľad parametrov</h1>
      <p>
        Ak položíme pred seba dve Machins rovnakej farby s rovnakou nominálnou hodnotou, môže ísť o dva rôzne typy,
        hoci na prvý pohľad vyzerajú pre laika úplne rovnako. Čo si všímať a aké parametre porovnávať? Douglas Myall
        v prvých kapitolách Machin Handbooku rozlišuje a popisuje až 17 vlastností:
      </p>

      <ol>
        <li><a href="#nominal">Nominálna hodnota alebo predplatená služba</a></li>
        <li><a href="#farba">Farba</a></li>
        <li><a href="#rozmer">Rozmer a tvar</a></li>
        <li><a href="#dizajn">Dizajn: národné, regionálne a príležitostné vydania</a></li>
        <li><a href="#sposob-tl">Spôsob tlače</a></li>
        <li><a href="#firma">Tlačiarenská firma</a></li>
        <li><a href="#papier">Typ použitého papiera</a></li>
        <li><a href="#lep">Typ použitého lepu</a></li>
        <li><a href="#zubkovanie">Zúbkovanie</a></li>
        <li><a href="#smer">Smer tlače</a></li>
        <li><a href="#povod">Pôvod známky</a></li>
        <li><a href="#fosfor-1">Typ použitého fosforu (chemické zloženie)</a></li>
        <li><a href="#fosfor-2">Spôsob aplikácie fosforu</a></li>
        <li><a href="#fluo">Fluorescenčný atrament</a></li>
        <li><a href="#hlava">Typ hlavy, veľkosť a pozícia</a></li>
        <li><a href="#typ-nh">Typ nominálnej hodnoty (font, hrúbka atď.)</a></li>
        <li><a href="#pozicia-nh">Pozícia nominálnej hodnoty</a></li>
      </ol>

      <div className="callout callout-info">
        <p>
          Myall delí parametre do 3 úrovní — <strong>začiatočník</strong> (1–4),{" "}
          <strong>pokročilý</strong> (5–8, 12) a <strong>špecialista</strong> (9–11, 13–17).
          Zberateľ si môže vybrať parametre podľa záujmu a kombinovať ich medzi úrovňami.
        </p>
      </div>

      <h2 id="nominal">1. Nominálna hodnota alebo predplatená služba</h2>
      <p>
        Začneme tým, že určíme či je nominálna hodnota v starej alebo novej mene, teda či patrí medzi{" "}
        <strong>pre-decimals</strong> alebo <strong>decimals</strong>. Od júna 1967 do februára 1971 sa používali
        pre-decimals a sú tiež označované aj ako <em>£sd Machins</em>. 1 libra sa delila na 20 shillingov a 1
        shilling na 12 pencí. V starej mene bolo vydaných celkovo 20 nominálov. Všetky Machins vydané po februári
        1971 sú už v desiatkovom systéme, kde 1 libra = 100 pencí.
      </p>
      <p>
        Ak je namiesto číselného vyjadrenia nominálnej hodnoty použité označenie predplatenej služby, hovoríme o{" "}
        <a href="/nvi">NVI Machins</a>. Jedná sa o prvú a druhú triedu, zásielky do Európy a celého sveta
        (Worldwide), poistené, doporučné listy a podobne.
      </p>

      <h2 id="farba">2. Farba</h2>
      <p>
        Od roku 1967 do súčasnosti boli vydané Machins v širokej farebnej palete. Dostupné zdroje uvádzajú vyše 130
        použitých farieb. Pri rôznych tlačiarenských firmách a technikách tlače existujú samozrejme navyše aj jemne
        (ale zreteľne) sa odlišujúce odtiene. Čo sa týka názvov farieb, v jednotlivých katalógoch sa môžu niektoré
        líšiť, keďže vydavatelia používajú rozličné systémy identifikácie a určovania farieb.
      </p>
      <p>
        Oficiálnemu označovaniu farieb na hárkoch sa venujem v sekcii{" "}
        <a href="/popis-harku#colours">Colour Tabs</a>.
      </p>

      <h2 id="rozmer">3. Rozmer a tvar</h2>
      <p>
        Štandardný rozmer u Machins je 20x24 mm orientovaný na výšku. Okrem tohto základného formátu existuje aj
        niekoľko ďaších, či už pre High Values alebo NVI Machins. Ukážka s proporčným porovnaním:
      </p>

      <LightboxImage
        src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632001164/img/velkosti-a-format_xezqjc.jpg"
        alt="Rôzne veľkosti a formáty Machins"
        caption="Rôzne veľkosti a formáty Machins"
        className="max-w-full h-auto rounded my-2"
      />
      <p className="img-caption">Image credit: Robin Harris, Adminware. Rôzne veľkosti a formáty Machins.</p>

      <h2 id="dizajn">4. Dizajn: národné, regionálne a príležitostné vydania</h2>
      <p>
        Popri základných celonárodných vydaniach existujú aj <a href="/regionalne">regionálne</a> Machins, doplnené
        heraldickým symbolom v ľavom hornom rohu, a <a href="/prilezitostne">príležitostné</a>, napríklad so
        spoločným vyobrazením dvoch kráľovien, Viktórie a Alžbety II.
      </p>

      <h2 id="sposob-tl">5. Spôsob tlače</h2>
      <p>
        Existujú tri základné spôsoby tlače v závislosti od toho, či obraz je nad, na alebo pod povrchom tlačovej
        dosky alebo iného média. V rámci každého z týchto spôsobov existuje veľa podskupín. Napríklad{" "}
        <em>Gravure</em> a <em>Intaglio (Recess)</em> sú rôzne typy tretej metódy.
      </p>
      <p>
        Pri produkcii Machins boli použité všetky tri spôsoby v rôznych formách. Väčšina Machins je vytlačená
        pomocou hĺbkotlače (<em>Photogravure</em>). Druhou najpoužívanejšou metódou je litografia (
        <em>Lithography</em>). Nasleduje gravírovaná (<em>Engraved</em>) tlač.
      </p>
      <p>
        Zaujímavosťou sú <em>Profile on Print</em> prestige{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631540542/img/DX22_tl9drq.jpg">
          booklet
        </ModalLink>{" "}
        vydaný v roku 1999, ktorý obsahoval aj NVI Machins vytlačené typografiou (<em>Typographed</em>) a reliéfnou
        tlačou (<em>Embossed</em>), a 1 librová výročná známka z roku 2017, vydaná pri príležitosti 50-teho výročia
        používania Machinovho dizajnu, potiahnutá{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1632344660/img/zlata-folia_isjqus.jpg">
          fóliou z 22-karátového zlata
        </ModalLink>
        .
      </p>

      <div className="flex flex-col items-center my-4">
        <LightboxImage
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632079434/img/typ-tlace_lr8jvy.jpg"
          alt="Typy tlače"
          caption="Typy tlače"
          className="max-w-full h-auto rounded"
        />
        <p className="img-caption">Image credit: Robin Harris, Adminware. Typy tlače.</p>
      </div>

      <h2 id="firma">6. Tlačiarenská firma</h2>
      <p>
        Na výrobe Machins sa podieľalo viacero tlačiarenských firiem. Okrem pôvodných{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482207/img/Harrison_gaeruy.jpg">
          Harrison
        </ModalLink>{" "}
        (v roku 1997 po odkúpení firmy došlo k zmene mena na{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482213/img/Delarue_dhey1i.jpg">
          De La Rue
        </ModalLink>
        ) sa z dôvodu potrieb trhu začali produkovať aj v tlačiarniach{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482214/img/Questa_toqnxn.jpg">
          Questa
        </ModalLink>
        ,{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/wadington_2_eertcs.jpg">
          Waddington
        </ModalLink>
        ,{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482215/img/Walsall_kotqdf.jpg">
          Walsall
        </ModalLink>
        ,{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/Enschede_didnud.jpg">
          Enschedé
        </ModalLink>{" "}
        a Cartor. Nemali by sme opomenúť ani prvé <em>high values</em> vydania (intaglio, hĺbkotlač), ktoré
        produkovala firma{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1633296178/img/Bradbury-1969-set_o9jo4n.jpg">
          Bradbury Wilkinson and Company
        </ModalLink>
        .
      </p>
      <p>
        Pri známkach <a href="/hongkong">Hong Kongu</a> časť produkcie zabezpečovala aj austrálska firma
        Leigh-Mardon z Melbourne.
      </p>

      <h2 id="papier">7. Typ použitého papiera</h2>
      <p>
        Produkcia Machins rôznymi tlačiarenskými technikami si vyžaduje aj použitie vhodného papiera pre tlač. Iné
        vlastnosti sú vhodné pre hĺbkotlač a iné pre litografiu. Ďalšie rozdiely vznikajú pri následnej úprave
        papiera, pri použití fosforu a lepu. Jednotlivé typy sa v odbornej literatúre označujú skratkami, napríklad{" "}
        <strong>PCP</strong> (Phosphor Coated Paper) - fosforom potiahnutý papier a podobne.
      </p>

      <h2 id="lep">8. Typ použitého lepu</h2>
      <p>Rozlišujeme tri základné typy lepu (mimo samolepiacich vydaní): Arabský, Dextrin a PVA (Polyvinyl Alkohol).</p>

      <h2 id="zubkovanie">9. Zúbkovanie</h2>
      <p>
        U Machins v malom formáte sa vyskytujú nasledujúce zúbkovania: 14¾x14 (najčastejšie, viacero firiem),
        13½x14 (Questa and Waddington) a 13¾x14 (Walsall). Jediná známka, 1<sup>st</sup> vo farbe <em>flame</em>,
        bola omylom vytlačená aj vo formáte 12¾x13.
      </p>
      <div className="callout callout-warning">
        <p>
          <strong>Poznámka:</strong> V niektorých zdrojoch nájdeme zaokrúhlené hodnoty,
          napríklad 14¾×14 je uvádzané ako 15×14.
        </p>
      </div>
      <p>
        Popri štandardnom zúbkovaní boli v roku 1993 uvedené do obehu aj známky s eliptickou perforáciou ako
        bezpečnostným prvkom. Elipsy sa môžu odlišovať dĺžkou, tvarom a pozíciou.
      </p>

      <h2 id="smer">10. Smer tlače</h2>
      <p>
        Neodkazuje na smer v ktorom prešiel papier tlačiarenským strojom, ale zdanlivo rozdielny smer tlače u
        protichodne spojených dvojíc známok, <em>tête-bêche</em>, napríklad v bookletoch.
      </p>

      <h2 id="povod">11. Pôvod známky</h2>
      <p>
        Drvivá väčšina doteraz vydaných Machins pochádza z bookletov. Ďalšími zdrojmi sú klasické priehradkové
        hárky (s 25, 50, 100, 200 alebo 240 známkami) a zvitky (rolky). Známky s odlišnými parametrami môžeme nájsť
        aj v doplnkových filatelistických materiáloch ako sú napríklad hárčeky.
      </p>

      <h2 id="fosfor-1">12. Typ použitého fosforu (chemické zloženie)</h2>
      <p>
        Počas celého obdobia vydávania Machins bolo vyskúšaných viacero typov fosforu, ktoré pod ultrafialovým
        svetlom vykazujú odlišné sfarbenie - žlté, modré a fialové odtiene.
      </p>

      <h2 id="fosfor-2">13. Spôsob aplikácie fosforu</h2>
      <p>
        Pri aplikácii fosforu rozlišujeme dva základné spôsoby - fosfor zapracovaný priamo v papieri a fosfor
        aplikovaný na povrch papiera. Pri druhom spomínanom spôsobe môže ísť o pokrytie celého papiera, alebo len
        jeho časti, kedy dochádza k vzniku fosforových pásov. Na známkach nájdeme buď 1 alebo 2 pásy, s rôznou
        šírkou, dĺžkou a umiestnením (na okrajoch, v strede). Používané značenie je nasledovné:{" "}
        <strong>2B</strong> - 2 fosforové pásiky, <strong>LB</strong> - pásik na ľavom okraji,{" "}
        <strong>RB</strong> - pásik na pravom okraji, <strong>CB</strong> - pásik umiestnený v strede.
      </p>

      <h2 id="fluo">14. Fluorescenčný atrament</h2>
      <p>
        Prvý krát bol fluorescenčný atrament použitý vo funkcii bezpečnostného prvku v rokoch 1999/2000 na Machins
        produkovaných tlačiarňami Enschedé a De La Rue. Išlo o nominálne hodnoty £1, £1.50, £2, £5 v malom formáte.
        V týchto prípadoch celá potlačená oblasť fluoreskuje v zelených odtieňoch.
      </p>

      <h2 id="hlava">15. Typ hlavy, veľkosť a pozícia</h2>
      <p>
        Základné delenie je na typ A a B. Najviditeľnejší rozdiel je v spodnej časti busty, buď je jej základňa
        plochá alebo zaoblená. Ďalšie rozdiely sa vyskytujú napríklad v centrálnom kríži na korune
        (otvorený/uzavretý v ľavej hornej časti), v perlách z náhrdelníka (veľkosť, počet) alebo vo zvlnených
        vlasoch (detail vypracovania). Pri porovnaní rôznych detailov definuje Myall Douglas v Machin Handbooku až
        20 podtypov zobrazenia hlavy.
      </p>

      <div className="my-4">
        <div className="max-w-[512px] w-full mx-auto">
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632078434/img/hlava-typ_uw6npu.jpg"
            alt="Ukážka rozdielnych detailov, typ hlavy B4"
            caption="Ukážka rozdielnych detailov, typ hlavy B4"
            className="h-auto rounded"
          />
        </div>
        <p className="img-caption">
          Image credit: Douglas Myall, The Complete Deegam Machin Handbook. Rozdielne detaily, typ hlavy B4
        </p>
      </div>

      <h2 id="typ-nh">16. Typ nominálnej hodnoty (font, hrúbka atď.)</h2>
      <p>
        Dva nominály (5p a 54p), vydané v januári 2010 tlačiarňou Cartor, mali omylom použitý iný typ fontu.
        Namiesto štandardného, ktorý vytvoril Jeffery Matthews, je na známkach <em>Garamond One</em>. Zberateľ ich
        nájde v <em>Classic Album Covers</em> prestige booklete.
      </p>
      <p>
        V roku 1983 boli zavedené užšie číslice. Túto zmenu si vyžiadalo použitie nominálnych hodnôt ako napríklad
        20½, ktoré zaberali príliš veľa miesta. Sedem nominálov existuje s oboma variantami, so širokým aj úzkym
        číslom:
      </p>

      <div className="my-4">
        <div className="max-w-[700px] w-full mx-auto">
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632066232/img/sirka-nh_lp3tbg.jpg"
            alt="Šírka nominálnej hodnoty"
            caption="Šírka nominálnej hodnoty"
            className="h-auto rounded"
          />
        </div>
        <p className="img-caption">Image credit: Robin Harris, Adminware. porovnanie šírky nominálnej hodnoty.</p>
      </div>

      <h2 id="pozicia-nh">17. Pozícia nominálnej hodnoty</h2>
      <p>
        Pri pozornom skúmaní nominálnej hodnoty si všimneme rôzne pozície umiestnenia vzhľadom k okrajom známky a k
        buste. Môže byť posunutá horizontálne aj vertikálne od "ideálnej stredovej" pozície.
      </p>

      <div className="my-4">
        <div className="max-w-[700px] w-full mx-auto">
          <LightboxImage
            src="https://res.cloudinary.com/filatelia-machins/image/upload/v1632081018/img/umiestnenie-nh_iquszm.jpg"
            alt="Vertikálne posuny nominálnej hodnoty"
            caption="Vertikálne posuny nominálnej hodnoty"
            className="h-auto rounded"
          />
        </div>
        <p className="img-caption">Image credit: Robin Harris, Adminware. Vertikálne posuny nominálnej hodnoty.</p>
      </div>

      <p>
        Ako vidieť, pri rôznych vzájomných kombináciách vyššie spomínaných vlastností existuje obrovské množstvo
        typov Machins a záleží len na zberateľovi, do akej hĺbky chce rozlišovať jednotlivé parametre a vrámci
        rozpočtu dopĺňať svoju zbierku.
      </p>
    </SiteLayout>
  );
}
