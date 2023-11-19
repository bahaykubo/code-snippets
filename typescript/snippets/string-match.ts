/**
 *  Extract item and thing Ids from givenRegex to get UUID between "item/" and "/thing" off the given url
 *  i.e.
 *  from given example url "http://localhost:1007/path/item/yy3d5-55423-1kjkt-ww2yy/thing/xx3d5-55423-1kjkt-ww2xx";
 *  will pick "yy3d5-55423-1kjkt-ww2yy" for the item Id and
 *  "xx3d5-55423-1kjkt-ww2xx" for the thing Id
 */
const getItemDetailsFromUrl = (url: string): any => {
  const matchErrors = [];
  const itemDetails = {};
  const itemId = url.match(/(?<=item\/).*(?=\/thing)/g); // Gets the UUID between "item/" and "/thing"
  if (!itemId) {
    matchErrors.push('item Id');
    itemDetails['itemId'] = null;
  } else {
    itemDetails['itemId'] = itemId[0];
  }

  const thingId = url.match(/(?<=thing\/).*$/g); // Gets the UUID after "thing/"
  if (!thingId) {
    matchErrors.push('thing Id');
    itemDetails['thingId'] = null;
  } else {
    itemDetails['thingId'] = thingId[0];
  }

  if (matchErrors.length >= 1) {
    console.error(`Failed to extract ${matchErrors.join(', ')} from given url:\n${url}`);
  }
  return itemDetails;
};

const urlPath = 'http://localhost:1007/path/itemXX/yy3d5-55423-1kjkt-ww2yy/thingXX/xx3d5-55423-1kjkt-ww2xx';
console.log(getItemDetailsFromUrl(urlPath));
