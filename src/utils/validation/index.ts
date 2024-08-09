export function isNonEmptyString(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isNumber(value: unknown): boolean {
  return typeof value === 'number' && !isNaN(value);
}

export function isEmail(value: unknown): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof value === 'string' && emailPattern.test(value);
}

export function isURL(value: unknown): boolean {
  try {
    new URL(value as string);
    return true;
  } catch {
    return false;
  }
}

export function isInRange(value: unknown, min: number, max: number): boolean {
  return typeof value === 'number' && value >= min && value <= max;
}

export function isDate(value: unknown): boolean {
  return typeof value === 'string' && !isNaN(Date.parse(value));
}

export function hasMinLength(value: unknown, minLength: number): boolean {
  return typeof value === 'string' && value.length >= minLength;
}

export function hasMaxLength(value: unknown, maxLength: number): boolean {
  return typeof value === 'string' && value.length <= maxLength;
}

export function matchesPattern(value: unknown, pattern: RegExp): boolean {
  return typeof value === 'string' && pattern.test(value);
}

export function isBoolean(value: unknown): boolean {
  return typeof value === 'boolean';
}

export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export function isObject(value: unknown): boolean {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// Example usage:
// const email = "test@example.com";
// console.log(isEmail(email)); // true

// const url = "https://example.com";
// console.log(isURL(url)); // true

// const number = 5;
// console.log(isInRange(number, 1, 10)); // true

// const date = "2023-07-03";
// console.log(isDate(date)); // true

// const string = "hello";
// console.log(hasMinLength(string, 3)); // true
// console.log(hasMaxLength(string, 10)); // true
