// /src/components/ui/LogoutButton.jsx
// candidato para ser libreria.

const m = require('mithril');

const LogoutButton = {
    view : ({ attrs }) =>
        <div onClick={attrs.action}>
            <i class="fas fa-sign-out-alt"/>
        </div>
};

export default LogoutButton;