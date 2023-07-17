interface ColorType {
  primary: string,
  secondary: string,
  border: string,
};

// light mode
const ColorsLight: ColorType = {
  'primary':          'black',
  'secondary':        'white',
  'border':           '#C4C4C4',
};

// dark mode
const ColorsDark: ColorType = {
  'primary':          'white',
  'secondary':        'black',
  'border':           '#C4C4C4',
};


export { ColorsLight, ColorsDark };
export type { ColorType };

