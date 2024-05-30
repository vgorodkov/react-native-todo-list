import { Image, View } from 'react-native';

import { Text } from '@/components/UI';
import { Button } from '@/components/UI/Button';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { RootStackRoutes } from '@/constants/navigation';

import { APP_DESCRIPTION, APP_TITLE, BTN_TEXT } from './constants';
import { styles } from './styles';
import { OnboardingScreenProps } from './types';

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const onStartBtnPress = () => {
    navigation.navigate(RootStackRoutes.DRAWER);
  };

  return (
    <View style={styles.container} testID="Onboarding">
      <Image
        style={styles.welcomeImg}
        source={require('@/assets/imgs/welcome.png')}
        testID="Onboarding.Main_img"
      />
      <View style={styles.appInfo}>
        <Text color={colors.primaryText} variant={TextVariant.TITLE_MEDIUM}>
          {APP_TITLE}
        </Text>
        <Text
          variant={TextVariant.BODY_SMALL}
          style={styles.appDescription}
          color={colors.secondaryText}
        >
          {APP_DESCRIPTION}
        </Text>
      </View>
      <Button onPress={onStartBtnPress} testID="Onboarding.StartBtn">
        {BTN_TEXT}
      </Button>
    </View>
  );
};
