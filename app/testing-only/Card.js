import Link from "next/link";

export default function Card({
  id,
  imgSrc,
  imgAlt,
  title,
  subtitle,
  description,
  listItems,
  btnText,
  btnHref,
  btnType = "link",
  children,
  btnIcon,
}) {
  return (
    <div
      id={id}
      className="p-4 max-w-5xl mx-auto h-max rounded-xl border border-white/10 bg-gradient-to-bl from-neutral-900 via-zinc-800 to-neutral-900 mt-6"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="bg-gradient-to-r from-blue-300 via-gray-100 to-yellow-100 image-card"
        sizes="16"
      />
      <h2 className="text-gray-100 card-h1 font-bold mt-5">{title}</h2>
      <p className="text-gray-100 card-p-small font-light">{subtitle}</p>
      <p className="text-gray-400 font-normal card-p-big mt-3">{description}</p>

      {listItems && (
        <ul className="list-disc card-list ml-5 mt-2.5 mb-6 text-gray-400">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {children}

      {btnText &&
        (btnType === "link" ? (
          <Link
            href={btnHref}
            className="card-btn items-center justify-center px-2.5 py-1.5 text-gray-100 font-mono rounded-sm border border-white/30 hover:border-white/50 bg-black inline-flex gap-1"
          >
            {btnText} {btnIcon}
          </Link>
        ) : (
          <button
            type="button"
            className="card-btn items-center justify-center px-2.5 py-1.5 text-gray-100 font-mono rounded-sm border border-white/30 hover:border-white/50 bg-black"
            onClick={btnHref}
          >
            {btnText} {btnIcon}
          </button>
        ))}
    </div>
  );
}
