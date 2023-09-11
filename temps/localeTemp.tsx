export interface LocaleProps {
  id: string | number;
  region?: string;
  lang?: { langText: string; langCode: string };
  currency?: {
    currencySymbol: string;
    currencyShort: string;
    currencyText: string;
  };
}

export const langsTemp: LocaleProps[] = [
  {
    id: "en-uk",
    region: "United Kingdom",
    lang: { langText: "English", langCode: "en" },
    currency: {
      currencySymbol: "£",
      currencyShort: "GBP",
      currencyText: "Pound sterling",
    },
  },
  {
    id: "en-au",
    region: "Australia",
    lang: { langText: "English", langCode: "en" },
    currency: {
      currencySymbol: "$",
      currencyShort: "AUD",
      currencyText: "Australian dollar",
    },
  },
  {
    id: "pt-br",
    region: "Brazil",
    lang: { langText: "Português", langCode: "pt" },
    currency: {
      currencySymbol: "R$",
      currencyShort: "BRL",
      currencyText: "Brazilian real",
    },
  },
  {
    id: "bg",
    region: "Bulgari",
    lang: { langText: "български език", langCode: "bg" },
    currency: {
      currencySymbol: "лев",
      currencyShort: "BGN",
      currencyText: "Bulgarian lev",
    },
  },
  {
    id: "en-ca",
    region: "Canada",
    lang: { langText: "English", langCode: "en" },
    currency: {
      currencySymbol: "$",
      currencyShort: "CAD",
      currencyText: "Canadian dollar",
    },
  },
  {
    id: "es-cl",
    region: "Chile",
    lang: { langText: "Español", langCode: "es" },
    currency: {
      currencySymbol: "$",
      currencyShort: "CLP",
      currencyText: "Chilean peso",
    },
  },
  {
    id: "zh-cn",
    region: "Chinese",
    lang: { langText: "中文", langCode: "zh" },
    currency: {
      currencySymbol: "¥",
      currencyShort: "CNY",
      currencyText: "Chinese yuan",
    },
  },
  {
    id: "es-co",
    region: "Colombia",
    lang: { langText: "Español", langCode: "es" },
    currency: {
      currencySymbol: "$",
      currencyShort: "COP",
      currencyText: "Colombian peso",
    },
  },
  {
    id: "es-cr",
    region: "Costa Rica",
    lang: { langText: "Español", langCode: "es" },
    currency: {
      currencySymbol: "₡",
      currencyShort: "CRC",
      currencyText: "Costa Rican colon",
    },
  },
  {
    id: "hr",
    region: "Croatia",
    lang: { langText: "Hrvatski", langCode: "hr" },
    currency: {
      currencySymbol: "kn",
      currencyShort: "HRK",
      currencyText: "Croatian kuna",
    },
  },
  {
    id: "cs",
    region: "Czech",
    lang: { langText: "Čeština", langCode: "cs" },
    currency: {
      currencySymbol: "Kč",
      currencyShort: "CZK",
      currencyText: "Czech koruna",
    },
  },
  {
    id: "da",
    region: "Denmark",
    lang: { langText: "Dansk", langCode: "da" },
    currency: {
      currencySymbol: "kr",
      currencyShort: "DKK",
      currencyText: "Danish krone",
    },
  },
  {
    id: "ar-ae",
    region: "United Arab Emirates",
    lang: { langText: "اَلْعَرَبِيَّةُ", langCode: "ar" },
    currency: {
      currencySymbol: "د.إ",
      currencyShort: "AED",
      currencyText: "Emirati dirham",
    },
  },
  {
    id: "eur",
    currency: {
      currencySymbol: "€",
      currencyShort: "EUR",
      currencyText: "Euro",
    },
  },
  {
    id: "zh-hk",
    region: "Hong Kong",
    lang: { langText: "廣東話", langCode: "zh" },
    currency: {
      currencySymbol: "$",
      currencyShort: "HKD",
      currencyText: "Hong Kong dollar",
    },
  },
  {
    id: "vn",
    region: "Vietnam",
    lang: { langText: "Tiếng việt", langCode: "vn" },
    currency: {
      currencySymbol: "₫",
      currencyShort: "VND",
      currencyText: "Vietnam dong",
    },
  },
];
