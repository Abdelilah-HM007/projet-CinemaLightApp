import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { EpisodeGrid } from '@/components/EpisodeGrid';
import { useEpisodes } from '@/hooks/useEpisodes';
import { styles } from './SerieCard.styles';

export function SerieCard({ serie }: { serie: any }) {
  const [imageError, setImageError] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const { data: saisons, loading, charger } = useEpisodes(serie.id, serie.saisons);

  function clique() {
    if (!ouvert) {
      charger();
    }
    setOuvert(!ouvert);
  }

  return (
    <View style={styles.conteneur}>
      <TouchableOpacity style={styles.carte} onPress={clique} activeOpacity={0.8}>
        {imageError || !serie.poster ? (
          <View style={styles.posterVide}>
            <Text style={{ fontSize: 24 }}>📺</Text>
          </View>
        ) : (
          <Image
            source={{ uri: serie.poster }}
            style={styles.poster}
            onError={() => setImageError(true)}
          />
        )}

        <View style={styles.infos}>
          <Text style={styles.titre} numberOfLines={1}>
            {serie.titre}
          </Text>
          <Text style={styles.details}>
            {serie.annee} • {serie.saisons} saison{serie.saisons > 1 ? 's' : ''}
          </Text>
          <View style={styles.bas}>
            <Text style={styles.note}>★ {serie.note}</Text>
            {serie.vu && <Text style={styles.vu}>✓ Vue</Text>}
          </View>
        </View>

        <Text style={styles.fleche}>{ouvert ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {ouvert && (
        <View style={styles.zoneGrille}>
          <EpisodeGrid saisons={saisons} loading={loading} />
        </View>
      )}
    </View>
  );
}
