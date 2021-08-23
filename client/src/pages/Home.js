import React, { useEffect, useState } from 'react'
import { Header, Message } from "semantic-ui-react";
import { RecipeList } from '../components/RecipeList';
import { useRecipes } from '../hooks/useRecipes';

export const Home = () => {
  const { actions, state } = useRecipes();

  useEffect(() => {
    actions.fetch();
  }, []);

  return (
    <div>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge">Strona Kulinarna - PRZEPIŚNIK</Header>
        <p>Dodawaj, przeglądaj, oceniaj. </p>
        <p>Miłego gotowania</p>
      </Message>

      <RecipeList recipes={state.recipes} />
    </div>
  )
};

export default Home;
