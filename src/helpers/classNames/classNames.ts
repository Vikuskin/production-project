type Mods = Record<string, boolean | string>;

export const getClassNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    Object.entries(mods)
      .filter(([_className, value]) => Boolean(value))
      .map(([className, _value]) => className),
    ...additional,
  ].join(' ');
};
