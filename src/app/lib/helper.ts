/**
 * Returns the current time in a default format.
 * @returns Hour : Minutes
 */
export function getCurrentTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hour}:${minutes}`;
}
/**
 * Returns the current date reflecting the specified parameters.
 * @param format 
 * @param separator 
 * @returns Day - Month - Year in the specified format with the specified separator.
 */
export function getCurrentDate(
  format: 'd-m-y' | 'y-m-d' | 'm-d-y' | 'y-d-m' | 'd-y-m' | 'm-y-d' | 'y' = 'd-m-y',
  separator = '-'
) {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  switch (format) {
    case 'd-m-y':
      return `${day}${separator}${month}${separator}${year}`;
    case 'd-y-m':
      return `${day}${separator}${year}${separator}${month}`;
    case 'm-d-y':
      return `${month}${separator}${day}${separator}${year}`;
    case 'm-y-d':
      return `${month}${separator}${year}${separator}${day}`;
    case 'y-d-m':
      return `${year}${separator}${day}${separator}${month}`;
    case 'y-m-d':
      return `${year}${separator}${month}${separator}${day}`;
    case 'y':
      return `${year}`;
  }
}

export function getCurrentDateTime() {
  return `${getCurrentDate()}, ${getCurrentTime()}`;
}

export function automatedTitle() {
  const title = 'New Order';

  return title;
}
