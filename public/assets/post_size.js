export default function postSize(string) {
  let stringCopy = string.slice();

  if (stringCopy.includes('<http')) {
    stringCopy = stringCopy.split('<').join(' ').split('>').join(' ');
  }
  if (stringCopy.includes('http')) {
    const arrFromString = stringCopy.split(' ');
    stringCopy = arrFromString.filter((el) => !el.includes('http')).join(' ').trim().length;
    return stringCopy;
  }
  return stringCopy.length;
}
