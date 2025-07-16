import { create } from "zustand";

import type {
  HorizontalKeyword,
  VerticalKeyword,
} from "@shared/types/GradientTypes";

import Anime from "@icons/TagIcons/Content/Anime.svg?react";
import AnimeBG from "@icons/TagIcons/Content/AnimeBG.svg?react";
import Games from "@icons/TagIcons/Content/Games.svg?react";
import GamesBG from "@icons/TagIcons/Content/GamesBG.svg?react";
// import Movies from '@icons/TagIcons/Content/Movies.svg?react';
// import MoviesBG from '@icons/TagIcons/Content/MoviesBG.svg?react';
// import Series from '@icons/TagIcons/Content/Series.svg?react';
// import SeriesBG from '@icons/TagIcons/Content/SeriesBG.svg?react';
import Basketball from "@icons/TagIcons/Sport/Basketball.svg?react";
import BasketballBG from "@icons/TagIcons/Sport/BasketballBG.svg?react";
import Football from "@icons/TagIcons/Sport/Football.svg?react";
import FootballBG from "@icons/TagIcons/Sport/FootballBG.svg?react";
export const useTagsStore = create(() => {
  return {
    content: {
      games: {
        title: "Компьютерные игры",
        Icon: Games,
        BgIcon: GamesBG,
        gradientConfig: [
          {
            color: "#052e36",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#1EB875",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#052e36",
            xPos: "right" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
        ],
      },
      anime: {
        title: "Аниме",
        Icon: Anime,
        BgIcon: AnimeBG,
        gradientConfig: [
          {
            color: "#DE4327",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#F8B57E",
            xPos: "right" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
        ],
      },
    },
    sport: {
      basketball: {
        title: "Баскетбол",
        Icon: Basketball,
        BgIcon: BasketballBG,
        gradientConfig: [
          {
            color: "#533831",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#C7661D",
            xPos: "center" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
          {
            color: "#EC3B3C",
            xPos: "60%" as HorizontalKeyword,
            yPos: "0%" as VerticalKeyword,
          },
          {
            color: "#7D3257",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
      football: {
        title: "Футбол",
        Icon: Football,
        BgIcon: FootballBG,
        gradientConfig: [
          {
            color: "#66af3c",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#ffb780",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#c06223",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
    },
  };
});


// export const useTagsStore = create((set) => ({
//   tags: {},
//   isLoading: false,
//   error: null,

//   fetchTags: async () => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await fetch('/api/tags');
//       const data = await response.json();
//       set({ tags: data, isLoading: false });
//     } catch (e) {
//       set({ error: e, isLoading: false });
//     }
//   }
// }));
