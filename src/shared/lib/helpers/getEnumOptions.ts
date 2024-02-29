interface IEnumOption<T extends { [key: string]: string }> {
  value: keyof T;
  content: string;
}

export const getEnumOptions = <T extends { [key: string]: string }>(enumOptions: T): IEnumOption<T>[] =>
  Object.keys(enumOptions).map((key: string) => ({
    value: enumOptions[key],
    content: enumOptions[key],
  }));
