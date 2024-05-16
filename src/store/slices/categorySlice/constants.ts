import { TodoTaskCategory } from '@/types/todo';

export const initialCategories: TodoTaskCategory[] = [
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
