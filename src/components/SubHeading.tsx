export const SubHeading = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <h3
      className={`${textColor} font-quicksand text-lg xl:text-2xl leading-relaxed`}
    >
      {children}
    </h3>
  );
};
