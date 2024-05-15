import { Text } from '@/components/UI';
import { colors } from '@/constants/colors';
import { TextVariant } from '@/components/UI/Text/types';

export const DrawerHeaderRight = () => {
  return (
    <Text variant={TextVariant.title_small} color={colors.onPrimary}>
      Modsen Todo list
    </Text>
  );
};
