const NUMBER_IN_THOUSAND = 3;
const MAXIMUM_INTEREST = 100;

export function toPrice(num: number) {
  const price = num.toString();
  if (price.length > NUMBER_IN_THOUSAND) {
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
  return (num * MAXIMUM_INTEREST) / max;
}

export function createHash(fillter: string, el: string, bool: boolean) {
  let content = el;
  if (content.split(' ').length > 1) {
    content = content.split(' ').join('%20of%20');
  }
  const hash = window.location.hash.slice(1);
  if (bool) {
    if (hash !== '') {
      const a = hash.split('=');
      const arrayCategory: string[] = [];
      const sortCategory: string[] = [];
      a.forEach((value, index) => {
        if (value === '?category') {
          arrayCategory.push(value);
          arrayCategory.push(a[index + 1]);
        } else if (value === '?sort' || value.split('&')[1] === '?sort') {
          sortCategory.push('?sort');
          sortCategory.push(a[index + 1]);
        }
      });
      if (sortCategory.length > 0 && arrayCategory.length > 0) {
        arrayCategory[1] = arrayCategory[1].split('&')[0];
      }
      if (fillter === 'category' && arrayCategory.length > 0) {
        arrayCategory[1] = `${arrayCategory[1]}%E2%86%95${content}`;
      } else if (fillter === 'category' && arrayCategory.length === 0) {
        arrayCategory.push('?category');
        arrayCategory.push(content);
      } else if (fillter === 'sort' && sortCategory.length > 0) {
        sortCategory[1] = content;
      } else if (fillter === 'sort' && sortCategory.length === 0) {
        sortCategory.push('?sort');
        sortCategory.push(content);
      }
      if (content === 'sort-title') {
        sortCategory.splice(0, sortCategory.length);
      }
      if (arrayCategory.length === 0) {
        return `${sortCategory.join('=')}`;
      } else if (arrayCategory.length > 0 && sortCategory.length > 0) {
        return `${arrayCategory.join('=')}&${sortCategory.join('=')}`;
      } else {
        return `${arrayCategory.join('=')}`;
      }
    } else {
      return `?${fillter}=${content}` || '';
    }
  } else {
    const hash = window.location.hash.split('=');
    const arrayhash = window.location.hash.split('=')[1].split('%E2%86%95');
    if (arrayhash.length <= 1) {
      return '';
    } else {
      const filterMass = arrayhash.filter((hash) => hash.toLowerCase() !== content.toLowerCase());
      hash[1] = filterMass.join('%E2%86%95');
      return hash.join('=').slice(1);
    }
  }
}
