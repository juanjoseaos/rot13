// ROT13

function rot13(str) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  const index = x => input.indexOf(x);
  const translate = x => (index(x) > -1 ? output[index(x)] : x);
  return str.split('').map(translate).join('');
}

console.log(rot13('gr irb ra yn fnyn qr npgbf'));
