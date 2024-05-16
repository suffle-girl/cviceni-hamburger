import './style.css';

export const MenuItem = ({ text, onSelect }) => {
  return (
    <a onClick={() => onSelect()} href="#" className="menu-item">
      {text}
    </a>
  );
};
