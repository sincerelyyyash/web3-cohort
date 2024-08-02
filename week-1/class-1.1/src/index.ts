import * as crypto from 'crypto';

function findHash(prefix: string): { input: string, hash: string } {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}

const result = findHash('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

