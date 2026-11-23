import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#121519',
  },
  contenu: {
    padding: 16,
    paddingBottom: 40,
  },
  enTete: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    marginBottom: 20,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
  nomApp: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sousTitre: {
    color: '#8A96A4',
    fontSize: 12,
  },
  blocStats: {
    flexDirection: 'row',
    backgroundColor: '#1A1F26',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#262D37',
  },
  itemStat: {
    alignItems: 'center',
    flex: 1,
  },
  chiffreStat: {
    color: '#00D756',
    fontSize: 20,
    fontWeight: '800',
  },
  labelStat: {
    color: '#8A96A4',
    fontSize: 11,
    marginTop: 2,
    fontWeight: '500',
  },
  separateur: {
    width: 1,
    height: 24,
    backgroundColor: '#262D37',
  },
  selecteurOnglets: {
    flexDirection: 'row',
    backgroundColor: '#1A1F26',
    borderRadius: 10,
    padding: 4,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#262D37',
  },
  boutonOnglet: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  boutonOngletActif: {
    backgroundColor: '#00D756',
  },
  texteOnglet: {
    color: '#8A96A4',
    fontSize: 13,
    fontWeight: '700',
  },
  texteOngletActif: {
    color: '#0D1115',
  },
  grilleFilms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  zoneChargement: {
    marginTop: 40,
    alignItems: 'center',
    gap: 10,
  },
  texteChargement: {
    color: '#8A96A4',
    fontSize: 13,
  },
});
