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
    id: "hu",
    region: "Hungary",
    lang: { langText: "Magyar nyelv", langCode: "hu" },
    currency: {
      currencySymbol: "Ft",
      currencyShort: "HUF",
      currencyText: "Hungarian forint",
    },
  },
  {
    id: "hi",
    region: "India",
    lang: { langText: "हिन्दी", langCode: "hi" },
    currency: {
      currencySymbol: "₹",
      currencyShort: "INR",
      currencyText: "Indian rupee",
    },
  },
  {
    id: "id",
    region: "Indonesia",
    lang: { langText: "Bahasa Indonesia", langCode: "id" },
    currency: {
      currencySymbol: "Rp",
      currencyShort: "IDR",
      currencyText: "Indonesia Rupiah",
    },
  },
  {
    id: "is",
    region: "Israel",
    lang: { langText: "עִבְֿרִיתּ", langCode: "is" },
    currency: {
      currencySymbol: "₪",
      currencyShort: "ILS",
      currencyText: "Israeli new shekel",
    },
  },
  {
    id: "jp",
    region: "Japan",
    lang: { langText: "日本語", langCode: "jp" },
    currency: {
      currencySymbol: "¥",
      currencyShort: "JPY",
      currencyText: "Japanese yen",
    },
  },
  {
    id: "ms-my",
    region: "Malaysia",
    lang: { langText: "بهاس ملايو مليسيا", langCode: "ms" },
    currency: {
      currencySymbol: "RM",
      currencyShort: "MYR",
      currencyText: "Malaysian ringgit",
    },
  },
  {
    id: "es-mx",
    region: "Mexico",
    lang: { langText: "Español", langCode: "es" },
    currency: {
      currencySymbol: "$",
      currencyShort: "MXN",
      currencyText: "Mexican peso",
    },
  },
  {
    id: "ar-ma",
    region: "Morocco",
    lang: { langText: "اَلْعَرَبِيَّةُ", langCode: "ar" },
    currency: {
      currencySymbol: "",
      currencyShort: "MAD",
      currencyText: "Moroccan dirham",
    },
  },
  {
    id: "zh-tw",
    region: "Taiwan",
    lang: { langText: "國語", langCode: "zh" },
    currency: {
      currencySymbol: "$",
      currencyShort: "TWD",
      currencyText: "New Taiwan dollar",
    },
  },
  {
    id: "en-nz",
    region: "New Zealand",
    lang: { langText: "English", langCode: "en" },
    currency: {
      currencySymbol: "$",
      currencyShort: "NZD",
      currencyText: "New Zealand dollar",
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
