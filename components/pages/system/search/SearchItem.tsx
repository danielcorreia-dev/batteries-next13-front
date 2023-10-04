import truncateString from "@/utils/truncate-string";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: any;
}

const SearchItem = ({ item }: Props) => {
  return (
    <Link
      href={`system/${item.type}/${item.id}`}
      className="relative h-96 overflow-hidden rounded-md shadow-sm transition-shadow hover:shadow-xl"
    >
      {/* Content */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end px-4 pb-10">
        <div className="flex items-center gap-2 ">
          <div className="line-clamp-1 inline-block rounded-md bg-yellow-100/80 px-2 py-1 text-xs text-slate-900">
            {item.id}
          </div>
          {item.openingHours && item.closeHours && (
            <>
              <div className="line-clamp-1 inline-block rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-200">
                {item.openingHours.toUpperCase()}
              </div>
              <div className="line-clamp-1 inline-block rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-200">
                {item.closeHours.toUpperCase()}
              </div>
            </>
          )}
        </div>
        <h2 className="mt-2 text-2xl font-semibold dark:text-slate-200">
          {item.name}
        </h2>
        <p className="line-clamp-2 text-sm dark:text-slate-400">{item.bio}</p>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 rounded-md bg-gradient-to-b from-white/30 via-white/90 to-white dark:from-slate-900/30 dark:via-slate-900/90 dark:to-slate-900" />
      {/* BG Image */}
      <Image
        className="rounded-md object-cover object-center pb-1"
        src={item.avatar}
        fill
        alt={item.name}
      />
    </Link>
  );
};

export default SearchItem;
