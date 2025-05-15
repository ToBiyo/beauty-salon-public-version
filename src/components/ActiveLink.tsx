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

  const active = isActive ? "border-active" : "border-inactive";

  return (
    <Link
      href={href}
      className={`text-lg py-2 border-b-[4px] ${isActive} ? ${active}`}
    >
      {text}
    </Link>
  );
};
