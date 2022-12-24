import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utlis/axiosinstante";

const useMealsById = (meal) => {
  const [meals, setMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let url = `meal/${meal}`;

    const fetchMeals = async () => {
      setLoading(true);
      try {
        const { status, data } = await axiosInstance.get(url);
        if (status === 200) {
          setMeal(data);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchMeals();
  }, [meal]);

  return {
    meals,
    loading,
    error,
  };
};

export default useMealsById;
