export default function highlightHashtags(text) {
  const splitStringBySpaces = text.split(' ');
  return splitStringBySpaces.map((el) => {
    if (el.includes('#') === true && el.length >= 2) {
      const hashtag = el.slice(0);
      const linkBody = el.slice(1);
      const word = `<a href="/search?tag=${linkBody}">${hashtag}</a>`;
      return word;
    }
    return el;
  }).join(' ');
}
