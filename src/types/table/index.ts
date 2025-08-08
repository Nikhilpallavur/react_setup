export type TableColumnType<T> = {
  key?: string;
  title: string;
  dataIndex?: keyof T | '';
  width?: string;
  align?: 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start';
  render?: (value: string, record: T, index: number) => JSX.Element;
}[];

export type AnyObjectType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any; // We can't use "unknown" here because we need to work with the specific values within the object.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: number]: any; // We can't use "unknown" here because we need to work with the specific values within the object.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: symbol]: any; // We can't use "unknown" here because we need to work with the specific values within the object.
};
