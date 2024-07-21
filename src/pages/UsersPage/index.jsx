import { useState } from "react";
import FilterPanel from "./FilterPanel";
import UsersList from "./UsersList";
import styles from "./UsersPage.module.sass";
import CONSTANTS from "./../../constants";

const { USER_FIELDS } = CONSTANTS;

function UsersPage() {
  // на початку вважємо, що всі поля підвантажуються ("login" підвантажується завжди)
  const [fieldsFilter, setFieldsFilter] = useState([
    ...USER_FIELDS.map(uf => uf.fieldName),
    "login",
  ]);

  return (
    <section>
      <h1>Users List</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.filterContainer}>
          <FilterPanel
            fieldsFilter={fieldsFilter}
            setFieldsFilter={setFieldsFilter}
          />
        </div>
        <div className={styles.listContainer}>
          <UsersList fieldsFilter={fieldsFilter} />
        </div>
      </div>
    </section>
  );
}

export default UsersPage;

// App;
// ---UsersPage
// ------UsersList
// ---------UsersListItem * n
// ------FilterPanel
// ------ControlPanel

// App;
// ---UsersPage - filter
// ------UsersList (ControlPanel) - users
// ------FilterPanel - change filter
