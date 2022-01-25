import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Body from '../../../common/myads/Body'
import Button from '../../../common/myads/Button'

export default function MyAdsScreen({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            >
            <Button title="All Ads (0)"/>
            <Button title="Drafts (0)"/>
            <Button title="Payment Pending (0)"/>
            <Button title="Under Review (0)"/>
            <Button title="Live (0)"/>
            <Button title="Rejected (0)"/>
            </ScrollView>
            <Body text='You have not Placed any ads yet!' navigation={navigation}/>
        </SafeAreaView>
    )
}