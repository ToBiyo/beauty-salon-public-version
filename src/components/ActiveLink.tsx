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

  const active = isActive ? "bg-secondaryAccent text-white" : "text-gray-700";

  return (
    <Link
      href={href}
      className={`text-lg p-3 rounded-xl  duration-200  ${isActive} ? ${active}`}
    >
      {text}
    </Link>
  );
};
