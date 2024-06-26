import { create } from "zustand";
import {
  COLOR_GREEN,
  COLOR_ORANGE,
  COLOR_RED,
  COLOR_VERY_DARK_GREY,
  COLOR_WHITE,
  COLOR_YELLOW,
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
  MIN_PASSWORD_LENGTH,
} from "../utils/constants";
import { generatePassword } from "../helpers/helpers";
import { Store } from "../types/types";

export const useStore = create<Store>((set, get) => ({
  // Default Password Values
  password: "P4$5W0rD1",

  // HanldSlider Move
  sliderValue: MIN_PASSWORD_LENGTH,
  moveSlider: (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    set({ sliderValue: Number(value) });
  },

  // Handle Checkbox Change
  isUppercase: false,
  setIsUppercase: (value: boolean) => set({ isUppercase: value }),
  isLowercase: false,
  setIsLowercase: (value: boolean) => set({ isLowercase: value }),
  includeNumbers: false,
  setIncludeNumbers: (value: boolean) => set({ includeNumbers: value }),
  includeSymbols: false,
  setIncludeSymbols: (value: boolean) => set({ includeSymbols: value }),

  // Handle Password Strength and Status
  name: "",
  lightBars: (value: number) => {
    let strengthColor = COLOR_RED;

    if (value > 4 || value < 1) return;

    for (let level = 1; level <= 4; level++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element: any = document.querySelector(`.strength__level-${level}`);
      element.style.backgroundColor = COLOR_VERY_DARK_GREY;
      element.style.border = `0.2rem solid ${COLOR_WHITE}`;
    }

    switch (value) {
      case 1:
        strengthColor = COLOR_RED;
        set({ name: LEVEL_1 });
        break;
      case 2:
        strengthColor = COLOR_ORANGE;
        set({ name: LEVEL_2 });
        break;
      case 3:
        strengthColor = COLOR_YELLOW;
        set({ name: LEVEL_3 });
        break;
      case 4:
        strengthColor = COLOR_GREEN;
        set({ name: LEVEL_4 });
        break;
    }

    for (let level = 1; level <= value; level++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element: any = document.querySelector(`.strength__level-${level}`);
      element.style.backgroundColor = strengthColor;
      element.style.border = `0.2rem solid ${strengthColor}`;
    }
  },

  strengthValue: 0,

  // Handle Loading State
  isLoading: false,

  validatePasswordStrength: (password) => {
    let strength = 0;

    // Check length
    if (password.length >= 8) strength++;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) strength++;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength++;

    // Check for numbers
    if (/\d/.test(password)) strength++;

    // Check for special characters
    if (/\W/.test(password)) strength++;

    return strength;
  },

  // Generate password
  generatePassword: () => {
    const {
      isUppercase,
      isLowercase,
      includeNumbers,
      includeSymbols,
      sliderValue = MIN_PASSWORD_LENGTH,
    } = get();

    try {
      set({ isLoading: true });

      const generatedPassword = generatePassword(
        sliderValue,
        isUppercase,
        isLowercase,
        includeNumbers,
        includeSymbols
      );

      set({ password: generatedPassword });

      const strength = get().validatePasswordStrength(generatedPassword);
      set({ strengthValue: strength });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      set({ isLoading: false });
    }
  },

  // Set to clipboard
  setCopyToClipboard: () => {
    const { password } = get();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(password);
      set({ isLoading: true });
      setTimeout(() => {
        set({ isLoading: false });
      }, 3000);
    }
  },
}));
