import { useEffect, useState } from "react";
import MonthYearSelect from "../components/MonthYearSelect";
import { api } from "../services/api";

const DashBoard = () => {
  const currentDate = new Date();
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("/transactions");

      console.log(response);
    }

    getTransactions();
  }, []);

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
    </div>
  );
};

export default DashBoard;
