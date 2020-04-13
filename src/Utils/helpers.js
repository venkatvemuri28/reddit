export const handleOverFlow = (text) =>
  text && text.length > 120 ? text.substring(0, 120) + '...' : text;

export const formatNumbers = (num) =>
  num.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
