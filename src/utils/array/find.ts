type GetNameByKeyValueType<T, K extends keyof T> = {
  list: T[];
  key: keyof T;
  value: T[K];
  nameKey: K;
};
export const getNameByKeyValue = <T, K extends keyof T>({
  list,
  key,
  value,
  nameKey,
}: GetNameByKeyValueType<T, K>): string => {
  const foundItem = list.find(item => String(item[key]) === String(value));
  return foundItem && typeof foundItem[nameKey] === 'string' ? (foundItem[nameKey] as string) : '';
};
