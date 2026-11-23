import { useState, useEffect } from 'react';
import { FILMS } from '@/constants/data';
import { getFilm } from '@/lib/tmdb';

export function useFilms() {
  const [data, setData]       = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled(FILMS.map(f => getFilm(f.id, f.vu))).then(res => {
      setData(res.filter(r => r.status === 'fulfilled').map((r: any) => r.value));
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
