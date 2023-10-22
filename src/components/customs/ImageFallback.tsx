import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageFallbackProps {
    src: string;
    fallbackSrc: any;
    alt: string
    [key: string]: any
    // Các props khác có thể được thêm vào ở đây
}

const ImageFallback: React.FC<ImageFallbackProps> = ({ src, fallbackSrc, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onLoadingComplete={(result: { naturalWidth: number }) => {
                if (result.naturalWidth === 0) {
                    // Hình ảnh bị lỗi
                    setImgSrc(fallbackSrc);
                }
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageFallback;
