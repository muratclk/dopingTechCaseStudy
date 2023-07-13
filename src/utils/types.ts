import {StyleProp} from 'react-native';

/**
 * Routing Types
 **/

export type RootStackParamList = {
  QuestionsScreen: undefined;
  ResultScreen: undefined;
};

/**
 * Component Types
 **/

export type AnswerColumnProps = {
  item: QuestionType;
};

export type AnswerSheetProps = {
  setopenAnswerSheet: React.Dispatch<React.SetStateAction<any>>;
};

export type ButtonProps = {
  success?: boolean;
  label: string;
  preIcon?: boolean;
  suffixIcon?: boolean;
  style?: StyleProp<any>;
  onPress?: () => void;
};

export type HeaderProps = {
  setopenAnswerSheet: React.Dispatch<React.SetStateAction<any>>;
};

export type MoreButtonProps = {
  setopenAnswerSheet: React.Dispatch<React.SetStateAction<any>>;
};

export type OptionButtonProps = {
  data: {
    id: string;
    texts: {
      text: string;
      bold: boolean;
      underline: boolean;
    }[];
  };
  checked?: boolean;
  handleSelectOption: (answer: string) => void;
};

export type ProgressBarProps = {
  step: number;
  steps: number;
  height: number;
};

export type TimerProps = {
  durationInMinute: number;
};

/**
 * Other Types
 **/

export type addAnswerType = {
  id: number;
  answer: string;
};

export type richText = {
  id?: number;
  text: string;
  bold: boolean;
  underline: boolean;
};

export type QuestionType = {
  id: number;
  answer: string;
  description: richText[];
  userAnswer?: string;
  question: richText[];
  options: {
    id: string;
    texts: richText[];
  }[];
};
