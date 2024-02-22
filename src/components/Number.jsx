export const Number = ({ number, isActive }) => {
  return <div className={`${isActive ? 'active' : ''}`}>{number}</div>;
};
