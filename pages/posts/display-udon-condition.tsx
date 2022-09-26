import { SelectedNoodles } from "../../components/noodles";
import { SelectedSoup } from "../../components/soup";
import { SelectedHowToBoil } from "../../components/howToBoil";
import { SelectedToppings } from "../../components/toppings";
import { SelectedSeasonings } from "../../components/seasoning";
import { UdonCondition } from "../../types/udonCondition";
import React from "react";

export default function displayUdoncondition() {
  const udonCondition = new UdonCondition(SelectedNoodles, SelectedSoup, SelectedHowToBoil, SelectedToppings(), SelectedSeasonings());
  return (
    <>
      <h3>Noodles</h3>
      <p>{ udonCondition.noodles} </p>
      <h3>Soup</h3>
      <p>{ udonCondition.soup} </p>
      <h3>HowToBoil</h3>
      <p>{ udonCondition.howToBoil} </p>
      <h3>Toppings</h3>
      <p>{ udonCondition.toppings} </p>
      <h3>Seasonings</h3>
      <p>{ udonCondition.seasonings} </p>
    </>
  )
}
