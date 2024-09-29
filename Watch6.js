function alertbutton(){
    const botao = document.getElementById(butao)
    Swal.fire({
        title: "Adicionado ao Carrinho",
        icon: "success",
        background: '#2e2e2e',
        customClass :{
            confirmButton: 'botao12',
            title: 'titlesweet'
        }
      });
}