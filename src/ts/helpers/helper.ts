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

export function countPercent(num: number, max: number) {
  return (num * 100) / max;
}

export function createHash(fillter: string, el: HTMLElement, bool: boolean) {
  const hash = window.location.hash.slice(1);
  if (bool) {
    if (hash !== '') {
      const a = hash.split('=');
      a.push(el.textContent || '');
      a.splice(0, 1);
      return `?${fillter}=${a.join('%E2%86%95')}` || '';
    } else {
      return `?${fillter}=${el.textContent}` || '';
    }
  } else {
    const hashMass = window.location.hash.split('=')[1].split('%E2%86%95');
    if (hashMass.length <= 1) {
      return '';
    } else {
      const filterMass = hashMass.filter((hash) => hash.toLowerCase() !== el.textContent?.toLowerCase());
      return `?${fillter}=${filterMass.join('%E2%86%95')}` || '';
    }
  }
}
