import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { getAllProducts } from "../api/db";

const useFetch = (promiseFunction = getAllProducts) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async (callBackPromiseFunction) => {
    setLoading(true);

    try {
      const response = await callBackPromiseFunction();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(promiseFunction);
  }, []);

  const refetch = (refetchPromiseFunction = getAllProducts) => {
    fetchData(refetchPromiseFunction);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
