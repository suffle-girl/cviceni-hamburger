import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  const handleSelectItem = () => {
    setMenuOpened(false)
  }

  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu menu--closed"}>
          <button onClick={handleMenu} className="menu__btn"></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectItem} text="Domů" />
            <MenuItem onSelect={handleSelectItem} text="Naše nabídka" />
            <MenuItem onSelect={handleSelectItem} text="Náš tým" />
            <MenuItem onSelect={handleSelectItem} text="Blog" />
            <MenuItem onSelect={handleSelectItem} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
