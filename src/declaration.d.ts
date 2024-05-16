import { MainStackParamList } from './types/navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
