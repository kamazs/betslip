import React from "react";
import ReactDOM from "react-dom";
import socketio from "socket.io-client";
import App from "./components/App.js";
import { createStore } from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

const render = () => ReactDOM.render(<App
        data = {store.getState()}
        onUpdate = {
            (id, newValue, selected) => {
                store.dispatch( {
                        type: "UPDATE_VALUE", 
                        id: id, 
                        value: newValue
                    }
                );
                
                if (newValue && !selected) {
                    store.dispatch({
                        type: "UPDATE_SELECTED",
                        id: id,
                        selected: true
                    });
                }
            }
        }
        onSelect = {
            id => store.dispatch(
                {
                    type: "UPDATE_SELECTED",
                    id: id,
                    selected: true
                }
            )
        }
    />, 
    document.getElementById("messageContainer")
);

store.subscribe(render);
render();

const socket = socketio();
socket.on("update", odd => {
    console.log(Date.now(), " Server update: ", odd);
    store.dispatch({
        type: "UPDATE_ODD",
        id: odd.id,
        odd: odd.odd
    });
});

socket.on("add", odds => {
    console.log(Date.now(), " Odd added from server: ", odds);
    odds.forEach( odd => {
        store.dispatch({
            type: "ADD",
            id: odd.id, 
            odd: odd.odd
        });
    });
    console.log("Store: ", store.getState());
} );