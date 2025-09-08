export default function verifyEmail(email) {
  let res = false;
  if (email.includes('@') && email.includes('.')) {
    if (!email.startsWith('@') && !email.endsWith('@')) {
      email.split('@').map((el) => {
        if (el.includes('.')) {
          if (!el.startsWith('.') && !el.endsWith('.')) {
            res = true;
          }
        }
        return el;
      });
    }
  }
  return res;
}

console.log(verifyEmail('example'));
