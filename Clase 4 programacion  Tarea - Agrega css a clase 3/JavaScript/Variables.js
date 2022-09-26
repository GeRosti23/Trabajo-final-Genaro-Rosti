var pase = prompt("Que edad tenes?");

console.log(pase);

if (pase >= 18) {
    window.alert("Sos mayor, podes continuar");
}
else {
    window.confirm("Estas seguro que desea continuar? La pagina no se hara responsable a partir de este momento.");
}