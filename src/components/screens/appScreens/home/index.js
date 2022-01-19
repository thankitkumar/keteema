import React from 'react'
import { View, TextInput, ScrollView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../../common/homeCard/Title'
import Card from '../../../common/homeCard/Card'
import CategoriesCard from '../../../common/homeCard/CategoriesCard';

const HomeScreen = ({ navigation }, props) => {
    const Photo = 'https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o='
    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <LinearGradient
                colors={["#fff", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    // marginTop: -45
                }}
            >
                <View style={{
                    backgroundColor: "#EFF4F4",
                    paddingVertical: 4,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius: 30,
                    marginTop: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    width: 290
                }}>
                    <Icon name='search' size={15} />
                    <TextInput
                        placeholder="What are you Looking for?"
                        placeholderTextColor="#000000"
                        style={{
                            // fontWeight: "bold",
                            fontSize: 16,
                            width: 260,
                            marginLeft: 10
                        }}
                    />
                    <Icon name='bell' size={20} />
                </View>

            </LinearGradient>

            <ScrollView

            >
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <CategoriesCard name='Property for rent' iconName='hospital-o' />
                    <CategoriesCard name='Property for Sale' iconName='building' />
                    <CategoriesCard name='Rooms for rent' iconName='hotel' />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <CategoriesCard name='Motors' iconName='car' />
                    <CategoriesCard name='Classifieds' iconName='shirtsinbulk' />
                    <CategoriesCard name='Furniture & Garden' iconName='wheelchair' />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <CategoriesCard name='Mobile Phone & Tablets' iconName='hotel' />
                    <CategoriesCard name='Community' iconName='hotel' />
                    <CategoriesCard name='Jobs' iconName='black-tie' />
                </View>
                <Title title='You recently looked at' />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                // style={{ height: 400 }}
                >
                    <Card Photo={Photo} Price=' AED 2,045' ProductName='Maruti car' Area='Abu dhabi' />
                    <Card Photo={Photo} Price='245' ProductName='Maruti car' Area='Abu dhabi' />
                    <Card Photo={Photo} Price='245' ProductName='Maruti car' Area='Abu dhabi' />
                </ScrollView>
                <Title title='Popular in Residential for Rent' />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                // style={{ height: 400 }}
                >
                    <Card Photo={Photo} Price=' AED 2,045' ProductName='Maruti car' Area='Abu dhabi' />
                    <Card Photo={Photo} Price='245' ProductName='Maruti car' Area='Abu dhabi' />
                    <Card Photo={Photo} Price='245' ProductName='Maruti car' Area='Abu dhabi' />
                </ScrollView>
                <Title title='Popular in Residential for Rent' />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                // style={{ height: 400 }}
                >
                    <Card Photo={Photo} Price=' AED 2,045' ProductName='Maruti car' Area='Abu dhabi' />
                    <Card Photo={Photo} Price='245' ProductName='Maruti car' Area='Abu dhabi' />
                    <Card Photo={Photo} Price='245' ProductName='Maruti car' Area='Abu dhabi' />
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;