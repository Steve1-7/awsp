import Image, { getImageProps, type ImageProps } from "next/image";

type ProtectedImageProps = ImageProps & {
  mobileSrc?: string;
};

export function ProtectedImage({ alt, fill, mobileSrc, priority, preload, fetchPriority, loading, ...imageProps }: ProtectedImageProps) {
  const mobileImageProps = mobileSrc
    ? getImageProps({
        src: mobileSrc,
        alt,
        width: 2160,
        height: 3840,
        sizes: imageProps.sizes,
        quality: imageProps.quality,
      }).props
    : undefined;

  return (
    <span className={`awsp-protected-image${fill ? " awsp-protected-image-fill" : ""}`}>
      <picture className={fill ? "awsp-protected-image-picture-fill" : undefined}>
        {mobileImageProps && (
          <source media="(max-width: 767px)" srcSet={mobileImageProps.srcSet} sizes={mobileImageProps.sizes} />
        )}
        <Image
          {...imageProps}
          alt={alt}
          fill={fill}
          priority={mobileSrc ? undefined : priority}
          preload={mobileSrc ? false : preload}
          fetchPriority={mobileSrc ? "high" : fetchPriority}
          loading={mobileSrc ? "eager" : loading}
          draggable={false}
        />
      </picture>
      <span className="awsp-image-watermark" aria-hidden="true">
        <Image src="/img/logo.webp" alt="" fill sizes="144px" className="object-contain" />
      </span>
    </span>
  );
}
