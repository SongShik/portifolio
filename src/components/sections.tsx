import styles from '@/styles/modules/sections.module.css'
import Image from 'next/image'

interface Projeto {
    title: string,
    subTitle: string,
    description: string,
    video?: string,
    image?: { src: string, width: number, height: number },
    link?: string
}

interface Props {
    projeto: Projeto,
    order: number
}

export default async function Sections({ projeto, order }: Props) {


    return (
        <>
            <div className={`col-md-6 text-center mt-3 mt-md-5`}>
                <div className={`${styles.border} h-100`}>
                    {projeto.video &&
                        <div className={styles.containerIframe}>
                            <iframe src={projeto.video}></iframe>
                        </div>
                    }
                    {projeto.image &&
                        <Image src={projeto.image.src} className='img-fluid d-block m-auto w-100' width={projeto.image.width} height={projeto.image.height} alt={projeto.title} />
                    }
                    <div className='px-md-3 pt-3 pb-2'>
                        <h2 className=''>{projeto.title}</h2>
                        <h5>{projeto.subTitle}</h5>
                        <div dangerouslySetInnerHTML={{ __html: projeto.description }}></div>
                    </div>
                    {projeto.link && <a href={projeto.link} className='btn btn-primary' target='_blank'>Veja Mais</a>}
                </div>
            </div >
        </>
    )
}
