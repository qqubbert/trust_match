import { create } from "zustand";

import type {
  HorizontalKeyword,
  VerticalKeyword,
} from "@shared/types/GradientTypes";

import Anime from "@icons/TagIcons/Content/Anime.svg?react";
import AnimeBG from "@icons/TagIcons/Content/AnimeBG.svg?react";
import Games from "@icons/TagIcons/Content/Games.svg?react";
import GamesBG from "@icons/TagIcons/Content/GamesBG.svg?react";
import Movies from '@icons/TagIcons/Content/Movies.svg?react';
import MoviesBG from '@icons/TagIcons/Content/MoviesBG.svg?react';
import Series from '@icons/TagIcons/Content/Series.svg?react';
import SeriesBG from '@icons/TagIcons/Content/SeriesBG.svg?react';
import Books from '@icons/TagIcons/Content/Books.svg?react';
import BooksBG from '@icons/TagIcons/Content/BooksBG.svg?react';

import Basketball from "@icons/TagIcons/Sport/Basketball.svg?react";
import BasketballBG from "@icons/TagIcons/Sport/BasketballBG.svg?react";
import Football from "@icons/TagIcons/Sport/Football.svg?react";
import FootballBG from "@icons/TagIcons/Sport/FootballBG.svg?react";
import Tennis from "@icons/TagIcons/Sport/Tennis.svg?react";
import TennisBG from "@icons/TagIcons/Sport/TennisBG.svg?react";
import Gym from "@icons/TagIcons/Sport/Gym.svg?react";
import GymBG from "@icons/TagIcons/Sport/GymBG.svg?react";
import Swimming from "@icons/TagIcons/Sport/Swimming.svg?react";
import SwimmingBG from "@icons/TagIcons/Sport/SwimmingBG.svg?react";

import Alcohol from "@icons/TagIcons/Lifestyle/Alcohol.svg?react";
import AlcoholBG from "@icons/TagIcons/Lifestyle/AlcoholBG.svg?react";
import Smoking from "@icons/TagIcons/Lifestyle/Smoking.svg?react";
import SmokingBG from "@icons/TagIcons/Lifestyle/SmokingBG.svg?react";
import Drugs from "@icons/TagIcons/Lifestyle/Drugs.svg?react";
import DrugsBG from "@icons/TagIcons/Lifestyle/DrugsBG.svg?react";

export const useTagsStore = create(() => {
  return {
    content: {
      games: {
        title: "Компьютерные игры",
        hasBGIconsRotation: false,
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
      books: {
        title: "Книги",
        hasBGIconsRotation: false,
        Icon: Books,
        BgIcon: BooksBG,
        gradientConfig: [
          {
            color: "#3A5A4D",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#5A874F",
            xPos: "20%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#9FB46F",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#756937",
            xPos: "right" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
        ],
      },
      anime: {
        title: "Аниме",
        hasBGIconsRotation: true,
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
      movies: {
        title: "Фильмы",
        hasBGIconsRotation: true,
        Icon: Movies,
        BgIcon: MoviesBG,
        gradientConfig: [
          {
            color: "#672A34",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#9D485B",
            xPos: "20%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#A1465A",
            xPos: "25%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#9C74C9",
            xPos: "30%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#7377F7",
            xPos: "40%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#564DA2",
            xPos: "right" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
        ],
      },
      series: {
        title: "Сериалы",
        hasBGIconsRotation: true,
        Icon: Series,
        BgIcon: SeriesBG,
        gradientConfig: [
          {
            color: "#40190C",
            xPos: "-10%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#DAAA2C",
            xPos: "30%" as HorizontalKeyword,
            yPos: "-90%" as VerticalKeyword,
          },
          {
            color: "#9D81A7",
            xPos: "100%" as HorizontalKeyword,
            yPos: "200%" as VerticalKeyword,
          },
          {
            color: "#583D39",
            xPos: "100%" as HorizontalKeyword,
            yPos: "0%" as VerticalKeyword,
          },
        ],
      },
    },
    sport: {
      basketball: {
        title: "Баскетбол",
        hasBGIconsRotation: false,
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
        hasBGIconsRotation: false,
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
      tennis: {
        title: "Теннис",
        hasBGIconsRotation: false,
        Icon: Tennis,
        BgIcon: TennisBG,
        gradientConfig: [
          {
            color: "#8FD179",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#2DB87A",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#E1AD5E",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
      swimming: {
        title: "Плавание",
        hasBGIconsRotation: false,
        Icon: Swimming,
        BgIcon: SwimmingBG,
        gradientConfig: [
          {
            color: "#B0CBDB",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#3D96FF",
            xPos: "60%" as HorizontalKeyword,
            yPos: "50%" as VerticalKeyword,
          },
          {
            color: "#62B8FF",
            xPos: "right" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
        ],
      },
      gym: {
        title: "Спортивный зал",
        hasBGIconsRotation: false,
        Icon: Gym,
        BgIcon: GymBG,
        gradientConfig: [
          {
            color: "#324A68",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#1EEB74",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#324A68",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
    },
    lifestyle: {
      alcohol: {
        title: "Алкоголь",
        hasBGIconsRotation: false,
        Icon: Alcohol,
        BgIcon: AlcoholBG,
        gradientConfig: [
          {
            color: "#382429",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#883A6A",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#382429",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
      smoking: {
        title: "Курение",
        hasBGIconsRotation: false,
        Icon: Smoking,
        BgIcon: SmokingBG,
        gradientConfig: [
          {
            color: "#6A3915",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#BCAA2E",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#6A3915",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
      drugs: {
        title: "Наркотики",
        hasBGIconsRotation: false,
        Icon: Drugs,
        BgIcon: DrugsBG,
        gradientConfig: [
          {
            color: "#233439",
            xPos: "left" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#576970",
            xPos: "center" as HorizontalKeyword,
            yPos: "center" as VerticalKeyword,
          },
          {
            color: "#233439",
            xPos: "right" as HorizontalKeyword,
            yPos: "bottom" as VerticalKeyword,
          },
        ],
      },
    }
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
