import ContactCreate from "./ContactCreate";
import ContactEdit from "./ContactEdit";
import ContactsList from "./ContactList";

export default {
  name: "contacts",
  list: ContactsList,
  create: ContactCreate,
  edit: ContactEdit,
};
