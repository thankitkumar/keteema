import React from 'react'
import { ScrollView, View,Text,StyleSheet } from 'react-native'
import {DayText,Card, PriceText, PostImg, ProductText, DescriptionText } from '../../../common/favoritesCard/Card';
import Icon from 'react-native-vector-icons/AntDesign';
export default function FavoritesScreen() {
    return (
        <ScrollView>
           
                <Card>
                    <PostImg source={{ uri: 'https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=' }} />
                    <View style={styles.days}>
                    <PriceText>AED 300</PriceText>
                    <DayText>4 days ago</DayText>
                    </View>
                    <ProductText>Maruti Car</ProductText>
                    <DescriptionText>Good condition perfect condition</DescriptionText>
                    <View style={styles.days}>
                    <DescriptionText>Gurfah Area, india</DescriptionText>
                    <DayText><Icon name='delete' size={20} /></DayText>
                    </View>

                </Card>
                <Card>
                    <PostImg source={{ uri: 'https://www.lenovo.com/medias/lenovo-laptops-ideapad-5i-15-series-front-thumbnail.png?context=bWFzdGVyfHJvb3R8NTUwNjJ8aW1hZ2UvcG5nfGg1Yy9oZWMvMTEwOTQ1OTc0NjgxOTAucG5nfDc4NTkyNmU3NzUyYzkxYzU4OGI2YjQ4MmI1ZTlmMDc3NmVmOTFhYjI1NjBmZmI0YWJkM2UzMTljZmJlZThhZjU' }} />
                    <View style={styles.days}>
                    <PriceText>AED 300</PriceText>
                    <DayText>6 days ago</DayText>
                    </View>
                    <ProductText>HP Laptop</ProductText>
                    <DescriptionText>Good condition perfect condition</DescriptionText>
                    <View style={styles.days}>
                    <DescriptionText>Gurfah Area, india</DescriptionText>
                    <DayText><Icon name='delete' size={20} /></DayText>
                    </View>
                </Card>
                <Card>
                    <PostImg source={{ uri: 'https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=' }} />
                    <PriceText>AED 300</PriceText>
                    <ProductText>HP WiFi printer</ProductText>
                    <DescriptionText>Good condition perfect condition</DescriptionText>
                    <DescriptionText>Gurfah Area, india</DescriptionText>

                </Card>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    days: {
        flexDirection:'row',
    justifyContent:'space-between'
}
})