// let p1 = new Promise ( (resolve, reject) =>{
//     setTimeout ( resolve, 5000, 'One')
// } )

// // console.log(p1)

// let p2 = new Promise ( (resolve , reject )=>{
//     setTimeout(resolve, 3000, 'Two')
// })

// // console.log(p2)

// p1.then ((v) => {
//     console.log(v)
// }).catch (() => {
//     console.log(e)
// })

// p2.then( (v) => {
//     console.log(v)
// })


//**use in promise */

// function getIphone (isPassed){
//     return new Promise (( resolve, reject) =>{
//         setTimeout (() => {
//             if (isPassed){
//                 resolve('I have got Iphone')
//             } else {
//                 reject (new Error ('Operation failed'))
//             }
//         }, 4000)
//     })
// }

// getIphone(false)
//     .then( (res) =>{
//         console.log(res)
//     })
//     .catch( (e) => {
//         console.log(e.message)
//     })

// function myPromise (statment){
//     return new Promise ( (fullfiled, reject) => {
//         setTimeout( () => {
//             if (statment){
//                 fullfiled ('This Promise is Working')
//             } else {
//                 reject (new Error(' Error on this Promise'))
//             }
//         }, 3000)
//     })
// }

// myPromise (false)
// .then((result) =>{
//     console.log(result)
// })
// .catch((error) =>{
//     console.log(error.message)
// })

//**Fetch Api Promise */
//  const BASE_URL = 'https://jsonplaceholder.typicode.com'

// //  let vas = fetch(`${BASE_URL}/user/1`)
// //  console.log(vas)

// fetch(`${BASE_URL}/users/1`)
// .then((resp) => resp.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(e)
// })

//**Promise Function */

// function getReq (url , callback){
//     const xml = new XMLHttpRequest ()
//     xml.open('get', url)

//     xml.onreadystatechange = function (e){
//         if (xml.readyState === 4){
//             if ( xml.status === 200){
//                 let res = JSON.parse(xml.response)
//                 callback ( null, res)
//             } else {
//                 callback ( xml.status, null)
//             }
//         }
//     }
//     xml.send ()
// }

// function getReqest (url){
//     return new Promise((resolve, reject) =>{
//         const xml = new XMLHttpRequest ()
//         xml.open('get', url)

//             xml.onreadystatechange = function (e){
//             if (xml.readyState === 4){
//                 if ( xml.status === 200){
//                     let res = JSON.parse(xml.response)
//                     resolve(res)
//                 } else {
//                 reject ( xml.status)
//             }
//         }
//     }
//     xml.send ()
//     })
        
    
// }

// getReqest('https://jsonplaceholder.typicode.com/users/1')
// .then((resp) =>{
//     console.log(resp)
// })
// .catch((e) =>{
//     console.log(e.message)
// })

//**Promise API */

// const delay = s => new Promise ( resolve => setTimeout(resolve, s*1000))

// delay(5)
// .then(()=> console.log(' 5 Sec Dealy'))
// delay(3)
// .then(()=> console.log(' 3 Sec Dealy'))
// delay(2)
// .then(()=> console.log(' 2 Sec Dealy'))
// delay(4)
// .then(()=> console.log(' 4 Sec Dealy'))




