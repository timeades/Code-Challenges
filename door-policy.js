// @ts-check

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    const words = line.split(' ');
  
    if (words.length > 0) {
      return words[0][0];
    }
  
    return '';
  }
  
  /**
   * Format the password for the front-door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the front door password
   */
  export function frontDoorPassword(word) {
    const password = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
    return password;
  }
  
  /**
   * Respond with the correct character, given the line of the
   * poem, if this were said at the back door.
   *
   * @param {string} line
   * @returns {string}
   */
  export function backDoorResponse(line) {
    const word = line.trim();
  
    if (word.length > 0 ) {
      const lastChar = word.length - 1;
      return word[lastChar];
    }
    return '';
  }
  
  /**
   * Format the password for the back door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the back door password
   */
  export function backDoorPassword(word) {
     const passwordBackDoor = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return (passwordBackDoor + ', please')  
  }
  