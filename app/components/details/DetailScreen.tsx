import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigationBarView from 'app/components/common/NavigationBarView';

const DetailScreen = (props: any) => (
  <View style={{ flex: 1 }}>
    <NavigationBarView
      style={{ backgroundColor: 'white' }}
      showBackButton
      onBackButtonPress={() => props.navigation.goBack()}
    />
    <View style={{ marginTop: 64, marginHorizontal: 32 }}>
      <Text style={{ fontSize: 24 }}>
        This text is shared between news feed and details screen
      </Text>
      <TouchableOpacity
        style={{ height: 44, width: 100, margin: 16 }}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default DetailScreen;
