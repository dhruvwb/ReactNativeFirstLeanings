import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';

export default ListWithApiCall = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ScrollView>
      <Text style={{fontSize: 30}}>List With Api Call</Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                fontSize: 30,
                padding: 4,
                borderBottomColor: '#ccc',
                borderBottomWidth: 2,
              }}>
              <Text>id: {item.id}</Text>
              <Text>UserId: {item.UserId}</Text>
              <Text>title: {item.title}</Text>
              <Text>body: {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};
