const redesSociais = [
	{
		link: "mailto:isabelacb.macedo@gmail.com",
		icone: "./assets/img/email-icon.png",
	},
	{
		link: "https://www.linkedin.com/in/isabelacbmacedo/",
		icone: "./assets/img/linkedin-icon.png",
	},
	{
		link: "https://github.com/belamacedo",
		icone: "./assets/img/github-icon.png",
	},
	{
		link: "https://www.instagram.com/isabelabmacedo/",
		icone: "./assets/img/instagram-icon.png",
	},
];

listarRedesSociais = () => {
	let boxRedes = document.querySelector(".redes-sociais");

	redesSociais.map((valRedes) => {
		boxRedes.innerHTML +=
			`
        <div class="single-redes-sociais">	
		<a href="` +
			valRedes.link +
			`">	
          <figure class="img-redes-sociais grow">		
            <img src=` +
			valRedes.icone +
			` alt="Ícones das redes sociais">			
          </figure>	  
		  </a>
         
        </div>
      `;
	});
};

listarRedesSociais();
