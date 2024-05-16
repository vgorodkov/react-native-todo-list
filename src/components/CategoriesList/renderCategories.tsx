import { TaskAddCategoryCard } from '@/components/CategoriesList/TaskAddCategoryCard';
import { TaskCategoryCard } from '@/components/CategoriesList/TaskCategoryCard';
import { TaskCategoryProps } from '@/components/CategoriesList/TaskCategoryCard/types';

export const renderCategories =
  (categoriesLength: number) =>
  ({ item, index }: { item: TaskCategoryProps; index: number }) => {
    const { title, backgroundColor, img } = item;
    const isLast = index === categoriesLength - 1;
    return (
      <>
        <TaskCategoryCard title={title} backgroundColor={backgroundColor} img={img} />
        {isLast && <TaskAddCategoryCard />}
      </>
    );
  };
