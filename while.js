document.write("Loop 1 (while): ");
var a = 1;

while (a < 52){
    document.write(a);
    if (a < 51){
        document.write(", ");
    }else{
        document.write("<br>");
    }
    a += 2;
}