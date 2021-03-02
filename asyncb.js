//** AJAX  & callback*/
// const xhr = new XMLHttpRequest()
// xhr.open('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e){
//     if (xhr.readyState === 4){
//         if (xhr.status === 200){
//             let user = JSON.parse(xhr.response)
//             console.log(user)
//         } else{
//             console.log(xhr.status)
//         }
//     }
// }
// xhr.send()

// const xml = new XMLHttpRequest()

// xml.open('get', 'https://jsonplaceholder.typicode.com/posts')

// xml.onreadystatechange = function (e){
//     if (xml.readyState ===4){
//         if (xml.status ===200){
//             console.log(xml.response)
//         } else {
//             console.log(xml.status)
//         }
//     }
// }
// xml.send()

// function request ( url, callback){
//     const xml = new XMLHttpRequest ()
//     xml.open('get', url)

//     xml.onreadystatechange =  function (e){
//         if (xml.readyState === 4){
//             if (xml.status === 200){
//                 let res = JSON.parse(xml.response)
//                 callback (null, res)
//             }else {
//                 cllback(xml.status, null)
//             }
//         }
//     }
//     xml.send()
// }

// request ('https://jsonplaceholder.typicode.com/users', (err, resp ) => {
//     if (err){
//         console.log(err)
//     } else {
//         console.log(resp)
//     }
// })

// const xml = new XMLHttpRequest ()

// xml.open('get', 'https://jsonplaceholder.typicode.com/users')

// xml.onreadystatechange = function (e){
//     if (xml.readyState === 4){
//         if ( xml.status === 200){
//             let user = JSON.parse (xml.response)
//             console.log(user)
//         } else {
//             console.log(xml.status)
//         }
//     }
// }

// xml.send()

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

// getReq ('https://jsonplaceholder.typicode.com/posts', (errr, ress) => {
//     if (errr){
//         console.log(errr)
//     } else {
//         // console.log(ress)
//         ress.forEach ( r => console.log(r.title))
//     }
// })

// getReq ('https://jsonplaceholder.typicode.com/users', (errr, ress) => {
//     if (errr){
//         console.log(errr)
//     } else {
//         // console.log(ress)
//         ress.forEach ( r => console.log(r.name))
//     }
// })