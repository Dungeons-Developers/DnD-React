import { useState } from 'react';

const useForm = (defaults) => {
  const [fields, setFields] = useState(defaults || {});

  const handleChange = (field, value) => {
    setFields({ ...fields, [field]: value });
    console.log('Fields:', fields)
  };

  const handleSubmit = (submit) => {
    submit(fields);
  };

  return { handleChange, handleSubmit, fields };
};

export default useForm;
