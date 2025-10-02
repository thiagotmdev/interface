import { TransactionType } from "../types/transactions";

interface TransactionTypeSelectionProps {
  value: TransactionType;
  id?: string;
  onChange: (type: TransactionType) => void;
}

const TransactionTypeSelector = ({ value, onChange, id }: TransactionTypeSelectionProps) => {
  const transactionTypeButtons = [
    {
      type: TransactionType.EXPENSE,
      label: "Despesa",
      activeClasses: "bg-red-500 border-red-500 text-red-700 font-medium",
      inativeClasses: "bg-transparent border-red-300 text-red-500 hover:bg-red-50",
    },
    {
      type: TransactionType.INCOME,
      label: "Receita",
      activeClasses: "bg-green-100 border-green-500 text-green-700 font-medium",
      inativeClasses: "bg-transparent border-green-300 text-green-500 hover:bg-green-50",
    },
  ];
  return (
    <fieldset id={id} className="grid grid-cols-2 gap-4">
      {transactionTypeButtons.map((item) => (
        <button
          key={item.type}
          type="button"
          onClick={() => onChange(item.type)}
          className={`flex items-center justify-center border rounded-md py-2 px-4 cursor-pointer transition-all
            ${value === item.type ? item.activeClasses : item.inativeClasses}
            `}
        >
          {item.label}
        </button>
      ))}
    </fieldset>
  );
};

export default TransactionTypeSelector;
