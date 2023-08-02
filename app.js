const ext= require('lodash')

const items = [1,2 ,[2, 5,[3, 9,[4,0,[2,1]]]]]

const newItems =ext.flattenDeep(items)
console.log(newItems)

