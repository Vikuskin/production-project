type Mods = Record<string, boolean | string>;

export const getClassNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
  return [cls, ...additional, Object.keys(mods).filter((className) => !!mods[className])].join(' ');
};
