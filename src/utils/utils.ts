/* eslint-disable no-bitwise */
export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const move = (array: any[], fromIndex: any, toIndex: any) => {
  return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
};

export const findTodo = (todo: {title: string}, todoList: any[]) => {
  return todoList.find(
    item => item.title.toLowerCase() === todo.title.toLowerCase(),
  );
};
