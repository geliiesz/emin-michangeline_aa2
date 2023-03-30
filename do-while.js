document.write("Loop 2 (do-while): ");
var a = 2;

do{
    document.write(a);
    if (a < 50){
        document.write(", ");
    }else{
        document.write("<br>");
    }
    a += 2;
}while (a <= 50);