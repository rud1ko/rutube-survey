import Logo from 'shared/assets/logo.svg?react'


export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Logo/>
            </div>
        </header>
    );
};