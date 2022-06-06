import { Admin, defaultTheme, ListGuesser, Resource } from "react-admin";
import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";
import { Dashboard } from "./dashboard/Dashboard";
import contacts from "./contacts";
import companies from "./companies";
import deals from "./deals";
import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  ...defaultTheme,
};

const App = () => {
  return (
    <Admin
      theme={theme}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="deals" {...deals} />
      <Resource name="contacts" {...contacts} />
      <Resource name="companies" {...companies} />
      <Resource name="contactNotes" />
      <Resource name="dealNotes" />
      <Resource name="tasks" list={ListGuesser} />
      <Resource name="sales" list={ListGuesser} />
      <Resource name="tags" list={ListGuesser} />
    </Admin>
  );
};

export default App;
