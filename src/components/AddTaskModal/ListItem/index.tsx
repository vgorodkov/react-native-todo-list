import { View, ViewProps } from 'react-native';

import { styles } from './styles';

interface ListItemProps extends ViewProps {}

export const ListItem = ({ children, style, ...props }: ListItemProps) => {
  return (
    <View {...props} style={[styles.listItem, style]}>
      {children}
    </View>
  );
};
