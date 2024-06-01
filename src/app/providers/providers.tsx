import {FC, JSX} from "react";
import store, {persistor} from "../store.ts";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

interface IProviders {
    readonly children: JSX.Element
}

export const Providers: FC<IProviders> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}