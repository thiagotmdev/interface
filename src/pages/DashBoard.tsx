import { useEffect } from "react";
import { api } from "../services/api";

const DashBoard = () => {
  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("/transactions");

      console.log(response);
    }

    getTransactions();
  }, []);
};

export default DashBoard;
