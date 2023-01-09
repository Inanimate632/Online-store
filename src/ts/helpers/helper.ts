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

export function createHash(fillter: string, el: string | null, bool: boolean) {
  let content = el || '';
  if (content.split(' ').length > 1) {
    content = content.split(' ').join('%20of%20');
  }
  const hash = window.location.hash.slice(1);
  if (bool) {
    if (hash !== '') {
      const a = hash.split('=');
      const massCategory: string[] = [];
      const sortCategory: string[] = [];
      a.forEach((value, index) => {
        if (value === '?category') {
          massCategory.push(value);
          massCategory.push(a[index + 1]);
        } else if (value === '?sort' || value.split('&')[1] === '?sort') {
          sortCategory.push('?sort');
          sortCategory.push(a[index + 1]);
        }
      });
      if (sortCategory.length > 0 && massCategory.length > 0) {
        massCategory[1] = massCategory[1].split('&')[0];
      }
      if (fillter === 'category' && massCategory.length > 0) {
        massCategory[1] = `${massCategory[1]}%E2%86%95${content}`;
      } else if (fillter === 'category' && massCategory.length === 0) {
        massCategory.push('?category');
        massCategory.push(content);
      } else if (fillter === 'sort' && sortCategory.length > 0) {
        sortCategory[1] = content;
      } else if (fillter === 'sort' && sortCategory.length === 0) {
        sortCategory.push('?sort');
        sortCategory.push(content);
      }
      if (content === 'sort-title') {
        sortCategory.splice(0, sortCategory.length);
      }
      if (massCategory.length === 0) {
        return `${sortCategory.join('=')}`;
      } else if (massCategory.length > 0 && sortCategory.length > 0) {
        return `${massCategory.join('=')}&${sortCategory.join('=')}`;
      } else {
        return `${massCategory.join('=')}`;
      }
    } else {
      return `?${fillter}=${content}` || '';
    }
  } else {
    const hash = window.location.hash.split('=');
    const hashMass = window.location.hash.split('=')[1].split('%E2%86%95');
    if (hashMass.length <= 1) {
      return '';
    } else {
      const filterMass = hashMass.filter((hash) => hash.toLowerCase() !== content.toLowerCase());
      hash[1] = filterMass.join('%E2%86%95');
      return hash.join('=').slice(1);
    }
  }
}
