import { Text } from '@/components/Text';
import { colors } from '@/constants/colors';
import { TextVariant } from '@/components/Text/types';

export const DrawerHeaderRight = () => {
  return (
    <Text variant={TextVariant.title_small} color={colors.onPrimary}>
      Modsen Todo list
    </Text>
  );
};
