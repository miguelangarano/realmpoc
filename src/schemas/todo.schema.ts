export const TODO_SCHEMA = 'Todo';

export const TodoSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: {type: 'string', indexed: true},
  },
};

export const databaseOptions = {
  path: 'todoListApp.realm',
  schema: [TodoSchema],
  schemaVersion: 0,
};

// export const insertNewTodoList = (newTodoList: any) =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           realm.create(TODOLIST_SCHEMA, newTodoList);
//           resolve(newTodoList);
//         });
//       })
//       .catch(error => reject(error));
//   });

// export const updateTodoList = (todoList: any) =>
//   new Promise<void>((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           let updatingTodoList: any = realm.objectForPrimaryKey(
//             TODOLIST_SCHEMA,
//             todoList.id,
//           );
//           if (updatingTodoList) {
//             updatingTodoList.name = todoList.name;
//           }
//           resolve();
//         });
//       })
//       .catch(error => reject(error));
//   });

// export const deleteTodoList = (todoListId: number) => {
//   return new Promise<void>((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           let deletingTodoList: any = realm.objectForPrimaryKey(
//             TODOLIST_SCHEMA,
//             todoListId,
//           );
//           realm.delete(deletingTodoList);
//           resolve();
//         });
//       })
//       .catch(error => reject(error));
//   });
// };

// export const deleteAllTodoLists = () => {
//   return new Promise<void>((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           let allTodoLists: any = realm.objects(TODOLIST_SCHEMA);
//           realm.delete(allTodoLists);
//           resolve();
//         });
//       })
//       .catch(error => reject(error));
//   });
// };

// export const queryAllTodoLists = () => {
//   return new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         let allTodoLists: any = realm.objects(TODOLIST_SCHEMA);
//         resolve(allTodoLists);
//       })
//       .catch(error => reject(error));
//   });
// };

// export const createTodoListener = (
//   onChange: (todos: any, changes: any) => void,
// ) => {
//   return new Promise<void>((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.addListener('change', (todos, changes) =>
//           onChange(todos, changes),
//         );
//         resolve();
//       })
//       .catch(error => reject(error));
//   });
// };

// export default new Realm(databaseOptions);
