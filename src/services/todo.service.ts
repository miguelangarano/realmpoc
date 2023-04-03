import Realm from 'realm';

const repository = new Realm({
  schema: [
    {
      name: 'Todo',
      primaryKey: 'id',
      properties: {
        id: {type: 'string', indexed: true},
        title: 'string',
        completed: 'bool',
        createdAt: 'date',
        updatedAt: 'date',
      },
    },
  ],
});

export const findAll = (sortBy: any) => {
  if (!sortBy) {
    sortBy = [
      ['completed', false],
      ['updatedAt', true],
    ];
  }
  return repository.objects('Todo').sorted(sortBy);
};

export const save = (todo: any) => {
  if (
    repository.objects('Todo').filtered("title = '" + todo.title + "'").length
  ) {
    return;
  }

  repository.write(() => {
    todo.updatedAt = new Date();
    repository.create('Todo', todo);
  });
};

export const update = (todo: any, callback: any) => {
  if (!callback) {
    return;
  }
  repository.write(() => {
    callback();
    todo.updatedAt = new Date();
  });
};
