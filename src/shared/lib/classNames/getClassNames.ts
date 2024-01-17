type Mods = Record<string, boolean | string>;

export const getClassNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
  const filteredMods = Object.keys(mods).filter((className) => !!mods[className]);
  const filteredAdditionals = additional.filter((addClass) => addClass !== 'undefined' && addClass);

  return [cls, ...filteredAdditionals, ...filteredMods].join(' ').trim();
};
