import { Character, Episode, Info } from '@/interfaces';

const DOMAIN = 'https://rickandmortyapi.com/api';

export const getAllCharacters = async (): Promise<Character[] | undefined> => {
  const response = await fetch(`${DOMAIN}/character`);
  const data: Info<Character[]> = await response.json();
  return data.results;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await fetch(`${DOMAIN}/character/${id}`);
  const data: Character = await response.json();
  return data;
};

export const getCharactersForEpisode = async (
  id: number,
): Promise<string[]> => {
  const response = await fetch(`${DOMAIN}/episode/${id}`);
  const data: Episode = await response.json();

  return data.characters;
};

export const getEntireEpisodeList = async (
  curUrl: string = `${DOMAIN}/episode`,
  total: Episode[] = [],
): Promise<Episode[]> => {
  const response = await fetch(curUrl);

  const data: Info<Episode[]> = await response.json();

  const { info, results } = data;
  if (results) {
    total = total.concat(results);
  }
  if (info?.next) {
    return await getEntireEpisodeList(info.next, total);
  }

  return total;
};

export const getEpisodeById = async (id: number): Promise<Episode> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data: Episode = await response.json();
  return data;
};
