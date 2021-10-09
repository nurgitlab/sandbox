import { PersonList } from "./PersonList";
import { CreatePerson } from "./CreatePerson";
import { ClearAllPersons } from "./ClearAllPersons";

export const App = () => {
  return (
    <div>
      <CreatePerson />
      <PersonList/>
      <ClearAllPersons />
    </div>
  );
};

