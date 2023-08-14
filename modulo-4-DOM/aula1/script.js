    var p = document.getElementsByTagName('p')
//seleciona os elementos

//alert(p[1].innerHTML)
//o comando p[x] seleciona o objeto em questao
// a funcao innerHTML apresenta o que eh interno ao objeto

//p[0].innerHTML = 'Manipulado via JS'
// a funcao acima permite que seja alterado o objeto
/*
    for(var i = 0; i < p.length; i++){
        p[i].innerHTML = 'Manipulado via JS - ' + i
    }
*/
//acima eh a alteracao dinamica dos objetos

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i
}