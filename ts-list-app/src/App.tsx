import React from 'react';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {UsersPage} from "./UsersPage/UsersPage";
import {TodosPage} from "./TodosPage/TodosPage";
import {UserItemPage} from "./UserItemPage/UserItemPage";


export const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/todos">Todos list</NavLink>
                </div>
                <Route path={"/users"} exact>
                    <UsersPage/>
                </Route>

                <Route path={"/todos"} exact>
                    <TodosPage/>
                </Route>

                <Route path={"/user/:id"}>
                    <UserItemPage/>
                </Route>

                <Route path={"/todos/:id"}>
                    <TodosPage/>
                </Route>
            </div>
        </BrowserRouter>
    );

    // return (
    //     <div>
    //         <Card
    //             width={"200px"}
    //             height={"400px"}
    //             variant={CardVariant.outlined}
    //             onClick={(num) => console.log("PUSHED", num)}
    //         >
    //             <button>
    //                 Push me
    //             </button>
    //         </Card>
    //
    //
    //         <EventsExample/>
    //     </div>
    // );
}