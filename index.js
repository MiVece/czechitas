let prvni_cislo = Number(prompt("Zadejte první číslo:"));
while (isNaN(prvni_cislo)) {
  prvni_cislo = Number(prompt("To není číslo. Zkuste to znovu:"));
}

let druhe_cislo = Number(prompt("Zadejte druhé číslo:"));
while (isNaN(druhe_cislo)) {
  druhe_cislo = Number(prompt("To není číslo. Zkuste to znovu:"));
}

let treti_cislo = Number(prompt("Zadejte třetí číslo:"));
while (isNaN(treti_cislo)) {
  treti_cislo = Number(prompt("To není číslo. Zkuste to znovu:"));
}

function max3 (a,b,c) {
    if (a>b && a>c)
        return a
    else if (b>a && b>c)
        return b
    else
        return c
};

document.body.innerHTML +=  `Největší ze zadaných čísel je <span class="numberStyle">${max3(prvni_cislo, druhe_cislo, treti_cislo)}</span>.`;

