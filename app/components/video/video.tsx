
type VideoProps ={
    url: string;
}
export default function Video({url}:VideoProps) {

    return(
        <div className="aspect-w-16 aspect-h-9 bg-black">
            <iframe src={url}
                    width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}
