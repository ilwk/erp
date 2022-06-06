import { Refine } from "@pankod/refine-core";
import { Layout, ErrorComponent } from "@pankod/refine-antd";
import { dataProvider } from "@pankod/refine-supabase";
import routerProvider from "@pankod/refine-react-router-v6";
import { supabaseClient } from "./utility";
import "@pankod/refine-antd/dist/styles.min.css";

import authProvider from "./authProvider";
import { Login } from "./pages/login";
import companies from "./pages/companies";
import orders from "./pages/orders";
import contacts from "./pages/contacts";

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={{ ...routerProvider }}
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      Layout={Layout}
      LoginPage={Login}
      catchAll={<ErrorComponent />}
      resources={[companies, orders, contacts]}
    />
  );
};

export default App;
