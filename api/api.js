    // URL da API
    const apiUrl = "https://www.abibliadigital.com.br/api/verses/nvi/sl/23";

    // Chamada à API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Exibir os dados da API
        console.log(data);
      });

      const versao = '';
      const livro = document.querySelector("#livro-input");
      const cap = '23';

      const api = `https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${cap}`;

