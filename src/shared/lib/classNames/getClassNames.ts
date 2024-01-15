type Mods = Record<string, boolean | string>;

export const getClassNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
  const filteredMods = Object.keys(mods).filter((className) => !!mods[className]);

  return [cls, ...additional, ...filteredMods].join(' ').trim();
};
