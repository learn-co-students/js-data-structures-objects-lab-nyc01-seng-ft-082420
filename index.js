// Write your solution in this file!
// nondestructive 
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    let newObj = Object.assign({}, obj, {[key]: value})
    return newObj

};



//destructive update
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
};

//destructive delte


//nondestructive delete

function deleteFromDriverByKey(obj, key) {
    let newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
};

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
};

