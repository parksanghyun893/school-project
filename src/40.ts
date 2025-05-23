function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let temp = b;
        b += a;
        a = temp;
    }
    return b;
}
