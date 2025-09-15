import { AArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import MonthYearSelect from "../components/MonthYearSelect";
import { getTransactionsSummary } from "../services/transactionService";
import type { TransactionSummary } from "../types/transactions";

const initialSummary: TransactionSummary = {
  balance: 0,
  totalExpenses: 0,
  totalIncomes: 0,
  expenseByCategory: [],
};

const DashBoard = () => {
  const currentDate = new Date();
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [summary, setSummary] = useState<TransactionSummary>(initialSummary);

  useEffect(() => {
    async function loadTransactionsSummary() {
      const response = await getTransactionsSummary(month, year);

      setSummary(response);
    }

    loadTransactionsSummary();
  }, [month, year]);

  return (
    <div className="container-app py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Dashboard</h1>
        <MonthYearSelect
          month={month}
          year={year}
          onMonthChange={setMonth}
          onYearChange={setYear}
        />
      </div>
      <Card glowEffect hover title="Despesas" subtitle="alguma coisa" icon={<AArrowUp />}>
        <div>
          <p className="font-bold text-primary-500">R$ 2.000,00</p>
        </div>
      </Card>
    </div>
  );
};

export default DashBoard;
