import SectionsDestaque from "@/components/sectionsDestaque";
import Sections from "@/components/sections";
import Highlight from "@/components/highlight";
import vigorImage from '../../public/assets/img/SA365.png';
import Footer from "@/components/footer";

export default function Home() {

	const projetosDestaque = [
		{
			title: 'Vigor',
			subTitle: 'Unificação de sites correlacionados e multi idiomas',
			description: `
				<p>Atuei como Full Stack pela SA365 e tive a oportunidade de refazer do zero o site da Vigor, com a união de vários projetos em um só. </p> 
				<p>O projeto foi dividido em 3 partes:</p>
				<p>Para o site e a área administrativa, utilizei Vue.js, Typescript, GIT e Figma. Para a API foi utilizado PHP, com Lavavel e MySQL.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712252?autoplay=1&muted=1&background=1',
			link: 'https://www.vigor.com.br'
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
		{
			title: 'Bounty',
			subTitle: 'Lançamento da plataforma de gestão empresarial',
			description: `
				<p>Responsável pelo desenvolvimento do site, acompanhando as tendências mais recentes do mercado e fazendo um estudo de concorrentes. com foco nas melhores práticas de SEO e usabilidade para diversas plataformas.</p> 
				<p>Tecnologias utilizadas Next.js, TypeScript, GIT e CI/CD. O Strapi foi adotado como CMS headless.</p>
			`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712205?autoplay=1&muted=1&background=1',
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
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712066?autoplay=1&muted=1&background=1',
			link: 'https://www.fastshop.com.br/web/p/d/SGQN75QN800C_PRD/smart-tv-samsung-neo-qled-8k-75-polegadas-75qn800c-com-mini-led-painel-120hz-unica-conexao-dolby-atmos-e-alexa'
		},
	]

	const projetos = [
		{
			title: 'Vetroplus',
			subTitle: 'Desenvolvendo valor a empresa pelo site',
			description: `
			<p>Criação do site institucional da Vetroplus, focado em apresentar a empresa para publicos de alta renda.</p> 
			<p>Foi utilizado a criação de um template Wordpress e AWS.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712305?autoplay=1&muted=1&background=1',
			link: 'https://vetropluss.com.br'
		},
		{
			title: 'HJ Cafeteria',
			subTitle: 'Lançamento da empresa para o digital',
			description: `
			<p>Ecomerce de cafés focado em SEO e busca por novos cliente </p> 
			<p>Plataforma de e-commerce com integração da Loja Integrada, gestão de produtos e emissão de nota fiscal através do Bling, e entregas pelo Melhor Envio.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712354?autoplay=1&muted=1&background=1',
			link: 'https://www.hjcafe.com.br/'
		},
		{
			title: 'Carp Brasil',
			subTitle: 'Site institucional da ONG',
			description: `
			<p>O site oferece maior integração e informação para que as pessoas conheçam os projetos.</p> 
			<p>O cliente precisava de uma solução simples e fácil de modificar por qualquer pessoa, por isso escolhemos o Wix como criador de sites.</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712396?autoplay=1&muted=1&background=1',
			link: 'https://www.carpbrasil.org/'
		},
		{
			title: 'Faixa Azul',
			subTitle: 'Reposicionamento de marca para novos publicos',
			description: `
			<p>Com foco na simplificação e usabilidade os clientes podem encontrar informações detalhadas dos produtos.</p> 
			<p>Foi utilizado Angular como framework principal</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712440?autoplay=1&muted=1&background=1',
			link: 'https://faixaazul.com.br/'
		},
		{
			title: 'Medpedia',
			subTitle: 'A plataforma para medicos melhorarem seus conhecimentos',
			description: `
			<p>Melhora de perfomace e facilidade de uso</p> 
			<p>O administrativo é por PHP e wordpress e o front é um template customizado</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712488?autoplay=1&muted=1&background=1',
			link: 'https://www.medpedia.com.br/'
		},
		{
			title: 'Royal Canin',
			subTitle: 'Centralização de informaçõe',
			description: `
			<p>Site internacional que agrega todos os produtos da marca presente em todos os continentes</p> 
			<p>Como plataforma global e unificada é utilizado SiteCore como plataforma de gerenciamento</p>
		`,
			// image: vigorImage,
			video: 'https://player.vimeo.com/video/991712566?autoplay=1&muted=1&background=1',
			link: 'https://www.royalcanin.com/br'
		}
	]

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
