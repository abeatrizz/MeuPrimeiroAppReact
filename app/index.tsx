import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IMAGE_BASE_URL } from '../constants/Api';
import { getPopularMovies, searchMovies } from '../services/api';
import { addToFavorites, getFavorites, removeFromFavorites } from '../services/storage';

export default function HomeScreen() {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
    loadFavorites();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await getPopularMovies();
      setMovies(data);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadMovies();
      return;
    }

    try {
      setLoading(true);
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (error) {
      console.error('Erro na busca:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    
    try {
      if (isFavorite) {
        await removeFromFavorites(movie.id);
      } else {
        await addToFavorites(movie);
      }
      loadFavorites();
    } catch (error) {
      console.error('Erro ao atualizar favoritos:', error);
    }
  };

  const renderMovie = ({ item }) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    return (
      <View style={styles.movieCard}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.overview} numberOfLines={3}>
            {item.overview}
          </Text>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item)}
          >
            <Text style={styles.favoriteButtonText}>
              {isFavorite ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar filmes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          style={styles.favoritesButton}
          onPress={() => router.push('/favorites')}
        >
          <Text style={styles.favoritesButtonText}>❤️ Favoritos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        refreshing={loading}
        onRefresh={loadMovies}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  favoritesButton: {
    backgroundColor: '#ffebee',
    padding: 8,
    borderRadius: 8,
  },
  favoritesButtonText: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  poster: {
    width: 100,
    height: 150,
  },
  movieInfo: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  overview: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  favoriteButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  favoriteButtonText: {
    fontSize: 14,
  },
}); 