import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import {
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  Layout,
  LightTheme,
  notificationProvider,
  ReadyPage,
  RefineSnackbarProvider,
  ThemeProvider,
  LoginPage,
} from "@pankod/refine-mui";

import posts from "./pages/posts";
import { authProvider } from "./authProvider";
import { dataProvider } from "@pankod/refine-supabase";

import companies from "./pages/companies";
import orders from "./pages/orders";
import contacts from "./pages/contacts";
import { supabaseClient } from "./utility";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(supabaseClient)}
          notificationProvider={notificationProvider}
          authProvider={authProvider}
          Layout={Layout}
          LoginPage={LoginPage}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[companies, orders, contacts, posts]}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
