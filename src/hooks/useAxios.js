import { useState, useEffect } from "react";

import api from "../http";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    api[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, isLoading };
};

export default useAxios;
