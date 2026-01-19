let a = [9, 2, 6, 1, 2, 5]
let b = []

let swap = 0
let step = 0


while (step < a.length) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            swap = a[i]
            b.push(a[i + 1])
        }
    }
    step++
}

//WORK IN PROGRESS VERY LEN`
