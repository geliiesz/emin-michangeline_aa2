document.write("Loop 3 (for loop): ");

for (let a = 1, x = 0; a < 4109, x < 13; a *= 2, x++) {
    document.write(a + x);
    if (x < 12){
        document.write(", ");
    }
}