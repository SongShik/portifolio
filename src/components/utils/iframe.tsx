
export default async function Iframe({ video }: { video: string }) {
    return (
        <iframe src={video}></iframe>
    )
}
