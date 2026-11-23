import { useState } from 'react';
import { getSaison } from '@/lib/tmdb';

export function useEpisodes(serieId: number, nbSaisons: number) {
  const [data, setData]       = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  async function charger() {
    if (done) return;
    setLoading(true);
    const nums = Array.from({ length: nbSaisons }, (_, i) => i + 1);
    const res  = await Promise.all(nums.map(n => getSaison(serieId, n)));
    setData(res);
    setLoading(false);
    setDone(true);
  }

  return { data, loading, charger };
}
