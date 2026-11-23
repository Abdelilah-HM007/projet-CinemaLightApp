import { TMDB_KEY, TMDB_URL, TMDB_IMG } from '@/lib/config';

async function get(path: string) {
  const reponse = await fetch(`${TMDB_URL}${path}?api_key=${TMDB_KEY}&language=fr-FR`);
  return reponse.json();
}

export async function getFilm(id: number, vu: boolean) {
  const data = await get(`/movie/${id}`);
  return {
    id,
    vu,
    titre: data.title || 'Film inconnu',
    annee: data.release_date ? data.release_date.slice(0, 4) : '—',
    genre: data.genres && data.genres[0] ? data.genres[0].name : '',
    note: data.vote_average ? Math.round(data.vote_average * 10) / 10 : 0,
    poster: data.poster_path ? TMDB_IMG + data.poster_path : '',
  };
}

export async function getSerie(id: number, vu: boolean) {
  const data = await get(`/tv/${id}`);
  return {
    id,
    vu,
    titre: data.name || 'Série inconnue',
    annee: data.first_air_date ? data.first_air_date.slice(0, 4) : '—',
    saisons: data.number_of_seasons || 1,
    note: data.vote_average ? Math.round(data.vote_average * 10) / 10 : 0,
    poster: data.poster_path ? TMDB_IMG + data.poster_path : '',
  };
}

export async function getSaison(serieId: number, numSaison: number) {
  const data = await get(`/tv/${serieId}/season/${numSaison}`);
  const listeEpisodes = data.episodes || [];

  return {
    nom: `S${numSaison}`,
    episodes: listeEpisodes.map((ep: any) => ({
      num: ep.episode_number,
      note: ep.vote_average ? Math.round(ep.vote_average * 10) / 10 : 0,
    })),
  };
}
