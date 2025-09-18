import { ArrowUp, TrendingUp, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  type PieLabelRenderProps,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Card from "../components/Card";
import MonthYearSelect from "../components/MonthYearSelect";
import { getTransactionsSummary } from "../services/transactionService";
import type { TransactionSummary } from "../types/transactions";
import { formatCurrency } from "../utils/formatters";

const initialSummary: TransactionSummary = {
  balance: 0,
  totalExpenses: 0,
  totalIncomes: 0,
  expensesByCategory: [],
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

  const chartData = summary.expensesByCategory.map((item) => ({
    categoryId: item.categoryId,
    categoryName: item.categoryName,
    categoryColor: item.categoryColor,
    amount: item.amount,
    percentage: item.percentage,
  }));

  const renderPieChartLabel = ({ categoryName, percent }: PieLabelRenderProps): string => {
    if (typeof percent === "number") {
      return `${categoryName}: ${(percent * 100).toFixed(1)}%`;
    }
    return `${categoryName}: 0%`;
  };

  const formatToolTipValue = (value: number | string): string => {
    return formatCurrency(typeof value === "number" ? value : 0);
  };

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          icon={<Wallet size={20} className="text-primary-500" />}
          title="Saldo"
          hover
          glowEffect={summary.balance > 0}
        >
          <div>
            <p
              className={`text-2xl font-semibold mt-2
            ${summary.balance > 0 ? "text-primary-500" : "text-red-300"}
            `}
            >
              {formatCurrency(summary.balance)}
            </p>
          </div>
        </Card>

        <Card icon={<ArrowUp size={20} className="text-primary-500" />} title="Receitas" hover>
          <div>
            <p className="text-2xl font-semibold mt-2 text-primary-500">
              {formatCurrency(summary.totalIncomes)}
            </p>
          </div>
        </Card>

        <Card icon={<Wallet size={20} className="text-red-600" />} title="Despesas" hover>
          <div>
            <p className="text-2xl font-semibold mt-2 text-red-600">
              {formatCurrency(summary.balance)}
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6 mt-7">
        <Card
          icon={<TrendingUp size={20} className="text=primary-500" />}
          title="Despesas por categoria"
          className="min-h-80"
          hover
        >
          {summary.expensesByCategory.length > 0 ? (
            <div className="h-72 mt-4">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="amount"
                    nameKey="categoryName"
                    label={renderPieChartLabel}
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.categoryId} fill={entry.categoryColor} />
                    ))}
                  </Pie>
                  <Tooltip formatter={formatToolTipValue} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              Nenhuma despesa registrada nesse período
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
