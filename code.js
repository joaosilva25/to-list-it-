const input=document.querySelector('input');
const ul= document.querySelector('ul');

function entrada (event) {
    if (event.code === 'Enter' && input.value !== '') { /* o input.value !== é uma expressão condidional que irá
    verificar se meu input está vázio, caso ele esteja No contexto do exemplo anterior, a expressão input.value !== '' é 
    usada para verificar se o usuário digitou alguma tarefa na caixa de entrada antes de adicioná-la à lista de tarefas. 
    Se o usuário não digitou nada, a função adicionarTarefa não fará nada 
    e o novo elemento de lista não será adicionado.*/

    const novoItem = document.createElement('li');
    novoItem.textContent = input.value; /*Quando defino o textContent ele me diz que conteúdo do elemento será
      substituído pelo novo valor atribuído no caso o input.value que se trata do valor de entrada do usuário no input,
      além do mais ao selecionar a variável novoItem estou dizendo que será ele o elemento que terá seu valor substituido
      sendo ele meu (li)*/
    ul.append(novoItem);
    input.value = ''; /* responsável por limpar meu campo após inserido*/
    }
  }
  
  input.addEventListener('keydown', entrada);



