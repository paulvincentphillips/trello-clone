import React from "react";
import { AppContainer } from "./styles";
import { Card } from "./card";
import { Column } from "./column";
import { AddNewItem } from "./AddNewItem";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Add Functionality" />
      </Column>
      <Column text="In Progress">
        <Card text="Style Homepage" />
      </Column>
      <Column text="Done">
        <Card text="Create GitHub Repository" />
      </Column>
      <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
