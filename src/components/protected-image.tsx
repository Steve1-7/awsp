import Image, { type ImageProps } from "next/image";

type ProtectedImageProps = ImageProps;

export function ProtectedImage({ alt, fill, ...imageProps }: ProtectedImageProps) {
  return (
    <span className={`awsp-protected-image${fill ? " awsp-protected-image-fill" : ""}`}>
      <Image {...imageProps} alt={alt} fill={fill} draggable={false} />
      <span className="awsp-image-watermark" aria-hidden="true">
        <Image src="/img/logo.webp" alt="" fill sizes="144px" className="object-contain" />
      </span>
    </span>
  );
}
