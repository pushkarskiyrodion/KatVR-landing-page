export function isArrayofObjects(value) {
  if (!Array.isArray(value)) {
    return false;
  }

  for (let i = 0; i < value.length; i++) {
    if (
      typeof value[i] !== "object" ||
      value[i] === null ||
      Array.isArray(value[i])
    ) {
      return false;
    }
  }

  return true;
}
