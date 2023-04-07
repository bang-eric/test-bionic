// SOAL 1
function printBintang(n) {
  let result = []
  let count = 1
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < n + 3; j++) {
      if (j === count || j === count + 1) {
        temp += '*'
      } else {
        temp += j + 1
      }
    }
    result.push(temp)
    count += 1
    temp = ''
  }
  console.log(result)
}

printBintang(5)


// SOAL 2
let harga = [10, 7, 5, 8, 11, 9, 1]
function selisih(harga) {

  let angka1
  let angka2
  let terbesar
  let pertama
  let kedua
  let result = 0


  for (let i = 0; i < harga.length; i++) {
    for (let j = 0; j < harga.length; j++) {
      if (j > i) {
        pertama = harga[i]
        kedua = harga[j]
        terbesar = pertama - kedua
        if (terbesar > result) {
          result = terbesar
          angka1 = pertama
          angka2 = kedua
        }
      }
    }
  }

  console.log(result, `(${angka1} dan ${angka2})`);
}

selisih(harga)