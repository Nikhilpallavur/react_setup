export function tableSkeltonData<T extends Partial<{ name: string }>>(count: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    const data = { name: '' } as T; // Type assertion to ensure compatibility with T
    result.push(data);
  }
  return result;
}
