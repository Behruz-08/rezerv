import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/Routes/Routes";
import { Home } from "../../pages/Home";
import { Register } from "../../pages/Register";
import { Login } from "../../pages/Login";
import { SearchPage } from "../../pages/SearchPage";
import { HowWork } from "../../pages/HowWork";
import { HowDriver } from "../../pages/HowDriver";
import { HowPassenger } from "../../pages/HowPassenger";
import { SelectedDriver } from "../../pages/SelectedDriver";
import { PublishPage } from "../../pages/PublishPage";
import { SuccessPublishPage } from "../../pages/SuccessPublishPage";
import { UserProfile } from "../../pages/UserProfile";
import { Chat } from "../../pages/Chat";
import { ErrorPage } from "../../pages/ErrorPage";


const AppRouter = ()=>(

    <Routes>
    <Route path="/">
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SEARCH_PAGE} element={<SearchPage />} />
      <Route path={ROUTES.HOW_WORK} element={<HowWork />} />
      <Route path={ROUTES.HOW_WORK_DRIVER} element={<HowDriver />} />
      <Route path={ROUTES.HOW_WORK_PASSENGER} element={<HowPassenger />} />
      <Route path={ROUTES.SELECTED_DRIVER} element={<SelectedDriver />} />
      <Route path={ROUTES.PUBLISH_PAGE} element={<PublishPage />} />
      <Route
        path={ROUTES.PUBLISH_PAGE_SUCCESSS}
        element={<SuccessPublishPage />}
      />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={ROUTES.CHAT} element={<Chat />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
)


export default AppRouter