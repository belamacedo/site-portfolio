const redesSociais = [
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
	let boxRedes = document.querySelector(".social-links");

	redesSociais.map((valRedes) => {
		boxRedes.innerHTML +=
			`
        <div >	
		<a href="` +
			valRedes.link +
			`">	
          <figure>		
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
