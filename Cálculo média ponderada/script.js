//Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente

function calcular(){
  let m1 = document.querySelector('input#m1')
  m1 = Number(m1.value)
  let m2 = document.querySelector('input#m2')
  m2 = Number(m2.value)
  let m3 = document.querySelector('input#m3')
  m3 = Number(m3.value)
  let total = ((m1*2)+(m2*3)+(m3*5))/(2+3+5)
    res.innerHTML = ` ${total}`
 
}