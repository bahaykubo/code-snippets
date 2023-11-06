// Search using string search
const searchStateByStringSearch = (address) => {
  if (address.search(', VIC,' | ', WA,') < 0) {
    return 'Match';
  } else {
    return 'No Match';
  }
};

// Search using index of
const searchStateByIndexOf = (address) => {
  switch (true) {
    case address.indexOf(', VIC,') >= 0:
    case address.indexOf(', WA,') >= 0:
      return 'Match';
    default:
      return 'No Match';
  }
};

function doThis() {
  console.log('this');
}

doThis();

module.exports = {
  searchStateByStringSearch,
  searchStateByIndexOf,
};
