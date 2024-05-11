import { Text } from '@/components/Text';
import { TextVariant } from '@/components/Text/types';
import { colors } from '@/constants/colors';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { APP_DESCRIPTION, APP_TITLE, BTN_TEXT } from './constants';
import { Button } from '@/components/Button';
import { OnboardingScreenProps } from './types';

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const onStartBtnPress = () => {
    navigation.navigate('Drawer');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.welcomeImg}
        source={require('@/assets/imgs/welcome.png')}
        resizeMode="contain"
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
      <Button onPress={onStartBtnPress}>
        <Text color={colors.onPrimary} variant={TextVariant.label_large}>
          {BTN_TEXT}
        </Text>
      </Button>
    </View>
  );
};
