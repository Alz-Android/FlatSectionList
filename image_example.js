<FastImage
style={{ width: 200, height: 200 }}
source={{
    uri: 'https://unsplash.it/40/40?image=1',
    headers: { Authorization: 'someAuthToken' },
    priority: FastImage.priority.normal,
}}
resizeMode={FastImage.resizeMode.contain}
/>


// import React, { Component } from 'react';
// import { View, ScrollView , Text, StyleSheet, Platform } from 'react-native';

// export default class App extends Component {
//   constructor() {
// 		super();
// 		this.state = {
// 			content: {}
// 		};
// 	}
  
//   render() {
//     return (
//         <View style = { styles.container }>
//         <View style = { styles.scrollViewHolder }>
//            <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false } 
//                 onTouchStart={(ev) => { this.setState({ content: { flex: 1 } }); }} 
//                 onMomentumScrollEnd={(e) => { this.setState({ content: {} }); }}
//                 onScrollEndDrag={(e) => { this.setState({ content: {} }); }}>
               
//               <Text style = { styles.item }>Afghanistan</Text>
//               <View style = { styles.separator }/>
//               <Text style = { styles.item }>Bangladesh</Text>
//               <View style = { styles.separator }/>
//               <Text style = { styles.item }>Canada</Text>
//               <View style = { styles.separator }/>
//               <Text style = { styles.item }>Denmark</Text>
//               <View style = { styles.separator }/>
//             </ScrollView>
//         </View>
//      </View>
						
//     );
//   }
// }

// const styles = StyleSheet.create(
//     {
//        container:
//        {
//           paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
//           flex: 1,
//           justifyContent: 'center'
//        },
     
//        scrollViewHolder:
//        {
//           borderTopWidth: 2,
//           borderBottomWidth: 2,
//           borderTopColor: 'rgba(0,0,0,0.5)',
//           borderBottomColor: 'rgba(0,0,0,0.5)'
//        },
     
//        item:
//        {
//           padding: 15,
//           color: 'black',
//           fontSize: 18
//        },
     
//        separator:
//        {
//           width: 2,
//           backgroundColor: 'rgba(0,0,0,0.5)'
//        }
//     });


 

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text , Image} from 'react-native';
// import Constants from 'expo-constants';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//         <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
//             style = {{ width: 280, height: 100 }} />
//         <Text>
//            'studddff'
//         </Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//         <FlatList
//             horizontal={true}
//             data={DATA}
//             renderItem={({ item }) => <Item title={item.title} />}
//             keyExtractor={item => item.id}
//         />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   item: {
//     backgroundColor: '#09c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

