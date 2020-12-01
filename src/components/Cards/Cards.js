import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Cards() {
    const [pets, setPets] = useState([{
        name: "Dog 1",
        url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    },
    {
        name: "Dog 2",
        url: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80",
    },
    {
        name: "Dog 3",
        url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="centerCards" >
            <div className="centerCards__cardContainer" >
                {pets.map((animal) => (
                    <TinderCard className="swipe"
                        key={animal.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, animal.name)}
                        onCardLeftScreen={() => outOfFrame(animal.name)} >
                        <div
                            style={{backgroundImage: `url(${animal.url})`}}
                            className="card" >
                            <h3>{animal.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default Cards;