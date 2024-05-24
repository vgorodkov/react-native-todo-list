import { Image, View } from 'react-native';

import { Text } from '@/components/UI';
import { Button } from '@/components/UI/Button';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';

import { APP_DESCRIPTION, APP_TITLE, BTN_TEXT } from './constants';
import { styles } from './styles';
import { OnboardingScreenProps } from './types';

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const onStartBtnPress = () => {
    navigation.navigate('Drawer');
  };

  return (
    <View style={styles.container} testID="Onboarding">
      <Image
        style={styles.welcomeImg}
        source={require('@/assets/imgs/welcome.png')}
        testID="Onboarding.Main_img"
      />
      <View style={styles.appInfo}>
        <Text color={colors.primaryText} variant={TextVariant.title_medium}>
          {APP_TITLE}
        </Text>
        <Text
          variant={TextVariant.body_small}
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
