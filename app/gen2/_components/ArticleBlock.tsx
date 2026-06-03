import Image from "next/image";
import type { ReactNode } from "react";

type Variant = "side-left" | "side-right" | "stacked";

interface ArticleBlockProps {
  variant: Variant;
  image: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
}

export default function ArticleBlock({
  variant,
  image,
  title,
  children,
  wide,
}: ArticleBlockProps) {
  const innerClass =
    variant === "stacked"
      ? "article-block__inner article-block--stacked"
      : variant === "side-right"
        ? "article-block__inner article-block--side article-block--reverse"
        : "article-block__inner article-block--side";

  const mediaClass = wide
    ? "article-block__media article-block__media--wide"
    : "article-block__media";

  const isWide = variant === "stacked" && wide;

  return (
    <section className="article-block">
      <div className={innerClass}>
        <figure className={mediaClass}>
          <Image
            src={image}
            alt=""
            fill
            sizes={isWide ? "(max-width: 760px) 100vw, 760px" : "(max-width: 768px) 100vw, 450px"}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </figure>
        <div className="article-block__content">
          <h3 className="article-block__title">{title}</h3>
          {children}
        </div>
      </div>
    </section>
  );
}
