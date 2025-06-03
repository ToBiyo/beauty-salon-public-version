import { Button } from "./Button";
export const CtaButtons = ({
  callMessage,
  callPhone,
}: {
  callMessage: string;
  callPhone: string;
}) => {
  return (
    <div className="flex gap-8">
      <Button>{callPhone}</Button>
      <Button>{callMessage}</Button>
    </div>
  );
};
