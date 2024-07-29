import styles from '@/styles/modules/sections.module.css'
import Image from 'next/image'

export default async function SectionsDestaque({ title, subTitle, description, video, image }: { title: string, subTitle: string, description: string, video?: string, image?: any }) {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pb-3 pb-md-5">
                        <h2 className='mb-3'>{title}</h2>
                        <h4>{subTitle}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            {video &&
                <div className={styles.containerIframe}>
                    <iframe src={video}></iframe>
                </div>
            }
            {image &&
                <Image src={image.src} className='img-fluid d-block m-auto w-100' width={image.width} height={image.height} alt={title} />
            }
        </>
    )
}
