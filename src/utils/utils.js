export function getHeaderData(arr, key) {
  let tempArr = [];
  arr.forEach((item) => tempArr.push(key + "" + item));
  return tempArr;
}

export const calculateTripleMs = (arr, key) => {
  let temp = {};
  const len = arr.length;

  if (len > 0) {
    let mean = 0;
    let median = 0;
    let valueArr = [];
    let mode = 0;
    if (key === "Gamma") {
      for (let i = 0; i < len; i++) {
        const Gamma = calculateGamma(arr[i]);
        mean += Number(Gamma);
        valueArr.push(Number(Gamma));
      }
    } else {
      len > 0 &&
        arr.forEach((item) => {
          mean += Number(item["Flavanoids"]);
          valueArr.push(Number(item["Flavanoids"]));
        });
    }
    mean = mean / len;
    mode = getMode(valueArr, len);
    median = mean - (mean - mode) / 3; //formula for median
    temp = { mean, median, mode };
  }
  return temp;
};

const getMode = (val, len) => {
  const map = getTypes(val, len);
  const largest = [...map.values()].reduce(function (prev, cur, index, array) {
    return prev > cur ? prev : cur;
  });

  return [...map.entries()].filter((item, ind) => item.indexOf(largest) > -1)[0][0];
};

const getTypes = (val, len) => {
  return val.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
};

const calculateGamma = (item) => {
  return (item["Ash"] * item["Hue"]) / item["Magnesium"];
};

export const getAlcoholTypes = (arr, key = "Alcohol") => {
  if (arr.length > 0) {
    const tempArr = [];
    arr.forEach((item) => tempArr.push(item[key]));
    const types = getTypes(tempArr);
    return [...types.keys()];
  }
};

export const getTripleMs = (arr, clsArr, key) => {
  let temp = [];

  for (let i = 0; i < clsArr.length; i++) {
    let one = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]["Alcohol"] === clsArr[i]) {
        one.push(arr[j]);
      }
    }
    temp.push(one);
  }

  let mean = [];
  temp.forEach((item) => {
    mean.push(calculateTripleMs(item, key));
  });
  return mean;
};
