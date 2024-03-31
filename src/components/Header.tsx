import {View, Image, Text, StyleSheet} from 'react-native'

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row', width:'100%', marginTop:20}}>
            <View style={styles.icon_image_section}>
              <Image 
              style={styles.icon_bar}
              source={{uri:'https://icons.veryicon.com/png/o/miscellaneous/01-monochrome-linear-icon-library/menu-bar.png'}} />
            </View>
            <View style={styles.logo_section}>
                <Text style={styles.logo}>LIQUORE</Text>
            </View>
            <View style={styles.search_image_section}>
            <Image 
              style={styles.icon_search}
              source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png'}} />
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',
        height:100,
        justifyContent:'center',
        elevation:3,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    icon_bar:{
        width:30,
        height:30,
        marginLeft:10
    },

    icon_image_section:{
        width:'30%',
        justifyContent:'center'
    },

    logo_section:{
        width:'40%',
        alignItems:'center',
        justifyContent:'center'
    },

    search_image_section:{
        width:'30%',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    
    icon_search:{
        width:20,
        height:20,
        marginRight:10
    },
    logo:{
        fontSize:18,
        fontWeight:'bold',
    }
})

export default Header