'use client'

import styles from '@/styles/modules/sections.module.css'
import Image from 'next/image'
import Iframe from './utils/iframe'
import { Suspense } from 'react'

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

export default function SectionsDestaque({ projeto, order }: Props) {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-4 d-flex align-items-center ps-lg-5 text-center text-md-start mb-3 mb-md-0">
                        <div>
                            <h2><strong>{projeto.title}</strong></h2>
                            <h4>{projeto.subTitle}</h4>
                            <div dangerouslySetInnerHTML={{ __html: projeto.description }}></div>
                            {projeto.link && <a href={projeto.link} className='btn btn-primary' target='_blank'>Veja Mais</a>}
                        </div>
                    </div>
                    <div className={`col-md-6 col-lg-7 d-flex align-items-center ${order % 2 == 0 ? 'order-md-first' : 'offset-md-1'} `}>
                        {projeto.video &&
                            <div className={styles.border}>
                                <div className={styles.containerIframe}>
                                    <Suspense fallback={"Carregando..."}>
                                        <iframe src={projeto.video}></iframe>
                                    </Suspense>
                                </div>
                            </div>
                        }
                        {projeto.image &&
                            <Image src={projeto.image.src} className={`${styles.border} img-fluid d-block m-auto w-100`} width={projeto.image.width} height={projeto.image.height} alt={projeto.title} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
