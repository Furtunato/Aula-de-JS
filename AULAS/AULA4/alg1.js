// lacos de repeticao

// for
// for (condição) {
// bloco de código
//}

for (let i = 0; i < 11; i++) { // i = i + 1 comparando e incrementando de 1 em 1
    console.log(i);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    }

for (let i = 20; i >= 11; i--) { // i = i - 1 comparando e decrementando de 1 em 1
    console.log(i); // 20, 19, 18, 17, 16, 15, 14, 13, 12, 11
    }

for (let i = 0; i <=100; i += 10) { // i = i + 10  i += 10 comparando e incrementando de 10 em 10
    console.log(i); // 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    }

// while
// while (condição) {
// bloco de código
//}

let i = 0;
while (i < 10) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++;
    }

let j = 10;
while (j > 0) {
    console.log(j); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    j--;
    }

let h = 0;    
while (h <= 100) {
    console.log(h);
    h += 10;
}

// do while
// do {
// bloco de código  
//} while (condição)

let m = 9;
do {
    console.log(m);
    m++;
} while (m < 10);

let k = 15;
do while (k < 25) {
    console.log(k);
    k++;
} while (k < 15);

let l = 0;
do {
    console.log(l);
    l += 10;
} while (l <= 100);

//break

for(let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

//continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;

    }
    console.log(i);
}