import SectionsDestaque from "@/components/sectionsDestaque";
import Sections from "@/components/sections";
import Highlight from "@/components/highlight";
import vigorImage from '../../public/assets/img/SA365.png';

export default function Home() {

	const projetosDestaque = [
		{
			title: 'Vigor',
			subTitle: 'Unificação de sites correlacionados e multi idiomas',
			description: `
				<p>Atuei como Full Stack pela SA365 e tive a oportunidade de refazer do zero o site da Vigor, com a união de vários projetos em um só. </p> 
				<p>O projeto foi dividido em 3 partes:</p>
				<p>para o site e a área administrativa, utilizei Vue.js, Typescript e GIT. Para a API foi utilizado PHP, com Lavavel e MySQL.</p>
			`,
			image: vigorImage,
			// video: 'https://player.vimeo.com/video/991712252?autoplay=1&muted=1'
			link: 'https://www.vigor.com.br'
		},
		{
			title: 'SA365',
			subTitle: 'Reconstrução da marca para alcançar novos desafios',
			description: `
				<p>Fui responsável pela criação do site, colaborando estreitamente com as áreas de negócios e design para desenvolver uma solução de ponta que se destacasse no mercado. Para isso o projeto incluiu diversas animações, suporte a múltiplos idiomas e otimização para SEO.</p> 
				<p>Utilizamos Next.js, TypeScript, GIT e CI/CD, integrando diversas bibliotecas de animação como GSAP, Swiper e Lenis. O Strapi foi adotado como CMS headless.</p>
			`,
			image: vigorImage,
			// video: 'https://player.vimeo.com/video/991712115?autoplay=1&muted=1&background=1'
			link: 'https://sa365.ag'
		},
		{
			title: 'Bounty',
			subTitle: 'Lançamento da plataforma de gestão empresarial',
			description: `
				<p>Responsável pelo desenvolvimento do site, acompanhando as tendências mais recentes do mercado e fazendo um estudo de concorrentes. com foco nas melhores práticas de SEO e usabilidade para diversas plataformas.</p> 
				<p>Tecnologias utilizadas Next.js, TypeScript, GIT e CI/CD. O Strapi foi adotado como CMS headless.</p>
			`,
			image: vigorImage,
			// video: 'https://player.vimeo.com/video/991712205?autoplay=1&muted=1&background=1'
			link: 'https://home.cartaobounty.com.br/'
		},
		{
			title: 'Samsung',
			subTitle: 'Lading pages com identidade marcante',
			description: `
				<p>A Samsung é um dos principais clientes da SA365 e desde 2020 tenho oportunidade de trabalhar com a Samsung.</p> 
				<p>Sou responsável pela criação das landing pages para praticamente todos os produtos no Brasil. Essas páginas funcionam como conteúdo adicional e são exibidas em diversos sites de varejo, como Amazon, Kabum, FastShop e Magazine Luiza.</p>
				<p>Tecnologias utilizadas HTML, CSS, JS</p>
			`,
			image: vigorImage,
			// video: 'https://player.vimeo.com/video/991712066?autoplay=1&muted=1&background=1'
			link: 'https://www.fastshop.com.br/web/p/d/SGQN75QN800C_PRD/smart-tv-samsung-neo-qled-8k-75-polegadas-75qn800c-com-mini-led-painel-120hz-unica-conexao-dolby-atmos-e-alexa'
		},
	]

	// const projetos = [
	// 	{
	// 		title: 'Vetroplus',
	// 		subTitle: 'Subtitulo 1',
	// 		description: 'Descrição 1',
	// 		video: 'https://player.vimeo.com/video/991712305?autoplay=1&muted=1&background=1'
	// 	},
	// 	{
	// 		title: 'HJ Cafeteria',
	// 		subTitle: 'Subtitulo 2',
	// 		description: 'Descrição 2',
	// 		video: 'https://player.vimeo.com/video/991712354?autoplay=1&muted=1&background=1'
	// 	},
	// 	{
	// 		title: 'Carp Brasil',
	// 		subTitle: 'Subtitulo 3',
	// 		description: 'Descrição 3',
	// 		video: 'https://player.vimeo.com/video/991712396?autoplay=1&muted=1&background=1'
	// 	},
	// 	{
	// 		title: 'Faixa Azul',
	// 		subTitle: 'Subtitulo 3',
	// 		description: 'Descrição 3',
	// 		video: 'https://player.vimeo.com/video/991712440?autoplay=1&muted=1&background=1'
	// 	},
	// 	{
	// 		title: 'Medpedia',
	// 		subTitle: 'Subtitulo 3',
	// 		description: 'Descrição 3',
	// 		video: 'https://player.vimeo.com/video/991712488?autoplay=1&muted=1&background=1'
	// 	},
	// 	{
	// 		title: 'Royal Canin',
	// 		subTitle: 'Subtitulo 3',
	// 		description: 'Descrição 3',
	// 		video: 'https://player.vimeo.com/video/991712566?autoplay=1&muted=1&background=1'
	// 	}
	// ]

	return (
		<>
			<Highlight></Highlight>


			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 text-center">
						<h2><strong>Projetos que tive orgulho de participar</strong></h2>
						<p>Projetos reais para para solucionar desafios de empresas reais.</p>
					</div>
				</div>
			</div>

			{projetosDestaque && projetosDestaque.map((projeto, index) => (
				<section key={index}>
					<SectionsDestaque projeto={projeto} order={index} />
				</section>
			))}

			{/* {projetos && projetos.map((projeto, index) => (
				<section key={index}>
					<Sections title={projeto.title} subTitle={projeto.subTitle} description={projeto.description} video={projeto.video} order={index} />
				</section>
			))} */}
		</>
	);
}
