let N1;
let N2;
let N3;
let N4;

N1 = parseFloat(prompt("Digite um numero "  ));
N2 = parseFloat(prompt("Digite um numero "  ));
N3 = parseFloat(prompt("Digite um numero "  ));
N4 = parseFloat(prompt("Digite um numero "  ));
let media = (N1 + N2 + N3 + N4) / 4;

alert("Sua média foi de " + media);

if (media >= 6 && media <= 10) 
{
  alert(" VOCÊ FOI APROVADO CABAÇO!!!");
} 
else 
{
  alert("VOCÊ FOI REPROVADO CABAÇO!!!");
}
