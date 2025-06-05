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

  const active = isActive ? "bg-sectionBg text-slate-50" : "bg-background";

  return (
    <Link
      href={href}
      className={`text-lg p-3 rounded-xl hover:bg-sectionBg hover:text-slate-50  duration-200  ${isActive} ? ${active}`}
    >
      {text}
    </Link>
  );
};
