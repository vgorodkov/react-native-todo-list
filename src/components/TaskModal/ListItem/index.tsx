import { View, ViewProps } from 'react-native';

import { MODAL_WIDTH } from '@/constants/task';

import { styles } from './styles';

export const ListItem = ({ children, style, ...props }: ViewProps) => {
  return (
    <View {...props} style={[styles.listItem, style, { width: MODAL_WIDTH }]}>
      {children}
    </View>
  );
};
