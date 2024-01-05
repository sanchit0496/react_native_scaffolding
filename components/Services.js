import { StyleSheet, Text, View ,ScrollView,Pressable,Image} from 'react-native'
import React from 'react'

const Services = () => {

 const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/628/628324.png",
      name: "Planting",
     
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2052/2052442.png",
      name: "Car Wash"
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/4514/4514764.png",
      name: "Electricity",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/994/994928.png",
      name: "Cleaning",
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/6485/6485915.png",
      name: "Pest Control",
    },
  ];
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16,fontWeight:"500",marginBottom:7, color: '#003F5C', marginTop: 10, marginLeft: 8}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})