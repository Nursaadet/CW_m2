function topla(num1, ...numbers) {
    let total = num1;
    numbers.forEach(num => total += num);
    console.log(total);
}
topla(5);
topla(5, 6);
topla(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
