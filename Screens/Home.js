import react from "react"
import React,{Components}from "react"
import axios from "axios"
import {
    View,
    Text,
    Flatlist,
    StyleSheet,
    Alert,
    SafeAreaView
} from "react-native"
import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio"

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listdata:[],
            url:"http://127.0.0.1:5000/"
        }
    }
    getPlanets=()=>{
        const {url}=this.state
        axios
        .get(url)
        .then(response=>{
            return this.setState({
                listdata:response.data.data
            })
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

    componentDidMount(){
        this.getPlanets()
    }

renderItem=({item,index})=>(
    <ListItem
    key={index}
    title={`Planet: ${item.name}`}
    subtitle={`Distance From Earth: ${item.distance_from_earth}`}
    titleStyle={styles.title}
    containerStyle={styles.listContainer}
    bottomDivider
    chevron
    onPress={()=>this.props.navigation.navigate("Details",{planet_name:item.name})}
    >
    
    </ListItem>
)
keyExtractor=(item,index)=>index.toString()

    render(){
        const {listdata}=this.state
        if (listdata.length===0){
            return(
                <View style={styles.emptyContainer}>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        }
        return(
            <View style={styles.container}>
<SafeAreaView/>
<View style={styles.upperContainer}>
<Text style={styles.headerText}>
PLANETS WORLD
</Text>
</View>
<View style={styles.lowerContainer}>
<Flatlist
keyExtractor={this.keyExtractor}
data={this.state.listdata}
renderItem={this.renderItem}>

</Flatlist>
</View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#edc988"
    },
    upperContainer: {
      flex: 0.1,
      justifyContent: "center",
      alignItems: "center"
    },
    headerText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#132743"
    },
    lowerContainer: {
      flex: 0.9
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    emptyContainerText: {
      fontSize: 20
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#d7385e"
    },
    listContainer: {
      backgroundColor: "#eeecda"
    }
  });