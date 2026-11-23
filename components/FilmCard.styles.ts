import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  carte: {
    width: '48%',
    marginBottom: 16,
  },
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },
  posterVide: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
    backgroundColor: '#1C2228',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
  bas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  note: {
    color: '#00D756',
    fontSize: 12,
    fontWeight: '700',
  },
  vu: {
    color: '#00D756',
    fontSize: 12,
  },
});
