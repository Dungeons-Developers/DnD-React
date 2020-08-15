import { useState } from 'react';

const useForm = (defaults) => {
  const [fields, setFields] = useState(defaults || {});

  const handleChange = (field, value) => {
    setFields({ ...fields, [field]: value });
  };

  const handleSubmit = (submit) => {
    submit(fields);
  };

  return { handleChange, handleSubmit, fields };
};

export default useForm;
