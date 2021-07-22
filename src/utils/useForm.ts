import React, { useState } from 'react';

export const useForm = (initialValues:object) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e:React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ]
}