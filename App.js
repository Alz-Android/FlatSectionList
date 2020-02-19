import { Component, default as React } from 'react';
import { View, FlatList, SectionList, TouchableHighlight, Text, StyleSheet, Image, Alert } from 'react-native';

export default class NestedFlat extends Component {
  constructor() {
    super();
    this.state = {enableScrollViewScroll: true};
    this.state = { count: 0 }
  }

  // https://source.unsplash.com/150x150/?adventure 
  componentDidMount() {
    let items = Array.apply(null, Array(10)).map((v, i) => {
        return { id: i, src: 'https://i.picsum.photos/id/'+ i +'/100/100.jpg' };
      });

    this.setState({
      dataSource: items,
    });
  }

  //handling onPress action  
  getListViewItem = (item) => {  
    Alert.alert(item.key);  
  }  

  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.titleTop}>VN Viewer</Text>
          <View style={styles.rightNav}>
          <Text style={{paddingTop: 18 }}>Search</Text>
          </View>
        </View>
      
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) => index.toString() }
          renderItem={() => this.renderSectionList() }           
        />
  
        <View style={styles.tabBar}>
          <Text>Following</Text>
          <View style={styles.tabItem}>
            <Text>Discover</Text>
          </View>
          <View style={styles.tabTitle}>
            <Text>Browse</Text>       
          </View>       
        </View>
      </View>
    );
  }

  renderSectionList() {
    return (    
        <FlatList
            horizontal={true}
            data={this.state.dataSource}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={this.getListViewItem.bind(this, item)} >
                <View style={{margin: 20 }}>
                  <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                  <Text style={styles.titleMid}>VN {item.id}</Text>
                </View>
              </TouchableHighlight>
            )}             
        />
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,      
    },
    item: {
      flex: 1,
      backgroundColor: '#009000',
      padding: 2,
      marginVertical: 8,
      marginHorizontal: 5,
    },
    titleTop: {
      paddingTop: 15,
      fontSize: 28,
    },
    titleMid: {
      fontSize: 18,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      width: 220,
    },
    navBar: {
      height: 65,
      backgroundColor: 'white',
      elevation: 0,
      padding: 15,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
      },
    rightNav: {
      flexDirection: 'row'
    },
    navItem: {
      marginLeft: 25
    },
    body: {
      flex: 1
    },
    tabBar: {
      backgroundColor: 'white',
      height: 50,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabTitle: {
      fontSize: 11,
      color: '#3c003c'
  },
}) 