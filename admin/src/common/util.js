// 算法
// 数组计数排序
// 第一版
// 缺点不可扩展
// const arr = [2, 6, 3, 8, 1] // 想得到[1, 2, 3, 6, 8]

// const arr1 = new Array(10)

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
//   arr1[arr[i]] = 6
// }
// console.log(arr1)

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === 6) {
//     console.log(i)
//   }
// }
// 第二版
// 扩展性不强
// const arr = [2, 6, 3, 8, 1]
// const arr1 = new Array(arr.length + 10)
// arr1.fill(0)
// console.log(arr)
// console.log(arr1)
// for (let i = 0; i < arr.length; i++) {
//   arr1[arr[i]]++
// }
// const arr3 = []
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1[i]; j++) {
//     arr3.push(i)
//   }
// }
// console.log(arr3)

// 数组计数排序
export function countSort(arr, maxNum) {
  if (!Array.isArray(arr)) {
    return '请传入数组'
  }
  const arr1 = arr
  const arr2 = new Array(maxNum + 10)
  arr2.fill(0)
  for (let i = 0; i < arr1.length; i++) {
    arr2[arr1[i]]++
  }
  // 用来存储正确的排序后数组
  const arr3 = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i]; j++) {
      arr3.push(i)
    }
  }
  return arr3
}
