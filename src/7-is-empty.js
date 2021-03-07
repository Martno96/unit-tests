export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  }
  //checks if it is an array
  else if (stringArrayOrObject.constructor.toString().indexOf("Array") !== -1) { //if you cannot find the index of "Array", it isn't an array
    return stringArrayOrObject.length < 1
  }
  else if (type === 'object') {
    return JSON.stringify(stringArrayOrObject)==JSON.stringify({}) //if turning an object into a string using JSON equates to doing the same with an empty object, then the object must be empty
  }

  return false
}
