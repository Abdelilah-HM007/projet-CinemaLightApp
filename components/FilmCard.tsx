import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './FilmCard.styles';

export function FilmCard({ film }: { film: any }) {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.carte}>
      {imageError || !film.poster ? (
        <View style={styles.posterVide}>
          <Text style={{ fontSize: 30 }}>🎬</Text>
        </View>
      ) : (
        <Image
          source={{ uri: film.poster }}
          style={styles.poster}
          onError={() => setImageError(true)}
        />
      )}

      <Text style={styles.titre} numberOfLines={1}>{film.titre}</Text>

      <View style={styles.bas}>
        <Text style={styles.note}>★ {film.note}</Text>
        {film.vu && <Text style={styles.vu}>✓</Text>}
      </View>
    </View>
  );
}
