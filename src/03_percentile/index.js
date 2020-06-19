// One research company wants to build the dashboard where they will be able to see which cities have population 
// that is equal or above 90th percentile of all the cities they have information on.
// 
// To calculate percentile, follow these steps:
// 
// For example we have these seven values: 1,3,7,5,9,5,2
// 
// percentile = 90 //90th percentile
// value_count = 7 //number of provided values
// 
// index = (percentile / 100) * value_count)
// 
// If index is not an integer, round it always to the bigger number.
// 
// If you sort the array, index should tell you the starting element of a subarray that is needed. In our example
// the result is array with element 9.

exports.percentile = function (percentile, data) {
    //TODO implement me
    let index = Math.floor((percentile / 100) * data.length)
    let sortedData = data.sort((a, b) => a - b)
    return [sortedData[index]]
}



