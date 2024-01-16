import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';

export default FlatListWithApi = () => {
  let [data, setData] = useState([]);
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
    <View>
      <Text style={{fontSize: 30}}>Flat List With Api</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 4,
                padding: 3,
                margin: 5,
              }}>
              <Text style={{fontSize: 30, backgroundColor: 'red'}}>
                id:{item.id}
              </Text>
              <Text style={{fontSize: 15}}>title:{item.title}</Text>
              <Text style={{fontSize: 15}}>body:{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};
