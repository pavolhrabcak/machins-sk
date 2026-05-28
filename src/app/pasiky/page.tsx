import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import ModalLink from "@/components/ModalLink";
import { GalleryProvider, GalleryTrigger } from "@/components/LightboxGalleryContext";

export const metadata: Metadata = {
  title: "Coil strips - horizontálne pásiky u Machins",
  description: "Známkové rolky a pásiky. Rozdelenie horizontálnych pásikov u Machins. Základné horizontálne pásiky a ich kombinácie. Coils. Coil strips.",
  alternates: { canonical: "https://www.filatelia-machins.sk/pasiky.html" },
};

export default function PasikyPage() {
  return (
    <SiteLayout>
      <h1>Coil strips</h1>
      <p>
        Jednou z foriem, v ktorých sú vydávané známky, je rolka. V angličtine je ekvivalentom označenie <strong>coil</strong>. Tieto Machins
        môžeme rozdeliť na dve základné skupiny - rolky so známkami s rovnakou nominálnou hodnotou, tzv. sinlge-values coils a so známkami
        viacerých nominálnych hodnôt, tzv. multi-value coils.
      </p>
      <h2>Horizontálne pásiky</h2>
      <p>
        Oddelené časti týchto roliek, pásiky niekoľkých kusov známok, sa nazývajú <strong>coil strips</strong>. V tejto kapitole sa
        zameriame na horizontálne pásiky. Tie delíme na dve podskupiny - z roliek dodávaných priamo do poštových známkových automatov
        (označenie G<em>x</em>) a dodávané ako príloha v magazíne Readers Digest (označenie RD<em>x</em>).
      </p>
      <p>
        Čo sa týka peňažného systému, len jediný pásik vyšiel ešte v pre-decimálnej ére, s celkovou nominálnou hodnotou 1 shilling (12p),
        zvyšných 12 pásikov je už v novej desiatkovej mene. Posledný vyšiel v roku 1995.
      </p>

      <GalleryProvider slides={[
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482209/img/coil-1_qf0z1e.jpg", alt: "GS/GL" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-2_jo021u.jpg", alt: "G1/G2" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-3_isfxis.jpg", alt: "G3" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-4_kihbyt.jpg", alt: "G4" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-5_bpsixs.jpg", alt: "G5" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-6_u1vyc9.jpg", alt: "RD1" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-7_r9psyr.jpg", alt: "RD2" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-8_fpse09.jpg", alt: "RD3" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-9_pkt8zk.jpg", alt: "RD4" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-10_lkkl9v.jpg", alt: "RD5" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-11_d1tqtx.jpg", alt: "RD6" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-12_lewazr.jpg", alt: "RD7" },
        { src: "https://res.cloudinary.com/filatelia-machins/image/upload/v1631482210/img/coil-13_etxasu.jpg", alt: "RD8" },
      ]}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4 mb-6 text-sm">
          <caption className="text-left mb-2">
            Tab.: Zoznam 13-tich základných verzií horizontálnych pásikov z roliek (Coil strips)
          </caption>
          <thead>
            <tr>
              <th className="bg-[#003366] text-white px-3 py-2 text-left">Nominálna<br />hodnota</th>
              <th className="bg-[#003366] text-white px-3 py-2 text-left">Rok<br />vydania</th>
              <th className="bg-[#003366] text-white px-3 py-2 text-left">Označenie<br />Britskej pošty</th>
              <th className="bg-[#003366] text-white px-3 py-2 text-left">Označenie<br />v katalógu SG</th>
              <th className="bg-[#003366] text-white px-3 py-2 text-left">Zloženie pásika</th>
              <th className="bg-[#003366] text-white px-3 py-2 text-left">Ukážka</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="px-3 py-2 border-b border-gray-200">1/- (12p)</td>
              <td className="px-3 py-2 border-b border-gray-200">1967-69</td>
              <td className="px-3 py-2 border-b border-gray-200">GS/GL</td>
              <td className="px-3 py-2 border-b border-gray-200">Pre-decimal</td>
              <td className="px-3 py-2 border-b border-gray-200">2p,2p,3p,1p,4p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={0} className="h-[50px] w-[200px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">5p</td>
              <td className="px-3 py-2 border-b border-gray-200">1971</td>
              <td className="px-3 py-2 border-b border-gray-200">G1/G2</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC1/4</td>
              <td className="px-3 py-2 border-b border-gray-200">2p,½p,½p,1p,1p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={1} className="h-[50px] w-[200px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">10p</td>
              <td className="px-3 py-2 border-b border-gray-200">1975</td>
              <td className="px-3 py-2 border-b border-gray-200">G3</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC5/6</td>
              <td className="px-3 py-2 border-b border-gray-200">6p,2p,1p,½p,½p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={2} className="h-[50px] w-[200px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">10p</td>
              <td className="px-3 py-2 border-b border-gray-200">1977</td>
              <td className="px-3 py-2 border-b border-gray-200">G4</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC7</td>
              <td className="px-3 py-2 border-b border-gray-200">7p,1p,1p,½p,½p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={3} className="h-[50px] w-[200px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">10p</td>
              <td className="px-3 py-2 border-b border-gray-200">1980</td>
              <td className="px-3 py-2 border-b border-gray-200">G5</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC8</td>
              <td className="px-3 py-2 border-b border-gray-200">8p,1p,1p + 2 kupóny</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={4} className="h-[50px] w-[200px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">11½p</td>
              <td className="px-3 py-2 border-b border-gray-200">1981</td>
              <td className="px-3 py-2 border-b border-gray-200">RD1</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC9</td>
              <td className="px-3 py-2 border-b border-gray-200">2½p,3p,3p,3p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={5} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">12½p</td>
              <td className="px-3 py-2 border-b border-gray-200">1981</td>
              <td className="px-3 py-2 border-b border-gray-200">RD2</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC10</td>
              <td className="px-3 py-2 border-b border-gray-200">½p,4p,4p,4p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={6} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">13p</td>
              <td className="px-3 py-2 border-b border-gray-200">1984</td>
              <td className="px-3 py-2 border-b border-gray-200">RD3</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC11/12</td>
              <td className="px-3 py-2 border-b border-gray-200">1p,4p,4p,4p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={7} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">14p</td>
              <td className="px-3 py-2 border-b border-gray-200">1988</td>
              <td className="px-3 py-2 border-b border-gray-200">RD4</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC13</td>
              <td className="px-3 py-2 border-b border-gray-200">2p,4p,4p,4p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={8} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">15p</td>
              <td className="px-3 py-2 border-b border-gray-200">1989</td>
              <td className="px-3 py-2 border-b border-gray-200">RD5</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC14</td>
              <td className="px-3 py-2 border-b border-gray-200">4p,4p,4p,3p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={9} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">17p</td>
              <td className="px-3 py-2 border-b border-gray-200">1990</td>
              <td className="px-3 py-2 border-b border-gray-200">RD6</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC15</td>
              <td className="px-3 py-2 border-b border-gray-200">4p,4p,4p,5p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={10} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">18p</td>
              <td className="px-3 py-2 border-b border-gray-200">1991</td>
              <td className="px-3 py-2 border-b border-gray-200">RD7</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC16</td>
              <td className="px-3 py-2 border-b border-gray-200">5p,5p,4p,4p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={11} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200">19p</td>
              <td className="px-3 py-2 border-b border-gray-200">1995</td>
              <td className="px-3 py-2 border-b border-gray-200">RD8</td>
              <td className="px-3 py-2 border-b border-gray-200">UMC17</td>
              <td className="px-3 py-2 border-b border-gray-200">5p,5p,5p,4p</td>
              <td className="px-3 py-2 border-b border-gray-200"><GalleryTrigger index={12} className="h-[50px] w-[160px] object-contain rounded" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      </GalleryProvider>

      <p>
        Pri pre-decimálnych vydaniach je GL označenie{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482212/img/coil-full_yfhson.jpg">
          veľkej rolky
        </ModalLink>{" "}
        s 3000 známkami (tlačiarenský stroj G, Large, 600x5 známok), GS je označenie menšej rolky s 1500 známkami (G, Small, 300x5známok).
        Kompletná GL rolka má v súčasnosti katalógovú hodnotu okolo £1000.
      </p>
      <h2>Čo do zbierky</h2>
      <p>
        Horizontálne pásiky pozostávajú zo 4 resp. 5 známok a z každého pásika tým pádom existuje 4 resp. 5 kombinácií, podľa toho, ako bol
        odtrhnututý z rolky.{" "}
        <ModalLink href="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482214/img/coil-3-five_dydmra.jpg">
          Ukážka 5-kombinácie
        </ModalLink>{" "}
        pre pásik G3.
      </p>
      <div className="callout callout-tip">
        <p>
          <strong>Zberateľský tip:</strong> Základná zbierka 13 pásikov sa dá vyskladať pomerne ľahko a lacno.
          Doplnenie všetkých možných kombinácií je už o čosi náročnejšie. A ak chce zberateľ vytvoriť
          špecializovanú zbierku a rozlišovať do hĺbky aj ďalšie parametre ako je typ lepu, papiera, fosforových
          pásov či vydaní s chybami, to si už vyžaduje viac času i finančných investícií (hlavne pre chybotlače).
        </p>
      </div>
    </SiteLayout>
  );
}
