// Renderiza pelo lado do cliente
// "use client";

'use client'

export default function Iframe({ video }: { video: string }) {

    return  <iframe src={video}></iframe>
}
