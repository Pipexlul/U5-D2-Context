const myKey = "10yearsinthejointmadeyouafreakingXD";

export const encrypt = (str) => {
  let keyCopy = myKey;
  const textLength = str.length;
  const encryptedText = [];

  while (keyCopy.length < textLength) {
    keyCopy += keyCopy;
  }

  for (let i = 0; i < textLength; i++) {
    const xor = str.charCodeAt(i) ^ keyCopy.charCodeAt(i);

    let hex = xor.toString(16);
    if (hex.length === 1) {
      hex = "0" + hex;
    }

    encryptedText.push(hex);
  }

  return encryptedText.join("");
};

export const decrypt = (str) => {
  let keyCopy = myKey;
  const textLength = str.length;
  const decryptedText = [];

  while (keyCopy.length < textLength / 2) {
    keyCopy += keyCopy;
  }

  for (let i = 0; i < textLength; i += 2) {
    const xor = parseInt(str.substr(i, 2), 16) ^ keyCopy.charCodeAt(i / 2);
    decryptedText.push(String.fromCharCode(xor));
  }

  return decryptedText.join("");
};

export const randomLetter = () => {
  const letters = "abcdefghijklmnñopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};
