// pra rodar usar npx ts-node nome-do-arquivo.ts  troquei agora npm start


//npm i -D typescript ts-node @types/node

//npx tsc --init  

//npx ts-node src/index.ts

interface notificacao {
   id: number;
   titulo: string;
   nome:string;
   tipo: string;
   lida:boolean;
}

const inbox: notificacao[] = [

    {id: 1,
    titulo: "Novo comentário no seu post",
    nome: "Jair Anderson",
    tipo: "comentario",
    lida:false
    }

]
 //function statusLeitura(notificacao:notificacao): string{
    //if(notificacao .lida === true)
       // return "lida"; return "não lida"  } para deixar mais limpo
  

function statusLeitura(notificacao:notificacao): string{
    if(notificacao .lida === true) {
        return "lida";
    }else{
        return "não lida"
    }
    
   
}
