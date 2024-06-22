export interface ControllBtnsProps {
  handleScrollForward: () => void;
  handleScrollBack: () => void;
  currentStep: number;
  category: string;
  id?: string;
}
