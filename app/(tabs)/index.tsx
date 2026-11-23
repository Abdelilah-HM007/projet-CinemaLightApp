import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFilms } from '@/hooks/useFilms';
import { useSeries } from '@/hooks/useSeries';
import { FilmCard } from '@/components/FilmCard';
import { SerieCard } from '@/components/SerieCard';
import { FILMS, SERIES } from '@/constants/data';
import { styles } from './index.styles';

export default function HomeScreen() {
  const [onglet, setOnglet] = useState<'films' | 'series'>('films');
  const { data: films, loading: loadingFilms } = useFilms();
  const { data: series, loading: loadingSeries } = useSeries();

  const totalFilmsVus = FILMS.filter((film) => film.vu).length;
  const totalSeriesVues = SERIES.filter((serie) => serie.vu).length;
  const totalAVoir = FILMS.filter((film) => !film.vu).length + SERIES.filter((serie) => !serie.vu).length;

  const enChargement = onglet === 'films' ? loadingFilms : loadingSeries;

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>

      <View style={styles.enTete}>
        <Image source={require('@/assets/images/logo.jpeg')} style={styles.logo} />
        <View>
          <Text style={styles.nomApp}>CinemaLite</Text>
          <Text style={styles.sousTitre}>Votre journal cinéma & séries</Text>
        </View>
      </View>

      <View style={styles.blocStats}>
        <View style={styles.itemStat}>
          <Text style={styles.chiffreStat}>{totalFilmsVus}</Text>
          <Text style={styles.labelStat}>Films vus</Text>
        </View>

        <View style={styles.separateur} />

        <View style={styles.itemStat}>
          <Text style={styles.chiffreStat}>{totalSeriesVues}</Text>
          <Text style={styles.labelStat}>Séries vues</Text>
        </View>

        <View style={styles.separateur} />

        <View style={styles.itemStat}>
          <Text style={styles.chiffreStat}>{totalAVoir}</Text>
          <Text style={styles.labelStat}>À voir</Text>
        </View>
      </View>

      <View style={styles.selecteurOnglets}>
        <TouchableOpacity
          style={[styles.boutonOnglet, onglet === 'films' && styles.boutonOngletActif]}
          onPress={() => setOnglet('films')}
        >
          <Text style={[styles.texteOnglet, onglet === 'films' && styles.texteOngletActif]}>
            Films
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boutonOnglet, onglet === 'series' && styles.boutonOngletActif]}
          onPress={() => setOnglet('series')}
        >
          <Text style={[styles.texteOnglet, onglet === 'series' && styles.texteOngletActif]}>
            Séries
          </Text>
        </TouchableOpacity>
      </View>

      {enChargement ? (
        <View style={styles.zoneChargement}>
          <ActivityIndicator size="large" color="#00D756" />
          <Text style={styles.texteChargement}>Chargement...</Text>
        </View>
      ) : onglet === 'films' ? (
        <View style={styles.grilleFilms}>
          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </View>
      ) : (
        <View>
          {series.map((serie) => (
            <SerieCard key={serie.id} serie={serie} />
          ))}
        </View>
      )}

    </ScrollView>
  );
}
