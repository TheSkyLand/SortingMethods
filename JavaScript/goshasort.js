let a = [9, 2, 6, 1, 2, 5]

let step = 0;
while (step < a.length) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            swap = a[i]
            a[i] = a[i + 1]
            a[i + 1] = swap
        }
    }
    step++
}

for (let i = 0; i < a.length; i++)
{
    console.log(a[i])
}

