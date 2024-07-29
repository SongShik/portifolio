import styles from '@/styles/modules/sections.module.css'
import Image from 'next/image'

export default async function Sections({ title, subTitle, description, video, image, order }: { title: string, subTitle: string, description: string, video?: string, image?: any, order: number }) {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center offset-md-1">
                        <div>
                            <h2>{title}</h2>
                            <h4>{subTitle}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className={` col-md-6 d-flex align-items-center ${order % 2 == 0 ? 'order-md-first' : ''} `}>
                        {video &&
                            <div className={styles.containerIframe}>
                                <iframe src={video}></iframe>
                            </div>
                        }
                        {image &&
                            <Image src={image.src} className='img-fluid d-block m-auto w-100' width={image.width} height={image.height} alt={title} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
