
exports.min = function min (array) {
    return  number = arguments.length && array.length ? Math.min.apply(null, array) : 0 ;
}

exports.max = function max (array) {
    return  number = arguments.length && array.length ? Math.max.apply(null, array) : 0 ;
}

exports.avg = function avg (array) {
    return number = arguments.length && array.length ? array.reduce((result, elem)=>result+elem)/array.length : 0 ;
    }
