import Link from "next/link";
export const ActiveLink = ({
  href,
  path,
  text,
}: {
  href: string;
  path: string;
  text: string;
}) => {
  const isActive = href === path;

  const active = isActive
    ? "bg-secondaryBg text-slate-600"
    : "bg-mainBg text-slate-600";

  return (
    <Link
      href={href}
      className={`text-lg p-3 rounded-xl hover:bg-secondaryBg hover:text-slate-600  duration-200  ${isActive} ? ${active}`}
    >
      {text}
    </Link>
  );
};
