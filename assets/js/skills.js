const skills = [
	{
		classe: "html",
		imagem: "./assets/skills/html.png",
		nome: "HTML",
	},
	{
		classe: "css",
		imagem: "./assets/skills/css-3.png",
		nome: "CSS",
	},
	{
		classe: "javascript",
		imagem: "./assets/skills/javascript.png",
		nome: "Javascript",
	},
	{
		classe: "react",
		imagem: "./assets/skills/react.png",
		nome: "React",
	},
	{
		classe: "bootstrap",
		imagem: "./assets/skills/bootstrap.png",
		nome: "Bootstrap",
	},
	{
		classe: "sass",
		imagem: "./assets/skills/sass.png",
		nome: "Sass",
	},
	{
		classe: "responsivo",
		imagem: "./assets/skills/responsivo.png",
		nome: "Responsividade",
	},
	{
		classe: "git",
		imagem: "./assets/skills/git.png",
		nome: "Git",
	},
];

listarSkills = () => {
	let cardSkills = document.querySelector(".skills-grid");

	skills.map((valSkills) => {
		cardSkills.innerHTML +=
			`
            <div class="skills-card ` +
			valSkills.classe +
			`">
            <img src="` +
			valSkills.imagem +
			`" alt="` +
			valSkills.nome +
			`">    
            </div>    
      `;
	});
};

listarSkills();
