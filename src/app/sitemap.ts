import type { MetadataRoute } from "next";

const BASE_URL = "https://www.filatelia-machins.sk";

const routes = [
  { path: "/",                     priority: 1.0, changeFreq: "monthly"  },
  { path: "/parametre",            priority: 0.9, changeFreq: "monthly"  },
  { path: "/nvi",                  priority: 0.8, changeFreq: "monthly"  },
  { path: "/regionalne",           priority: 0.8, changeFreq: "monthly"  },
  { path: "/prilezitostne",        priority: 0.8, changeFreq: "monthly"  },
  { path: "/hongkong",             priority: 0.8, changeFreq: "monthly"  },
  { path: "/pasiky",               priority: 0.8, changeFreq: "monthly"  },
  { path: "/medziharcie",          priority: 0.7, changeFreq: "monthly"  },
  { path: "/popis-harku",          priority: 0.7, changeFreq: "monthly"  },
  { path: "/ochranne-prvky",       priority: 0.7, changeFreq: "monthly"  },
  { path: "/rarity",               priority: 0.7, changeFreq: "monthly"  },
  { path: "/pohladnice-a-postery", priority: 0.6, changeFreq: "monthly"  },
  { path: "/pojmy",                priority: 0.7, changeFreq: "monthly"  },
  { path: "/zdroje",               priority: 0.6, changeFreq: "monthly"  },
  { path: "/slania",               priority: 0.5, changeFreq: "weekly"   },
  { path: "/kontakt",              priority: 0.4, changeFreq: "yearly"   },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    priority,
    changeFrequency: changeFreq,
    lastModified: new Date(),
  }));
}
