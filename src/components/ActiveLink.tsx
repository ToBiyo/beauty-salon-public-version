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

  const active = isActive ? "bg-cyan-700 text-avorio" : "bg-none";

  return (
    <Link
      href={href}
      className={`text-lg p-3 rounded-xl hover:bg-cyan-700 hover:text-avorio  duration-200  ${isActive} ? ${active}`}
    >
      {text}
    </Link>
  );
};
