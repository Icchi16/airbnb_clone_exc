import { Key, ReactElement, ReactNode } from "react";
import CategoryLink from "../components/footer/footerComps/CategoryLink";

export interface QuickLinkBoxProps {
  id: string;
  title: string;
  links: QuickLinkProps[];
}

export interface QuickLinkProps {
  id: string | number;
  text: string;
  url: string;
}

export const quickLinkSupport: Partial<QuickLinkBoxProps> = {
  id: "support",
  title: "Support",
  links: [
    {
      id: 0,
      text: "Help Center",
      url: "/help",
    },
    {
      id: 1,
      text: "AirCover",
      url: "/aircover",
    },
    {
      id: 2,
      text: "Combating discrimination",
      url: "/against-discrimination",
    },
    {
      id: 3,
      text: "Supporting people with disabilities",
      url: "/accessability",
    },
    {
      id: 4,
      text: "Cancellation options",
      url: "/help",
    },
    {
      id: 5,
      text: "Report neighborhood concern",
      url: "/neighbors",
    },
  ],
};

export const quickLinkHosting: Partial<QuickLinkBoxProps> = {
  id: "hosting",
  title: "Hosting",
  links: [
    {
      id: 0,
      text: "Airbnb your home",
      url: "/host",
    },
    {
      id: 1,
      text: "AirCover for Hosts",
      url: "/aircover-for-hosts",
    },
    {
      id: 2,
      text: "Hosting resources",
      url: "/resources",
    },
    {
      id: 3,
      text: "Community forum",
      url: "/help",
    },
    {
      id: 4,
      text: "Hosting responsibly",
      url: "/help",
    },
    {
      id: 5,
      text: "Airbnb-friendly apartments",
      url: "/airbnb-friendly",
    },
  ],
};

export const quickLinkAirbnb: Partial<QuickLinkBoxProps> = {
  id: "airbnb",
  title: "Airbnb",
  links: [
    {
      id: 0,
      text: "Newsroom",
      url: "/press/news",
    },
    {
      id: 1,
      text: "New features",
      url: "/release",
    },
    {
      id: 2,
      text: "Careers",
      url: "/careers",
    },
    {
      id: 3,
      text: "Investors",
      url: "/investor",
    },
    {
      id: 4,
      text: "Gift cards",
      url: "/giftcards",
    },
    {
      id: 5,
      text: "Airbnb.org disaster relief",
      url: "/airbnb-org",
    },
  ],
};

export interface ScrollableTab {
  id: string | number;
  text: string | Key;
  onClick?: ([...args]: any) => {};
  content?: ReactNode;
  image?: string;
}

export type ScrollableTabs = ScrollableTab[];

export const footerCategory: ScrollableTabs = [
  {
    id: "popular",
    text: "Popular",
    content: <CategoryLink />,
  },
  {
    id: "artCulture",
    text: "Art & Culture",
    content: <CategoryLink />,
  },
  {
    id: "outdoors",
    text: "Outdoors",
    content: <CategoryLink />,
  },
  {
    id: "mountains",
    text: "Mountains",
    content: <CategoryLink />,
  },
  {
    id: "beach",
    text: "Beach",
    content: <CategoryLink />,
  },
  {
    id: "uniqueStays",
    text: "Unique Stays",
    content: <CategoryLink />,
  },
  {
    id: "categories",
    text: "Categories",
    content: <CategoryLink />,
  },
  {
    id: "thingsToDo",
    text: "Things to do",
    content: <CategoryLink />,
  },
  {
    id: "AirbnbFriendlyApartments",
    text: "Airbnb-friendly apartments",
    content: <CategoryLink />,
  },
];
