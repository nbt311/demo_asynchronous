function start() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Starting")
            resolve()
        }, 2000)
    })

}

function doing() {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Doing")
            resolve()
        }, 1500)
    })
}

function done() {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Done")
        })
    }, 500)
}

async function test(){
    await start();
    await doing();
    done();
}
test();