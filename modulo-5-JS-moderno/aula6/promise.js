function testes(){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            const erro = false
            if(erro){
                reject('Erro...');
            }else{
                resolve('A promise foi resolvida com sucesso');
            }

        },2000)
    })


}
/*
//forma tradicional de retornar uma promise
testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err)
})
*/
//forma de retornar por funções assíncronas

async function testes2(){
    await testes()
    alert('olá')
}

testes2()