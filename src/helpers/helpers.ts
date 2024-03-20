function generatePassword(
  length = 8,
  isUppercase: boolean,
  isLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
) {
  const characters = [];

  if (isUppercase) {
    characters.push(...Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  }

  if (isLowercase) {
    characters.push(...Array.from("abcdefghijklmnopqrstuvwxyz"));
  }

  if (includeNumbers) {
    characters.push(...Array.from("0123456789"));
  }

  if (includeSymbols) {
    characters.push(...Array.from("!@#$%^&*()_+-=[]{}|;:'\",<.>/?"));
  }

  if (characters.length === 0) {
    characters.push(...Array.from("abcdefghijklmnopqrstuvwxyz"));
  }

  // Shuffle the character array for randomness
  characters.sort(() => Math.random() - 0.5);

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

// Webkit cannot style progress so I faked it with a long shadow on the thumb element
const makeLongShadow = (color: string, size: string) => {
  let i = 18;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

export { generatePassword, makeLongShadow };
