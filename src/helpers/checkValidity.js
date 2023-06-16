export const checkValidity = (inputs, setError, data) => {
  for (let i = 0; i < inputs.length; i++) {
    const { name, pattern } = inputs[i];
    const regex = new RegExp(pattern);
    const value = data[name];

    if (!regex.test(value) || value === "") {
      setError(true);

      return false;
    }
  }

  setError(false);

  return true;
};
