import {createRealmContext} from '@realm/react';
import {TodoSchema} from '../schemas/todo.schema';

export const realmContext = createRealmContext({
  schema: [TodoSchema],
});
