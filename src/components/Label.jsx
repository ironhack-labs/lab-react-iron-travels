export const Label = ({ text, color }) => {
  const colorClass = `${color}-label`;
  return <div className={colorClass}>{text}</div>;
};
