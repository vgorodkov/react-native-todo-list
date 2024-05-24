import { DrawerToggleButton } from '@react-navigation/drawer';
import { Pressable } from 'react-native';

export const HeaderLeft = () => {
  return (
    <Pressable testID="Drawer.HeaderOpenBtn">
      <DrawerToggleButton />
    </Pressable>
  );
};
