import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ligne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titreColonne: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    color: '#555',
    marginTop: 8,
  },
  labelEp: {
    fontSize: 10,
    color: '#555',
    textAlign: 'right',
    paddingRight: 4,
  },
  cellule: {
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteEp: {
    fontSize: 9,
    fontWeight: '700',
    color: '#fff',
  },
});
