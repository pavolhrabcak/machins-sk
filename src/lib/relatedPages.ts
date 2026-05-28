export interface RelatedPage {
  href: string;
  label: string;
}

export const relatedPages: Record<string, RelatedPage[]> = {
  "/": [
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/pojmy", label: "Slovník pojmov" },
    { href: "/rarity", label: "Rarity" },
  ],
  "/parametre": [
    { href: "/ochranne-prvky", label: "Ochranné prvky" },
    { href: "/pasiky", label: "Pásiky – zvitky" },
    { href: "/popis-harku", label: "Popis hárku" },
  ],
  "/nvi": [
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/regionalne", label: "Regionálne vydania" },
    { href: "/rilezitostne", label: "Príležitostné vydania" },
  ],
  "/regionalne": [
    { href: "/nvi", label: "NVI Machins" },
    { href: "/rilezitostne", label: "Príležitostné vydania" },
    { href: "/hongkong", label: "Hong Kong" },
  ],
  "/rilezitostne": [
    { href: "/regionalne", label: "Regionálne vydania" },
    { href: "/nvi", label: "NVI Machins" },
    { href: "/pohladnice-a-postery", label: "Pohľadnice a postery" },
  ],
  "/hongkong": [
    { href: "/regionalne", label: "Regionálne vydania" },
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/rarity", label: "Rarity" },
  ],
  "/pasiky": [
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/medziharcie", label: "Medzihárčie" },
    { href: "/popis-harku", label: "Popis hárku" },
  ],
  "/medziharcie": [
    { href: "/pasiky", label: "Pásiky – zvitky" },
    { href: "/popis-harku", label: "Popis hárku" },
    { href: "/parametre", label: "Prehľad parametrov" },
  ],
  "/popis-harku": [
    { href: "/medziharcie", label: "Medzihárčie" },
    { href: "/ochranne-prvky", label: "Ochranné prvky" },
    { href: "/parametre", label: "Prehľad parametrov" },
  ],
  "/ochranne-prvky": [
    { href: "/popis-harku", label: "Popis hárku" },
    { href: "/rarity", label: "Rarity" },
    { href: "/parametre", label: "Prehľad parametrov" },
  ],
  "/rarity": [
    { href: "/ochranne-prvky", label: "Ochranné prvky" },
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/pojmy", label: "Slovník pojmov" },
  ],
  "/pohladnice-a-postery": [
    { href: "/rilezitostne", label: "Príležitostné vydania" },
    { href: "/zdroje", label: "Užitočné zdroje" },
    { href: "/pojmy", label: "Slovník pojmov" },
  ],
  "/pojmy": [
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/zdroje", label: "Užitočné zdroje" },
    { href: "/pasiky", label: "Pásiky – zvitky" },
  ],
  "/zdroje": [
    { href: "/pojmy", label: "Slovník pojmov" },
    { href: "/parametre", label: "Prehľad parametrov" },
    { href: "/rarity", label: "Rarity" },
  ],
};
