const hoverSkills = (nameCard, text) => {
	let skillsInfo = document.querySelector("#skills-info");
	let cardName = document.querySelector(".card-name");

	document.querySelector(nameCard).addEventListener("mouseover", () => {
		skillsInfo.innerHTML = text;
		if (cardName === ".html") {
			cardName.innerHTML = " Html ";
		}
		if (cardName === ".css") {
			cardName.innerHTML = " Css ";
		}
		if (cardName === ".javascript") {
			cardName.innerHTML = " JavaScript ";
		}
		if (cardName === ".git") {
			cardName.innerHTML = " Git ";
		}
		if (cardName === ".responsivo") {
			cardName.innerHTML = " Responsividade ";
		}
		if (cardName === ".bootstrap") {
			cardName.innerHTML = " Bootstrap ";
		}
		if (cardName === ".sass") {
			cardName.innerHTML = " Sass ";
		}
		if (cardName === ".react") {
			cardName.innerHTML = " React ";
		}
	});

	document.querySelector(nameCard).addEventListener("mouseout", () => {
		skillsInfo.innerHTML = "* passe o cursor sobre os ícones para saber mais *";
		cardName.innerHTML = "";
	});
};

hoverSkills(
	".html",
	"HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverSkills(
	".css",
	"CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverSkills(
	".javascript",
	"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverSkills(
	".sass",
	"Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass."
);
hoverSkills(
	".react",
	"ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverSkills(
	".git",
	"Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
);
hoverSkills(
	".responsivo",
	"Web design responsivo é uma abordagem ao design da Web que faz as páginas da web renderizarem bem em uma variedade de dispositivos e tamanhos de janela ou tela do mínimo ao máximo. "
);
hoverSkills(
	".bootstrap",
	"Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo."
);
