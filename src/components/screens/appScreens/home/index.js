import React, { useEffect, useState } from 'react'
import { View, TextInput, ScrollView, ActivityIndicator, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../../common/homeCard/Title'
import Card from '../../../common/homeCard/Card'
import CategoriesCard from '../../../common/homeCard/CategoriesCard';
import { useQuery, gql } from "@apollo/client";
import {
    QUERY_ALL_jobAdvertises,
    QUERY_ALL_propertyRentAdvertises,
    QUERY_ALL_motorAdvertises,
    QUERY_ALL_propertySaleAdvertises,
    QUERY_ALL_electronicsAdvertises,
    QUERY_ALL_communityAdvertises,
    QUERY_ALL_exportImportAdvertises
} from '../../../../utility/graphql/qurery';

const HomeScreen = ({ navigation }, props) => {

    const { data: propertyRentAdvertisesDatas,
        loading: propertyRentAdvertisesLoading,
        error: propertyRentAdvertisesError } = useQuery(QUERY_ALL_propertyRentAdvertises)
    const { data: motorAdvertisesDatas,
        loading: motorAdvertisesLoading,
        error: motorAdvertisesError } = useQuery(QUERY_ALL_motorAdvertises)
    const { data: jobAdvertisesDatas,
        loading: jobAdvertisesLoading,
        error: jobAdvertisesError } = useQuery(QUERY_ALL_jobAdvertises)
    const { data: propertySaleAdvertisesDatas,
        loading: propertySaleAdvertisesLoading,
        error: propertySaleAdvertisesError } = useQuery(QUERY_ALL_propertySaleAdvertises)
    const { data: electronicsAdvertisesDatas,
        loading: electronicsAdvertisesLoading,
        error: electronicsAdvertisesError } = useQuery(QUERY_ALL_electronicsAdvertises)
    const { data: communityAdvertisesDatas,
        loading: communityAdvertisesLoading,
        error: communityAdvertisesError } = useQuery(QUERY_ALL_communityAdvertises)
    const { data: exportImportAdvertisesDatas,
        loading: exportImportAdvertisesLoading,
        error: exportImportAdvertisesError } = useQuery(QUERY_ALL_exportImportAdvertises)

    const [propertyRentAdvertisesData, setPropertyRentAdvertisesData] = useState(propertyRentAdvertisesDatas)
    const [motorAdvertisesData, setMotorAdvertisesData] = useState(motorAdvertisesDatas)
    const [jobAdvertisesData, setjobAdvertisesData] = useState(jobAdvertisesDatas)
    const [propertySaleAdvertisesData, setPropertySaleAdvertisesData] = useState(propertySaleAdvertisesDatas)
    const [electronicsAdvertisesData, setElectronicsAdvertisesData] = useState(electronicsAdvertisesDatas)
    const [communityAdvertisesData, setCommunityAdvertisesData] = useState(communityAdvertisesDatas)
    const [exportImportAdvertisesData, setExportImportAdvertisesData] = useState(exportImportAdvertisesDatas)

    useEffect(() => {
         if (exportImportAdvertisesDatas && propertyRentAdvertisesDatas && motorAdvertisesDatas && jobAdvertisesDatas && propertySaleAdvertisesDatas && electronicsAdvertisesDatas && communityAdvertisesDatas) {
            setPropertyRentAdvertisesData(propertyRentAdvertisesDatas)
            setExportImportAdvertisesData(exportImportAdvertisesDatas)
            setMotorAdvertisesData(motorAdvertisesDatas)
            setjobAdvertisesData(jobAdvertisesDatas)
            setPropertySaleAdvertisesData(propertySaleAdvertisesDatas)
            setElectronicsAdvertisesData(electronicsAdvertisesDatas)
            setCommunityAdvertisesData(communityAdvertisesDatas)
         } 
    }, [exportImportAdvertisesDatas, propertyRentAdvertisesDatas, motorAdvertisesDatas, jobAdvertisesDatas, propertySaleAdvertisesDatas, electronicsAdvertisesDatas, communityAdvertisesDatas])
    if (propertyRentAdvertisesLoading && motorAdvertisesLoading && jobAdvertisesLoading && propertySaleAdvertisesLoading && electronicsAdvertisesLoading && communityAdvertisesLoading && exportImportAdvertisesLoading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size="large" color="#0654f3" />
            </View>
        )
    }


    //   if (propertyRentAdvertisesError  &&  motorAdvertisesError  &&  jobAdvertisesError && propertySaleAdvertisesError  && electronicsAdvertisesError  &&  communityAdvertisesError && exportImportAdvertisesError) {
    //     return (
    //         <View style={{ justifyContent: 'center', alignItems: 'center',flex:1 }}>
    //             <ActivityIndicator size="large" color="#0654f3" />
    //             <Text> something went wrong</Text>
    //         </View>
    //     )
    // }
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
                    <CategoriesCard name='Property for rent' iconName='hospital-o' onpress={() => navigation.navigate('HomeCategories')} />
                    <CategoriesCard name='Property for Sale' iconName='building' onpress={() => navigation.navigate('HomeCategories')} />
                    <CategoriesCard name='Rooms for rent' iconName='hotel' onpress={() => navigation.navigate('HomeCategories')} />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <CategoriesCard name='Motors' iconName='car' onpress={() => navigation.navigate('HomeCategories')} />
                    <CategoriesCard name='Classifieds' iconName='shirtsinbulk' onpress={() => navigation.navigate('HomeCategories')} />
                    <CategoriesCard name='Furniture & Garden' iconName='wheelchair' onpress={() => navigation.navigate('HomeCategories')} />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <CategoriesCard name='Mobile Phone & Tablets' iconName='hotel' onpress={() => navigation.navigate('HomeCategories')} />
                    <CategoriesCard name='Community' iconName='hotel' onpress={() => navigation.navigate('HomeCategories')} />
                    <CategoriesCard name='Jobs' iconName='black-tie' onpress={() => navigation.navigate('HomeCategories')} />
                </View>
                <Title title='Popular in Residential for Rent' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}

                >
                    {propertyRentAdvertisesData && !propertyRentAdvertisesLoading ? propertyRentAdvertisesData.propertyRentAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
                <Title title='Popular in Motors' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {motorAdvertisesData && !motorAdvertisesLoading ?motorAdvertisesData.motorAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
                <Title title='Popular in Job' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {jobAdvertisesData && !jobAdvertisesLoading? jobAdvertisesData.jobAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
                <Title title='Popular in Property sale' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {propertySaleAdvertisesData&& !propertySaleAdvertisesLoading ? propertySaleAdvertisesData.propertySaleAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
                <Title title='Popular in Electronics' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {electronicsAdvertisesData && !electronicsAdvertisesLoading ?electronicsAdvertisesData.electronicsAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
                <Title title='Popular in Community' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {communityAdvertisesData && !communityAdvertisesLoading ?communityAdvertisesData.communityAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
                <Title title='Popular in Export Import' onpress={() => navigation.navigate('FullAboutProduct')} />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {exportImportAdvertisesData && !exportImportAdvertisesLoading? exportImportAdvertisesData.exportImportAdvertises.edges.map((data, index) => {
                        const photo = data.node.advertiseAttachments.map((itmes, key) => {
                            return itmes.file
                        })
                        return (
                            <Card Photo={`http://65.1.64.139/media/${photo[0]}`} Currency={data.node.currency} ProductName={data.node.title} Area={data.node.location} Price={data.node.price} onpress={() => navigation.navigate('OneAboutProduct')} />
                        )
                    }):''}
                </ScrollView>
            </ScrollView>
        </View>
    )
}
export default HomeScreen;
