import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';

export const DrawerHeaderRight = () => {
  return (
    <Text variant={TextVariant.title_small} color={colors.onPrimary}>
      Modsen Todo list
    </Text>
  );
};
