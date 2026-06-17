import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
  caption?: string;
  figureClassName?: string;
  frameClassName?: string;
  imageClassName?: string;
};

export function PageHeroImage({
  src,
  alt,
  caption,
  figureClassName = "image-soft mt-7 overflow-hidden rounded-[1.5rem] border border-stone-300 bg-stone-200 shadow-sm sm:mt-8",
  frameClassName = "relative h-44 sm:h-56 lg:h-64",
  imageClassName = "object-cover",
}: PageHeroImageProps) {
  return (
    <figure className={figureClassName}>
      <div className={frameClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className={imageClassName}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-stone-200 bg-stone-50/95 px-5 py-3 text-sm text-stone-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
