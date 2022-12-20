// forEach

// doubleValues:
  function doubleValues(arr){
    let doubled = [];
    arr.forEach(function(val) {
        doubled.push(val * 2);
    });
    return doubled;
  }

// onlyEvenValues:
function onlyEvenValues(arr){
    let even = [];
    arr.forEach(function(val) {
        if(val % 2 === 0)
        even.push(val);
    });
    return even;
}

// showFirstAndLast:
function showFirstAndLast(arr){
    let firstLast = [];
    arr.forEach(function(val) {
        firstLast.push(val[0] + val[val.length - 1]);
    });
    return firstLast;
}

// addKeyAndValue: Pretty confusing didn't really understand
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

// vowelCount: Confusing didn't really understand
function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

// map

// doubleValuesWithMap:
function doubleValuesWithMap(arr) {
    return arr.map(function(value){
        return value * 2;
    });
}

// valTimesIndex:
function valTimesIndex(arr) {
    return arr.map(function(value, i){
        return value * i;
    });
}

// extractKey:
function extractKey(arr, key) {
    return arr.map(function(val) {
        return key = val;
    });
}

// extractFullName: Got confused by this one as well
function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
}

// filter

// filterByValue:
function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

// find:
function find(arr, search) {
    return arr.filter(function(val) {
      return val === search;
    })[0];
}

// findInObj:
function findInObj(arr, key, search) {
    return arr.filter(function(val){
        return val[key] === search;
    })[0];
}

// removeVowels:
function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

// doubleOddNumbers:
function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }