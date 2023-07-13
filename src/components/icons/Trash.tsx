import { Trash2 } from "lucide-react";

type TrashProps = {
  onClick: () => void;
};

export const TrashIcon = ({ onClick }: TrashProps) => {
  return (
    <Trash2
      onClick={onClick}
      className={`text-gray300 hover:text-danger w-5 h-5 cursor-pointer`}
    />
  );
};
