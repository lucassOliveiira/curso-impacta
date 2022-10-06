/* Shift + Alt + A = Comentar varias linhas

const p = new Promise ((resolve, reject) => {
    try {
        resolve(function(){
            // . . .
        })
    } catch (e) {
        reject (e)
    }
}) 
*/

let promise = new Promise ((resolve, reject) => {
    let x = Math.random()
    if (x > 0.5) {
        resolve('Valor válido: ' + x)
    } else {
        reject('Valor inválido ou insuficiente: ' + x)
    }
})

function mostrarResp(s) {
    console.log('Resposta: ')
    console.log(s)
}

promise
    .then(mostrarResp) //resolve
    .catch(console.error) //reject