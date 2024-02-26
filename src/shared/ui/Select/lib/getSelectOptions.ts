interface ISelectOption<T extends { [key: string]: string }> {
  value: keyof T;
  content: string;
}

export const getSelectOptions = <T extends { [key: string]: string }>(enumOptions: T): ISelectOption<T>[] =>
  Object.keys(enumOptions).map((key: string) => ({
    value: enumOptions[key],
    content: enumOptions[key],
  }));
