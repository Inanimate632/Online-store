export function toPrice(num: number) {
  const price = num.toString();
  if (price.length > 3) {
    const thousands = price.slice(0, -3);
    return `${thousands},${price.slice(thousands.length, price.length - thousands.length + 1)}.00`;
  }
  return `${price}.00`;
}

export function switchHash(num: number) {
  const hash = window.location.hash.slice(1);
  const hashMass = hash.split('?');
  if (hashMass[1] === undefined) {
    window.location.hash = `${window.location.hash}?pages=${num}`;
  } else if (hashMass[1] !== undefined) {
    hashMass[1] = hashMass[1].slice(0, -1);
    hashMass[1] = `${hashMass[1]}${num}`;
    window.location.hash = hashMass.join('?');
  }
}
