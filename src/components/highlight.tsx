import reactLogo from '../../public/assets/img/tecnologias/React.png'
import gitogo from '../../public/assets/img/tecnologias/Git.png'
import javaScriptLogo from '../../public/assets/img/tecnologias/JavaScript.png'
import nodeLogo from '../../public/assets/img/tecnologias/Node.png'
import typescriptLogo from '../../public/assets/img/tecnologias/Typescript.png'
import vueLogo from '../../public/assets/img/tecnologias/Vue.png'
import nextLogo from '../../public/assets/img/tecnologias/Next.png'

import styles from '../styles/modules/highlight.module.css'
import Image from 'next/image'

export default async function Highlight() {

    const logos = [
        vueLogo,
        nodeLogo,
        reactLogo,
        nextLogo,
        typescriptLogo,
        javaScriptLogo,
        gitogo,
    ]
    return (
        <>
            <div className={styles.highlight}>
                <div className='text-center'>
                    <div className='d-flex align-items-center justify-content-center mb-3 gap-4'>
                        {logos && logos.map((logo, index) => (
                            <div className={styles.logos} key={index}>
                                <Image src={logo.src} alt='Logo' className='img-fluid' fill sizes="(max-width: 767px) 100vw, 33vw"></Image>
                            </div>
                        ))}
                    </div>
                    <h1><strong>Song Shik Restrepo Ohoe Vasconcellos</strong></h1>
                    <h4>Desenvolvedor Front-end</h4>
                </div>
            </div>
        </>
    )
}
