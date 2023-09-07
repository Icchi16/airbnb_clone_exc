export interface CardDataProps {
  id: number | string;
  data: {
    name: string;
    rating?: number;
    position: number;
    duration: {
      startDate: Date;
      endDate: Date;
    };
    cost: number;
    images: { id: number; src: string }[];
  };
}

export const mainTemp: CardDataProps[] = [
  {
    id: 1,
    data: {
      name: "Wadi Rum Village, Jordan",
      rating: 4.96,
      position: 7041,
      duration: {
        startDate: new Date("October 9 ,2023"),
        endDate: new Date("October 14 ,2023"),
      },
      cost: 296,
      images: [
        { id: 1, src: "/images/test.jpeg" },
        { id: 2, src: "https://picsum.photos/200/300" },
        { id: 3, src: "https://picsum.photos/200/300" },
        { id: 4, src: "https://picsum.photos/200/300" },
        { id: 5, src: "https://picsum.photos/200/300" },
        { id: 6, src: "https://picsum.photos/200/300" },
      ],
    },
  },
];
