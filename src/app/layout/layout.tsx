import {Header} from "widgets/header";
import {Outlet} from "react-router-dom";
import {Divider} from "shared/ui/divider";

export const Layout = () => {
    return (
        <div className="layout layout__wrapper">
            <Header/>
            <Divider/>
            <main className="layout__content">
                <Outlet/>
            </main>
        </div>
    );
};
