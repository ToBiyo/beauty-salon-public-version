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

  const active = isActive ? "bg-cream" : "bg-none";

  return (
    <Link
      href={href}
      className={`text-lg p-3 rounded-xl hover:bg-cream  duration-200  ${isActive} ? ${active}`}
    >
      {text}
    </Link>
  );
};
