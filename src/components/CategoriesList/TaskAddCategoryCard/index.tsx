import { useNavigation } from '@react-navigation/native';
import { Image, Pressable } from 'react-native';

import { styles } from './styles';

export const TaskAddCategoryCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      testID="Main.TaskAddCategory"
      style={styles.addTaskCategory}
      onPress={() => {
        navigation.navigate('AddCategoryModal');
      }}
    >
      <Image style={styles.addTaskCategoryImg} source={require('@/assets/icons/plus.png')} />
    </Pressable>
  );
};
