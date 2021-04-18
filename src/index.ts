/**
 * @fileoverview The ultimate shortcut to the base64 encode/decode methods.
 * @author Anton Ivanov <anton@ivanov.hk>
 * 
 */

/**
 * Encodes the string using base64.
 * @param {string|number} str - The string to encode.
 * @returns {string} The base64-encoded string.
 */
export function base64encode(str: string | number): string | number{
  if (typeof str !== 'string') {
    if (typeof str === 'number') {
      str = str.toString();
    } else {
      throw new Error('Text to encode must be a string or a number.');
    }
  }

  return Buffer.from(str, 'utf8').toString('base64');
}

/**
 * Decodes the string from base64 to UTF-8.
 * @param {string} str - The base64-encoded string.
 */
export function base64decode(str: string): string {
  if (typeof str !== 'string') {
    throw new Error('Input value must be a string.');
  }

  return Buffer.from(str, 'base64').toString('utf8');
}

export default { base64encode, base64decode };