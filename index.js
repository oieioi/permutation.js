'use strict';

// getPermutations([1,2,3], 4) //-> [1111, 1112, 1113, 1114, 1121, 1122,...]
export default function getPermutations (ary, size) {

  let aryProcessed = ary.map((item) => [item]);

  let createNewPerms = function(a, subsets) {
    let result = [];

    a.forEach((aitem) => {
      let aItemAdded = subsets.map((subset) => { aitem.concat(subset); });
      result = result.concat(aItemAdded);
    });

    return result;
  };

  let f = function (perms, subsets, max) {
    if (perms[0].length === max) {
      return perms;
    }

    f((createNewPerms(perms, subsets)), subsets, max);
  };

  f(aryProcessed, ary, size);

}

//console.log getPermutations(["赤", "青", "黄"], 3).map((i)-> i.join('')).join(',')
