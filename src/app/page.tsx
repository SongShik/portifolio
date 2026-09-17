import SectionsDestaque from "@/components/sectionsDestaque";
import Sections from "@/components/sections";
import Highlight from "@/components/highlight";
import vigorImage from '../../public/assets/img/SA365.png';
import Footer from "@/components/footer";
import { title } from "process";

export default function Home() {

	const projetosDestaque = [
		{
			title: 'Vigor',
			subTitle: 'Unificação de sites correlacionados e multi idiomas',
			description: `
				<p>Atuei como desenvolvedor Full Stack e na liderança técnica durante a unificação dos sites das diferentes marcas da Vigor, como parte do novo posicionamento digital da empresa.</p>
				<p>Tive a oportunidade de refazer do zero o site da Vigor, participando da evolução e as decisões tecnição do projeto.</p> 
				<p>O projeto foi dividido em 3 partes:</p>
				<p>Para o site e a área administrativa, utilizei Vue.js, Typescript, GIT e Figma. Para o back end e  API foi utilizado PHP, com Laravel e MySQL.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712252?autoplay=1&muted=1&background=1',
			link: 'https://www.vigor.com.br'
		},
		{
			title: 'Porto Seguro',
			subTitle: 'Contrução do projeto Open Insurance',
			description: `
				<p>Atuei na liderança técnica para a implementação e criação do projeto, para integrar a Porto Seguro com o sistema Open Insurance Brasil</p>
				<p>Trabalhei em conjunto com o desenvolvedores, negócio e design para definir e implementar a jornada em diferentes plataformas.</p>
				<p>A solução utilizou com Next.js, TypeScript, NodeJs, AWS, Java, Jest, GIT e CI/CD.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/1227795822?autoplay=1&muted=1&background=1',
			link: 'https://openinsurance.portoseguro.com.br/'
		},
		{
			title: 'Samsung',
			subTitle: 'Landing pages com identidade marcante',
			description: `
				<p>Atuei para a Samsung entre 2020 e 2024, desenvolvendo landing pages para produtos da marca no Brasil.</p> 
				<p>Fui responsável pela criação de todas as landing pages para praticamente todos os produtos no Brasil. Essas páginas funcionam como conteúdo adicional e são exibidas em diversos sites de varejo como Amazon, Kabum, FastShop, Americanas, Magazine Luiza e Mercado livre.</p>
				<p>O desenvolvimento foi realizado utilizando HTML, CSS e JavaScript.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712066?autoplay=1&muted=1&background=1',
			link: 'https://www.fastshop.com.br/web/p/d/SGQN75QN800C_PRD/smart-tv-samsung-neo-qled-8k-75-polegadas-75qn800c-com-mini-led-painel-120hz-unica-conexao-dolby-atmos-e-alexa'
		},
		{
			title: 'SA365',
			subTitle: 'Reconstrução da marca para alcançar novos desafios',
			description: `
				<p>Fui responsável pela criação do site, colaborando estreitamente com as áreas de negócios e design para desenvolver uma solução de ponta que se destacasse no mercado. Para isso o projeto incluiu diversas animações, suporte a múltiplos idiomas e otimização para SEO.</p> 
				<p>Utilizamos Next.js, TypeScript, GIT e CI/CD, integrando diversas bibliotecas de animação como GSAP, Swiper e Lenis. O Strapi foi adotado como CMS headless.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712115?autoplay=1&muted=1&background=1',
			link: 'https://sa365.ag'
		},
	]

	const projetos = [
		{
			title: 'Faixa Azul',
			subTitle: 'Reposicionamento de marca para novos públicos',
			description: `
			<p>Com foco na simplificação e usabilidade os clientes podem encontrar informações detalhadas dos produtos.</p> 
			<p>Foi utilizado Angular como framework principal</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712440?autoplay=1&muted=1&background=1',
			link: 'https://faixaazul.com.br/'
		},
		{
			title: 'Royal Canin',
			subTitle: 'Centralização de informações',
			description: `
			<p>Site internacional que agrega todos os produtos da marca presente em todos os continentes</p> 
			<p>Por se tratar de uma plataforma global e unificada, a solução utiliza Sitecore como plataforma de CMS.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712566?autoplay=1&muted=1&background=1',
			link: 'https://www.royalcanin.com/br'
		},
		{
			title: 'Medpedia',
			subTitle: 'A plataforma para medicos melhorarem seus conhecimentos',
			description: `
			<p>Pude atuar na liderança tecnica e escolhas de conteudos para a plataforma</p> 
			<p>O administrativo é utilizado PHP, para o front end é um template customizado wordpress</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712488?autoplay=1&muted=1&background=1',
			link: 'https://www.medpedia.com.br/'
		},
		{
			title: 'Vetroplus',
			subTitle: 'Desenvolvendo valor a empresa pelo digital',
			description: `
			<p>Criação do site institucional da Vetroplus, focado em apresentar a empresa para públicos de alta renda.</p> 
			<p>Foi utilizado a criação de um template Wordpress com React e PHP.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712305?autoplay=1&muted=1&background=1',
			link: 'https://vetropluss.com.br'
		},
		{
			title: 'HJ Cafeteria',
			subTitle: 'Lançamento da empresa para o digital',
			description: `
			<p>E-commerce de cafés focado em SEO e aquisição por novos cliente </p> 
			<p>A Loja Integrada foi utilizada como plataforma de e-commerce e gestão de produtos. Para emissão de nota fiscal através do Bling, e entregas pelo Melhor Envio.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712354?autoplay=1&muted=1&background=1',
			link: 'https://www.hjcafe.com.br/'
		},
		{
			title: 'Bounty',
			subTitle: 'Lançamento da plataforma de gestão empresarial',
			description: `
				<p>Responsável pelo desenvolvimento do site, acompanhando as tendências mais recentes do mercado e fazendo um estudo de concorrentes. Com foco nas melhores práticas de SEO e usabilidade para diversas plataformas.</p> 
				<p>Tecnologias utilizadas Next.js, TypeScript, GIT e CI/CD. O Strapi foi adotado como CMS headless.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712205?autoplay=1&muted=1&background=1',
			link: 'https://home.cartaobounty.com.br/'
		},
		{
			title: 'Carp Brasil',
			subTitle: 'Site institucional da ONG',
			description: `
			<p>O site oferece maior integração e informação para que as pessoas conheçam os projetos.</p> 
			<p>O cliente precisava de uma solução simples e fácil de manutenção sem conhecimento tecnico, por isso escolhi o Wix como criador de sites e gerenciador de contúdo.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712396?autoplay=1&muted=1&background=1',
			link: 'https://www.carpbrasil.org/'
		}
	]

	return (
		<>
			<Highlight></Highlight>


			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 text-center">
						<h2><strong>Projetos que tive orgulho de participar</strong></h2>
						<p>Projetos reais para solucionar desafios de empresas reais.</p>
					</div>
				</div>
			</div>

			{projetosDestaque && projetosDestaque.map((projeto, index) => (
				<section key={index}>
					<SectionsDestaque projeto={projeto} order={index} />
				</section>
			))}

			<section>
				<div className="container-fluid">
					<div className="row">
						{projetos && projetos.map((projeto, index) => (
							<Sections projeto={projeto} order={index} key={index} />
						))}
					</div>
				</div>
			</section>

			<Footer></Footer>
		</>
	);
}
