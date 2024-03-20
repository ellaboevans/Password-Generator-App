export type Store = {
  password: string;
  setPassword: (password: string) => void;
  sliderValue: number;
  setSliderValue: (sliderValue: number) => void;
  moveSlider: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getSliderValue: () => void;
  isUppercase: boolean;
  setIsUppercase: (isUppercase: boolean) => void;
  isLowercase: boolean;
  setIsLowercase: (isLowercase: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (includeNumbers: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (includeSymbols: boolean) => void;
  lightBars: (value: number) => void;
  name: string;
  generatePassword: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setToClipboard: () => void;
  strengthValue: number;
  setStrengthValue?: () => void;
  validatePasswordStrength: (password: string) => number;
};

export type CheckBoxProps = {
  text: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setter: any;
  checked?: boolean;
};

export type SliderProps = {
  min: number;
  max: number;
  classes: string;
  updateValue: (value: number) => void;
};

export type ButtonProps = {
  disabled?: boolean;
};

export type HeaderProps = {
  currentpassword: string;
};
