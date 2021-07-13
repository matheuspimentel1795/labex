import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomePage} from '../pages/HomePage'
import { ListTripsPage } from "../pages/ListTripsPage";
import { AplicationFormPage } from "../pages/ApplicationFormPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { LoginPage } from "../pages/LoginPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";
    export const Router = ()=>{
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage/>
                    </Route>
                    <Route exact path={'/listTrips'}>
                        <ListTripsPage/>
                    </Route>
                    <Route exact path={'/inscricao/:id/:nome'}>
                        <AplicationFormPage/>
                    </Route>
                    <Route exact path={'/loginPage'}>
                        <LoginPage/>
                    </Route>
                    <Route exact path={'/admPage'}>
                        <AdminHomePage/>
                    </Route>
                    <Route exact path={'/criarPage'}>
                        <CreateTripPage/>
                    </Route>
                    <Route exact path={'/detalhesPage/:id/:nome'}>
                        <TripDetailsPage/>
                    </Route>
                </Switch>
            
            </BrowserRouter>
        )
    }