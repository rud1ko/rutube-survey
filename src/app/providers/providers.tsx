import {FC} from "react";
import store, {persistor} from "../store.ts";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {IProviders} from "shared/types";

export const Providers: FC<IProviders> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}