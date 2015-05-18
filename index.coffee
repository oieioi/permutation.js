# 順列取得
# [1,2,3], 4 -> [1111, 1112, 1113, 1114, 1121, 1122,...]
getPermutations = (ary, size)->

  aryProcessed = ary.map (item) -> [item]

  createNewPerms = (a, subsets) ->
    result = []
    a.forEach (aitem) ->
      aItemAdded = subsets.map (subset) ->
        aitem.concat subset
      result = result.concat aItemAdded
    result

  f = (perms, subsets, size)->
    if perms[0].length is size
      return perms
    f (createNewPerms perms, subsets), subsets, size

  f aryProcessed, ary, size

#console.log do resolve
console.log getPermutations(["赤", "青", "黄"], 3).map((i)-> i.join('')).join(',')
