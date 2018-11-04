// src/components/layout/NavBar.jsx

const m = require ('mithril');

import NavButton from '../ui/NavButton.jsx'

const NavBar = {
    view : () => 
    <div class="nav-bar">
        <NavButton path={`cpf`} icon={<i class="fas fa-microphone"/>} />
        <NavButton path={`conferences`} icon={<i class="fas fa-user"/>} />
        <NavButton path={`entry`} icon={<i class="fas fa-edit"/>} />
    </div>
};

export default NavBar;