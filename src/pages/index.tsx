/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import {realmContext} from '../hooks/realm-context';
import {TodoSchema} from '../schemas/todo.schema';

const {useRealm, useQuery} = realmContext;

const MyPage = () => {
  const realm = useRealm();
  const todos = useQuery(TodoSchema.name);
  const textData = useRef<string>('');

  const onAddTask = useCallback(
    (text: string) => {
      const item = realm.write(() => {
        const newItem = realm.create(TodoSchema.name, {
          id: uuid.v4(),
          name: text,
        });
        return newItem;
      });
      console.log('New Item', item);
    },
    [realm],
  );

  const onDeleteTask = useCallback(
    (id: string) => {
      const item = realm.objectForPrimaryKey(TodoSchema.name, id);
      if (item) {
        realm.write(() => {
          realm.delete(item);
        });
      }
      console.log('Deleted Item', item);
    },
    [realm],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        <Button
          color="#175DC8"
          title="Add Task"
          onPress={() => onAddTask(textData.current)}
        />
        <TextInput
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          clearButtonMode="always"
          onChangeText={(text: string) => {
            textData.current = text;
          }}
        />
        <FlatList
          style={{marginTop: 30}}
          data={todos as unknown as {id: string; name: string}[]}
          renderItem={({
            item,
            index,
          }: {
            item: {id: string; name: string};
            index: number;
          }) => {
            return (
              <FlatListItem
                key={index}
                id={item.id}
                name={item.name}
                onPressItem={() => {
                  console.log('PRESSS');
                  onDeleteTask(item.id);
                }}
              />
            );
          }}
          keyExtractor={(item: {id: any}) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyPage;

const FlatListItem = (props: any) => {
  const {id, name, onPressItem} = props;

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View
        key={id}
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 1,
          display: 'flex',
          justifyContent: 'center',
          padding: 10,
        }}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
