export function SortList(list, key, order) {
  if (key === 'StartDate' || key === 'BirthDate') {
    if (order) {
      return list.sort(function (a, b) {
        return new Date(a[key]) - new Date(b[key]);
      });
    } else {
      return list.sort(function (a, b) {
        return new Date(b[key]) - new Date(a[key]);
      });
    }
  }
  if (order) {
    return list.sort(function (a, b) {
      return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    });
  } else {
    return list.sort(function (a, b) {
      return b[key] < a[key] ? -1 : b[key] > a[key] ? 1 : 0;
    });
  }
}

export function SearchList(list, inputSearch) {
  const result = [];
  list.map((el) => {
    let match = false;
    Object.keys(el).map((key) => {
      const value = el[key].toLowerCase();
      if (value.includes(inputSearch)) match = true;
    });
    if (match) {
      result.push(el);
    }
  });

  return result;
}
