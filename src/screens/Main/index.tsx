import { TaskCategoryCard } from '@/components/TaskCategoryCard';
import { TaskCategoryProps } from '@/components/TaskCategoryCard/types';
import { TimeFilter } from '@/components/TimeFilter';
import { TaskTodayInfo } from '@/components/TaskTodayInfo';
import { FlatList, View } from 'react-native';
import { TaskAddCategoryCard } from '@/components/TaskAddCategoryCard';
import { spacing } from '@/constants/spacing';
import { Text } from '@/components/Text';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { TextVariant } from '@/components/Text/types';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Modal } from '@/components/Modal';
import { styles } from './styles';

const timeFilters = ['Today', 'Week', 'Month'];

const categories = [
  {
    title: 'School',
    img: require('@/assets/icons/school.png'),
    backgroundColor: '#2A8899',
  },
  {
    title: 'Work',
    img: require('@/assets/icons/work.png'),
    backgroundColor: '#5EB0D2',
  },
  {
    title: 'Shop',
    img: require('@/assets/icons/shop.png'),
    backgroundColor: '#BE8972',
  },
  {
    title: 'Read',
    img: require('@/assets/icons/read.png'),
    backgroundColor: '#646FD4',
  },
  {
    title: 'Work out',
    img: require('@/assets/icons/workout.png'),
    backgroundColor: '#83BC74',
  },
];

export const MainScreen = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const renderCategories = ({ item, index }: { item: TaskCategoryProps; index: number }) => {
    const { title, backgroundColor, img } = item;
    const isLast = index === categories.length - 1;
    return (
      <>
        <TaskCategoryCard title={title} backgroundColor={backgroundColor} img={img} />
        {isLast && <TaskAddCategoryCard onPress={() => setIsModalShown(true)} />}
      </>
    );
  };

  return (
    <View style={{ paddingVertical: spacing.l, paddingHorizontal: spacing.m, gap: spacing.m }}>
      <Modal isModalVisible={isModalShown} closeModal={() => setIsModalShown(false)}>
        <Input placeholder="Write category title" label="Category" />
        <Button>
          <Text variant={TextVariant.label_large} color={colors.onPrimary}>
            Add
          </Text>
        </Button>
      </Modal>
      <TaskTodayInfo />
      <Input placeholder="Search tasks" icon={require('@/assets/icons/search.png')} />
      <View style={styles.timeFiltersContainer}>
        {timeFilters.map((timeFilter) => (
          <TimeFilter key={timeFilter} title={timeFilter} />
        ))}
      </View>
      <View style={styles.categoriesContainer}>
        <FlatList data={categories} renderItem={renderCategories} numColumns={3} />
      </View>
    </View>
  );
};
