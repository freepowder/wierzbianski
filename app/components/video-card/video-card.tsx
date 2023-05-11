
export type VideoCardProps ={
    url: string;
    title: string;

    onChangeValue?(e: {url:string, title:string}): void;
}

export default function VideoCard({url, title}:VideoCardProps) {

    return (
<>
        <div
            className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-[#323232] relative transform transition duration-500 hover:scale-110">
            <div className="w-full h-48 bg-cover rounded-t-lg aspect-w-16 aspect-h-9"  >
                <iframe className="w-full aspect-video block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
                        src={url}></iframe>
            </div>
            {title && <div className="mt-2 p-6 relative">
                <div className="text-lg uppercase font-bold">{title}</div>
            </div>}
        </div>

</>


    )

}
