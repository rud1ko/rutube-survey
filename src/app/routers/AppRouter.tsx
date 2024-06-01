import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Layout} from "../layout";
import {MainPage} from "../../pages/mainPage";
import {FeedbackPage} from "../../pages/feedbackPage";

export const AppRouter = () => {

    const routers = createRoutesFromElements(
        <Route path='/'  element={<Layout />} >
            <Route index element={<MainPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
        </Route>
    )

    const router = createBrowserRouter(routers, {})

    return (
        <div className={'app'}>
            <RouterProvider router={router} />
        </div>
    )
}