import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  conteneur: {
    marginBottom: 12,
  },
  carte: {
    flexDirection: 'row',
    backgroundColor: '#1E232A',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  poster: {
    width: 65,
    height: 95,
  },
  posterVide: {
    width: 65,
    height: 95,
    backgroundColor: '#2A303A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infos: {
    flex: 1,
    padding: 12,
    gap: 4,
  },
  titre: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  details: {
    color: '#8A96A4',
    fontSize: 12,
  },
  bas: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 2,
  },
  note: {
    color: '#00D756',
    fontSize: 13,
    fontWeight: '700',
  },
  vu: {
    color: '#00D756',
    fontSize: 12,
  },
  fleche: {
    paddingHorizontal: 16,
    color: '#8A96A4',
    fontSize: 12,
  },
  zoneGrille: {
    backgroundColor: '#15191E',
    borderRadius: 10,
    padding: 12,
    marginTop: 6,
  },
});
