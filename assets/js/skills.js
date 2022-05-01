const skills = [
	{
		imagem: "./assets/skills/html.png",
		nome: "HTML",
	},
	{
		imagem: "./assets/skills/css-3.png",
		nome: "CSS",
	},
	{
		imagem: "./assets/skills/javascript.png",
		nome: "Javascript",
	},
	{
		imagem: "./assets/skills/react.png",
		nome: "React",
	},
	{
		imagem: "./assets/skills/bootstrap.png",
		nome: "Bootstrap",
	},
	{
		imagem: "./assets/skills/sass.png",
		nome: "Sass",
	},
	{
		imagem: "./assets/skills/responsivo.png",
		nome: "Responsivo",
	},
	{
		imagem: "./assets/skills/git.png",
		nome: "Git",
	},
];

listarSkills = () => {
	let cardSkills = document.querySelector(".skills-grid");

	skills.map((valSkills) => {
		cardSkills.innerHTML +=
			`
            <div class="skills-card html">
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
