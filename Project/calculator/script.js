function add(dig1, dig2) {
    return dig1 + dig2;
}

const subtract = (dig1, dig2) => {
    let big = Math.max(dig1, dig2);
    let small = Math.min(dig1, dig2);
    return big - small;
}
