/**Async Function */
// function any() {
//     Promise.reslove('Test')
// }

// async function myAsy (){
//     return 'PPP'
// }

// console.log(myAsy())
// myAsy()
// .then((res) => {
//     console.log(res)
// })

// myAsy()
// .then((res) => {
//     alert(res)
// })


// let p1 = Promise.resolve('This is Promise One')

// function testP (){
//     p1.then((v) => alert(v))
// }

// testP()

// async function aspp (){
//     let v = await p1
//     alert(v)
// }

// aspp()

// let pp1 = new Promise((resolve) =>{
//     setTimeout (resolve , 5000 , 'PP! Promise')
// })

// async function callPp1 (){
//     let v = await pp1
//     alert (v)
//     console.log(v)
// }

// callPp1()

// async function fatchdata (){
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')

//     let data = await res.json()
//     // console.log(data)
//     let name = data.map((u) => u.name)
//     console.log(name)
// }

// fatchdata()

// async function fatchdata (){
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users1')

//     let data = await res.json()
//     // console.log(data)
//     let name = data.map((u) => u.name)
//     console.log(name)
//     } catch(e){
//         console.log(e.message)
//     }
// }

// fatchdata()

// let promises = [Promise.resolve(1), Promise.resolve (2), Promise.resolve(3)]

// async function mulP (){
//     let res = await Promise.all(promises)
//     console.log(res)
// }

// mulP()

//**Async Itterator */

let asyIterator = {
    [Symbol.asyncIterator](){
        let i = 0;
        return {
            next(){
                if ( i < 5){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
}

let itterator = asyIterator[Symbol.asyncIterator]();

// (async function (){
//     let result = await itterator.next()
//     console.log(result)
//     console.log(await itterator.next())
//     console.log(await itterator.next())
//     console.log(await itterator.next())
//     console.log(await itterator.next())
//     console.log(await itterator.next())
//     console.log(await itterator.next())
// })()

//**For await of Loop in Async Ittrerator */

// (async function (){
//     for await ( let vas of asyIterator){
//         console.log(vas)
//     }
// })()

//**Async Geberator  function*/

async function* myAss (){
    let i = 0

    while (true){
        if (i > 5)return
        yield await Promise.resolve(i++)
    }
}

;(async function(){
    for await( let v of myAss()){
        console.log(v)
    }
})()