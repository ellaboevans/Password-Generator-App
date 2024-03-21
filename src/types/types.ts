export type Store = {
  password: string;
  sliderValue: number;
  moveSlider: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  setCopyToClipboard: () => void;
  strengthValue: number;
  validatePasswordStrength: (password: string) => number;
};

export type CheckBoxProps = {
  text: string;
  id: string;
  setter: (value: boolean) => void;
  checked?: boolean;
};

export type SliderProps = {
  min: number;
  max: number;
  classes: string;
};

export type ButtonProps = {
  disabled?: boolean;
};

export type HeaderProps = {
  currentpassword: string;
};
