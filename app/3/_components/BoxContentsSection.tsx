import Image from "next/image";

export default function BoxContentsSection() {
  return (
    <section className="bg-white text-ink-primary">
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <h2 className="sr-only">Kassens indhold</h2>
        <div className="overflow-hidden rounded-3xl border border-line-subtle bg-[#f7f4ee]">
          <div className="relative aspect-[1462/846] w-full">
            <Image
              src="/box-contents.jpg"
              alt="Kassens indhold — robot, ladestation, oplader, ekstra knive og manualer"
              fill
              sizes="(max-width: 768px) 90vw, 1080px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
