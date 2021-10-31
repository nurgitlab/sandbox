import React from 'react';
import {Card} from "./Card/Card";


export const App = () => {
  return (
    <div>
        <Card width={"200px"} height={"400px"}>
            <button>Push me</button>
        </Card>
    </div>
  );
}