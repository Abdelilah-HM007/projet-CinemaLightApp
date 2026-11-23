import { useState } from 'react';
import { View, Text, ActivityIndicator, LayoutChangeEvent } from 'react-native';
import { styles } from './EpisodeGrid.styles';

function getCouleur(note: number) {
  if (note >= 9.0) return '#2563eb';
  if (note >= 8.0) return '#16a34a';
  if (note >= 7.0) return '#ca8a04';
  return '#dc2626';
}

export function EpisodeGrid({ saisons, loading }: { saisons: any[]; loading: boolean }) {
  const [largeur, setLargeur] = useState(0);

  if (loading) {
    return <ActivityIndicator color="#00D756" style={{ marginTop: 10 }} />;
  }

  if (saisons.length === 0) {
    return null;
  }

  const LABEL = 24;
  const GAP = 2;
  const nbSaisons = saisons.length;
  const cellLargeur = largeur > 0 ? (largeur - LABEL - GAP * (nbSaisons - 1)) / nbSaisons : 0;
  const cellHauteur = cellLargeur * 0.55;
  const maxEpisodes = Math.max(...saisons.map((s) => s.episodes.length));

  return (
    <View onLayout={(e: LayoutChangeEvent) => setLargeur(e.nativeEvent.layout.width)}>
      <View style={styles.ligne}>
        <View style={{ width: LABEL }} />
        {saisons.map((saison: any) => (
          <Text key={saison.nom} style={[styles.titreColonne, { width: cellLargeur }]}>
            {saison.nom}
          </Text>
        ))}
      </View>

      {Array.from({ length: maxEpisodes }, (_, i) => (
        <View key={i} style={[styles.ligne, { marginTop: GAP }]}>
          <Text style={[styles.labelEp, { width: LABEL }]}>E{i + 1}</Text>

          {saisons.map((saison: any, index: number) => {
            const episode = saison.episodes[i];

            if (!episode) {
              return <View key={index} style={{ width: cellLargeur, marginLeft: index > 0 ? GAP : 0 }} />;
            }

            return (
              <View
                key={index}
                style={[
                  styles.cellule,
                  {
                    width: cellLargeur,
                    height: cellHauteur,
                    backgroundColor: getCouleur(episode.note),
                    marginLeft: index > 0 ? GAP : 0,
                  },
                ]}
              >
                <Text style={styles.noteEp}>{episode.note || '—'}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}
