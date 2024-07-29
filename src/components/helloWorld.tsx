// Renderiza pelo lado do cliente
// "use client";

import styles from '@/styles/modules/helloWord.module.css'

// revalida a pagina a cada X tempo
// export const revalidate = 30


// Hello Word para coisas dinamicas
// async function getPress() {
//     const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/presses?populate=*')
//     if (!res.ok) { throw new Error('Erro na chamada') }
//     return res.json()
// }

export default async function HelloWord() {
    // const pressData = getPress()
    // const [presses] = await Promise.all([pressData])

    return (
        <>
            <h1>bem vindo ao Site</h1>
            {/* <pre>{JSON.stringify(presses)}</pre> */}
            {/* {press.data.map((press: any, index: number) => {
                <div key={index}>
                    <h2>{press.attributes.title}</h2>
                    <p>{press.attributes.url}</p>
                </div>
            })} */}
        </>
    )
}
