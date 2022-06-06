import { Refine } from "@pankod/refine-core";
import { Layout, ErrorComponent } from "@pankod/refine-antd";
import { dataProvider } from "@pankod/refine-supabase";
import routerProvider from "@pankod/refine-react-router-v6";
import "@pankod/refine-antd/dist/styles.min.css";
import { supabaseClient } from "./utility";

import { PostList } from "./pages/posts/list";
import authProvider from "./authProvider";
import { Login } from "./pages/login";

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      Layout={Layout}
      LoginPage={Login}
      catchAll={<ErrorComponent />}
      resources={[
        {
          name: "posts",
          list: PostList,
          canDelete: true,
        },
      ]}
    />
  );
};

export default App;
