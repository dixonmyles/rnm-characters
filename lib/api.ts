export interface rnmApiResult {
  id: string;
  name: string;
  image: string;
}

export const getPhotos = async (): Promise<rnmApiResult[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return data.results as rnmApiResult[];
};
