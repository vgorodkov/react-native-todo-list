import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  fullSize: {
    flex: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSizeCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
});
