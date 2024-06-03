import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import {Layout} from "../layout";
import {MainPage} from "pages/mainPage";
import {FeedbackPage} from "pages/feedbackPage";
import {GratitudePage} from "pages/gratitudePage";
import {PassedPage} from "pages/passedPage";
import {useAppSelector} from "shared/lib/store/redux.ts";


export const AppRouter = () => {
    const grade = useAppSelector(state => state.grade)
    const passed = useAppSelector(state => state.pass)

    const routers = createRoutesFromElements(
        <Route path='/'  element={<Layout />} >
            <Route index element={grade.rate === null ? <MainPage /> :  <Navigate replace to="/feedback"/> } />
            <Route path="feedback" element={passed ? <Navigate replace to={"/passed"}/> : (grade.rate === null ? <Navigate replace to={"/"}/> : <FeedbackPage />) } />
            <Route path="gratitude" element={grade.rate === null ? <Navigate replace to={"/"}/> : (!passed ? <Navigate replace to={"/feedback"}/> : <GratitudePage />) } />
            <Route path="passed" element={grade.rate === null ? <Navigate replace to={"/"}/> : (!passed ? <Navigate replace to={"/feedback"}/> : <PassedPage />) } />
        </Route>
    )

    const router = createBrowserRouter(routers, {})

    return (
        <div className={'app'}>
            <RouterProvider router={router} />
        </div>
    )
}