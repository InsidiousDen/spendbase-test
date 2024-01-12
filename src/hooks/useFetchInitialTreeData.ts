import { useEffect, useState } from "react";

import { TreeElement } from "../types/global";

export const useFetchInitialTreeData = () => {
  const [initialData, setInitialData] = useState<TreeElement[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/assets/filesData.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setInitialData(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    initialData,
    loading,
    error,
  };
};
