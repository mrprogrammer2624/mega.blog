import clsx from "clsx";

export const RatioImages = ({
  src,
  alt,
  RatioImagesParentClass,
  RatioImagesClass,
  priority,
  widthImg,
  heightImg,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        RatioImagesParentClass,
        "ratio position-relative"
      )}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          RatioImagesClass,
          "rounded-xl"
        )}
        width={widthImg}
        height={heightImg}
        {...rest}
      />
    </div>
  );
};
