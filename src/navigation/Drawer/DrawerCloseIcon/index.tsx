import { Image, StyleSheet } from 'react-native';

export const DrawerCloseIcon = () => {
  return <Image style={styles.closeIcon} source={require('@/assets/icons/arrow_back.png')} />;
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 24,
    height: 24,
  },
});
