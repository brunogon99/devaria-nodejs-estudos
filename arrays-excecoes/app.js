try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    //para executar a instrução a seguir é necessário utilizar o comando node \caminho\app.js e escrever na mesma linha nomes de produtos ex. Arroz, banana, macarrao, pao
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutoSolicitadoDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    listaDeProdutoSolicitadoDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento =>{
        return !listaDeProdutoSolicitadoDisponiveis.find(produto => produto === argumento);
    })
    
    listaDeProdutoSolicitadoDisponiveis.forEach(argumento => console.log(`Este produto não esta disponivel: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Não foi possivel executar pedido de compra');
}


