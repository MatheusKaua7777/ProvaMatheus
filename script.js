// execicio 07
var m = 1
while(m <= 100)
{
                   console.log(m)
                   m = m + 1
}
// exer 08
var c = 5
while(c <= 50)
                   {
                                      console.log(c)
                                      c = c + 5
                   }
// exer 09
var s = 100
while(s >= 0)
{
                   console.log(s)
                   s = s - 10
}
// exer 01
let nome = document.getElementById("Matheus")
let matheus = document.getElementById("resposta")

function verificar()

{
  matheus.innerHTML = "Ola ," + Matheus.value + ", tudo bem"
}

// 05
var n1 = document.getElementById("numero1")
var n2 = document.getElementById("numero2")
var resposta = document.getElementById("ZICA")

function maior()

{
                   if( n1 > n2 )
                                      {
                                                       resposta.innerHTML  = n1.value
                                      }
                                      else
                                       
                                      {
                                                         resposta.innerHTML = n2.value
                                      }
 }
               
// 03
 var  cemtimetros = document.getElementById("cem")
 var sim = document.getElementById("sim")
 var nr = 100
 function transformar()
 {
                   sim.innerHTML = parseInt(cemtimetros.value) / nr
 }
// 04
 var numeros = document.getElementById("numeros")
 var nao = document.getElementById("nao")
 var f = 1

 function aperta()
 {
       {     
   nao.innerHTML = parseInt(numeros.value) - 1
       }
       {
   nao.innerHTML = parseInt(numeros.value) + 1
       }
 }