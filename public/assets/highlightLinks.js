export default function highlightLinks(stringWithLink) {
  const arrFromString = stringWithLink.split(' ');
  return arrFromString.map((el) => {
    if (el.includes('<http') || el.includes('http')) {
      const link = el.slice(0);
      const htmlLink = `<a href="${link}">${link}</a>`;
      return htmlLink;
    }
    return el;
  }).join(' ');
}
