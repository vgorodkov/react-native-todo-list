import { useNavigation } from '@react-navigation/native';
import { Image, Pressable } from 'react-native';

import { RootStackRoutes } from '@/constants/navigation';

import { styles } from './styles';

export const TaskAddCategoryCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      testID="Main.TaskAddCategory"
      style={styles.addTaskCategory}
      onPress={() => {
        navigation.navigate(RootStackRoutes.ADD_CATEGORY_MODAL);
      }}
    >
      <Image style={styles.addTaskCategoryImg} source={require('@/assets/icons/plus.png')} />
    </Pressable>
  );
};
