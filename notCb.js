// let arr = [ 1,2,3,4]

// let sqr = arr.map( function (v) {
//     return v*v
// })

// let sqr = arr.map( (v) => v*v )

// console.log(sqr)

// function asMap ( arr, cb){
//     return arr.map(v => {
//         setTimeout( cb, 0)
//     })
// }

// let qq = asMap ( arr, v => v*v*v)
// console.log(qq)

// function asMap ( arr, cb){
//     return arr.map(v => {
//         // setTimeout( cb.bind(null, v), 0)
//         setTimeout ( () => cb(v), 0 )
//     })
// }

// let qq = asMap ( arr, v => { console.log(v)})
// console.log(qq)