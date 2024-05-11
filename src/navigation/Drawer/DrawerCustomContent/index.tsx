import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerCloseIcon } from '../DrawerCloseIcon';

export const DrawerCustomContent = (props: DrawerContentComponentProps) => {
  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem icon={DrawerCloseIcon} label="Close" onPress={closeDrawer} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
