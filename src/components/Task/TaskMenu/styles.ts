import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskMenu: {
    position: 'absolute',
    padding: 8,
    gap: 8,
    top: -24,
    right: 24,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
});
