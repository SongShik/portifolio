import SectionsDestaque from "@/components/sectionsDestaque";
import Sections from "@/components/sections";
import Highlight from "@/components/highlight";

export default function Home() {

	const projetosDestaque = [
		{
			title: 'Vigor',
			subTitle: 'Subtitulo 1',
			description: 'Descrição 1',
			video: 'https://player.vimeo.com/video/991712252?autoplay=1&muted=1&background=1'
		},
		{
			title: 'SA365',
			subTitle: 'Subtitulo 2',
			description: 'Descrição 2',
			video: 'https://player.vimeo.com/video/991712115?autoplay=1&muted=1&background=1'
		},
		{
			title: 'Bounty',
			subTitle: 'Subtitulo 3',
			description: 'Descrição 3',
			video: 'https://player.vimeo.com/video/991712205?autoplay=1&muted=1&background=1'
		},
		{
			title: 'Samsung',
			subTitle: 'Subtitulo 3',
			description: 'Descrição 3',
			video: 'https://player.vimeo.com/video/991712066?autoplay=1&muted=1&background=1'
		}
	]

	const projetos = [
		{
			title: 'Vetroplus',
			subTitle: 'Subtitulo 1',
			description: 'Descrição 1',
			video: 'https://player.vimeo.com/video/991712305?autoplay=1&muted=1&background=1'
		},
		{
			title: 'HJ Cafeteria',
			subTitle: 'Subtitulo 2',
			description: 'Descrição 2',
			video: 'https://player.vimeo.com/video/991712354?autoplay=1&muted=1&background=1'
		},
		{
			title: 'Carp Brasil',
			subTitle: 'Subtitulo 3',
			description: 'Descrição 3',
			video: 'https://player.vimeo.com/video/991712396?autoplay=1&muted=1&background=1'
		},
		{
			title: 'Faixa Azul',
			subTitle: 'Subtitulo 3',
			description: 'Descrição 3',
			video: 'https://player.vimeo.com/video/991712440?autoplay=1&muted=1&background=1'
		},
		{
			title: 'Medpedia',
			subTitle: 'Subtitulo 3',
			description: 'Descrição 3',
			video: 'https://player.vimeo.com/video/991712488?autoplay=1&muted=1&background=1'
		},
		{
			title: 'Royal Canin',
			subTitle: 'Subtitulo 3',
			description: 'Descrição 3',
			video: 'https://player.vimeo.com/video/991712566?autoplay=1&muted=1&background=1'
		}
	]

	return (
		<>
			<Highlight></Highlight>


			{projetosDestaque && projetosDestaque.map((projeto, index) => (
				<section key={index}>
					<SectionsDestaque title={projeto.title} subTitle={projeto.subTitle} description={projeto.description} video={projeto.video} />
				</section>
			))}

			{projetos && projetos.map((projeto, index) => (
				<section key={index}>
					<Sections title={projeto.title} subTitle={projeto.subTitle} description={projeto.description} video={projeto.video} order={index} />
				</section>
			))}
		</>
	);
}
