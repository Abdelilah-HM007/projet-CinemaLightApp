import { useState, useEffect } from 'react';
import { SERIES } from '@/constants/data';
import { getSerie } from '@/lib/tmdb';

export function useSeries() {
  const [data, setData]       = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled(SERIES.map(s => getSerie(s.id, s.vu))).then(res => {
      setData(res.filter(r => r.status === 'fulfilled').map((r: any) => r.value));
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
