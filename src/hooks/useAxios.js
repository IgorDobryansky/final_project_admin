import { useState, useEffect } from "react";

import api from "../http";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [method, url, body, headers]);

  return { data, error, isLoading };
};

export default useAxios;
