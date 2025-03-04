function fizzbuzz1() {
    for (let i = 1; i < 100; i++) {
        console.log(
            (i%3 === 0 ? 'fizz': '') + 
            (i%5 === 0 ? 'buzz': '') || 
            
            i
        )
    }
}

fizzbuzz1()