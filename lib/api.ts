import { Character, Episode } from '@/interfaces';

export const getAllCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return data.results as Character[];
};

export const getAllEpisodes = async (): Promise<Episode[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode`);
  const data = await response.json();
  return data.results as Episode[];
};

export const getEpisodeById = async (id: number): Promise<Episode> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  return data as Episode;
};
