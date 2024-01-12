type Mods = Record<string, boolean | string>;

export const getClassNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional,
    Object.keys(mods).filter((className) => !!mods[className]),
  ].join(' ');
};
