import { ChangeEvent, ReactNode } from "react";

export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export interface RootState {
  gameList: {
    loading: boolean,
    gameList: Game[],
    error: string,
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void,
    filter: Filter
  };
}

export interface ThemeType {
  theme: {
    currentTheme: string
  }
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export type Filter = {
  platform?: string,
  category?: string,
  tag?: string,
  sortBy?: string
}