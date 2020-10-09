// Write your solution in this file!
const driver = {};
let updateDriverWithKeyAndValue = (driverObj, key, value) => {
    let newDriver = Object.assign({}, driverObj, {[key]: value})
    return newDriver
}

let destructivelyUpdateDriverWithKeyAndValue = (driverObj, key, value) => {
    driverObj[key] = value
    return driverObj
}

let deleteFromDriverByKey = (driverObj, key) => {
    const newObj = {...driverObj}
    delete newObj[key]
    return newObj
}

let destructivelyDeleteFromDriverByKey = (driverObj, key) => {
    delete driverObj[key]
    return driverObj
}
