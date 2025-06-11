import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@MovieApp:favorites';

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error);
    return [];
  }
};

export const addToFavorites = async (movie: any) => {
  try {
    const favorites = await getFavorites();
    const newFavorites = [...favorites, movie];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    return newFavorites;
  } catch (error) {
    console.error('Erro ao adicionar aos favoritos:', error);
    throw error;
  }
};

export const removeFromFavorites = async (movieId: number) => {
  try {
    const favorites = await getFavorites();
    const newFavorites = favorites.filter((movie: any) => movie.id !== movieId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    return newFavorites;
  } catch (error) {
    console.error('Erro ao remover dos favoritos:', error);
    throw error;
  }
}; 