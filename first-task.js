const groupBy = (arr, key) => {
  if (key == undefined) {
    return 'error';
  }
  else if (arr == undefined) {
   return 'error';
  }
  else if(arr.some(arr => arr[key] === undefined)) {
    return {};
  }
  else {
    return arr.reduce(function(array, item) {
      if (!array[item[key]]) {
        array[item[key]] = [];
      }
      array[item[key]].push(item);
      return array;
    }, {});
  }
};