import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addOnCartAction, decrementOnCartAction, incrementOnCartAction  } from '../redux/actions/CartAction';
const Home = () => {
    const product_list = [
        {id:1, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Jack Daniel', brand:'Whisky', title:'4 bars', price:'85'},
        {id:2, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Absolut Vodka', brand:'Whisky', title:'4 bars', price:'85'},
        {id:3, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Jack Daniel', brand:'Whisky', title:'4 bars', price:'85'},
        {id:4, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Budwiser', brand:'Whisky', title:'4 bars', price:'85'},
        {id:5, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Club', brand:'Whisky', title:'4 bars', price:'85'},
        {id:6, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'King Fisher', brand:'Whisky', title:'4 bars', price:'85'},
        {id:7, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Simba', brand:'Whisky', title:'4 bars', price:'85'},
        {id:8, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Jack Daniel', brand:'Whisky', title:'4 bars', price:'85'},
        {id:9, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Jack Fisher', brand:'Whisky', title:'4 bars', price:'85'},
        {id:10, image:'https://images.vexels.com/media/users/3/145468/isolated/preview/53d87c0a2f96e388df08ae49d197bf59-beer-bottle.png', name:'Jack Daniel', brand:'Whisky', title:'4 bars', price:'85'}
    ]

    const dispatch = useDispatch()

    const addOnCart = (id:number) => {
        dispatch(addOnCartAction(id))
    }

    const increment = (id:number, quantity:number) => {
        dispatch(incrementOnCartAction(id, quantity))
    }

    const decrement = (id:number, quantity:number) => {
        dispatch(decrementOnCartAction(id, quantity))
    }

    const cartData = useSelector((state:any)=>state.CartReducer);

    const renderItems = ({item}:any) => {
        const findItem = cartData.cartItems.find((value:any)=>value.id==item.id);
        return(
            <View style={styles.product_colum}>
                <Image style={styles.product_image} source={{uri:item.image}} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
                <Text style={styles.title}>{item.title}</Text>
            {findItem?
                <View style={styles.plus_minus_btn}>
                <TouchableOpacity onPress={()=>decrement(item.id, findItem.quantity)} style={{...styles.add_cart, width:30}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>-</Text>
                </TouchableOpacity>
                    <View style={{width:30, alignItems:'center', marginTop:6}}>
                    <Text style={{fontSize:20}}>{findItem.quantity}</Text>
                    </View>
                <TouchableOpacity onPress={()=>increment(item.id, findItem.quantity)} style={{...styles.add_cart, width:30}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>+</Text>
                </TouchableOpacity>
                </View>
                :
                <TouchableOpacity onPress={()=>addOnCart(item.id)} style={styles.add_cart}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Add To Cart</Text>
                </TouchableOpacity>
            }
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList
             data={product_list}
             renderItem={renderItems}
             keyExtractor={(item)=>item.id.toString()}
             numColumns={2}
             contentContainerStyle={styles.flatlist_style}
            />

            <View style={styles.cart_section}>
                <View style={styles.filter}>
                    <Text style={{fontWeight:'bold'}}>Filter</Text>
                </View>
                <View style={styles.cart}>
                <Text style={{color:'white', fontWeight:'bold'}}>{cartData.cartItems.length}</Text>
     
                <Image style={{width:20, height:20}} source={{uri:'https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png'}} />
                </View>
                <View style={styles.sort}>
                    <Text style={{fontWeight:'bold'}}>Sort</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    flatlist_style:{
      
    },

    product_colum:{
        width:'48%',
        alignItems:'center',
        marginVertical:20,
    },

    product_image:{
        height:100,
        width:50
    },
    
    name:{
        color:'black',
        fontWeight:'bold'
    },

    brand:{
        color:'gray',
    },

    title:{
        color:'black',
    },

    price:{
        color:'red',
        fontWeight:'bold'
    },

    add_cart:{
        backgroundColor:'brown',
        width:'60%',
        height:30,
        borderRadius:5,
        alignItems:'center',
        paddingTop:5,
        marginTop:5
    },
    
    plus_minus_btn:{
        flexDirection:'row'
    },

    cart_section:{
        position:'absolute',
        flexDirection:'row',
        bottom:'10%',
        left:'23%'
    },

    filter:{
        width:100,
        height:40,
        backgroundColor:'#DDEAF1',
        borderTopStartRadius:20,
        borderBottomStartRadius:20,
        alignItems:'center',
        paddingTop:10
    },

    sort:{
        width:100,
        height:40,
        backgroundColor:'#DDEAF1',
        borderTopEndRadius:20,
        borderBottomEndRadius:20,
        alignItems:'center',
        paddingTop:10,
        marginLeft:5
    },

    cart:{
        height:50, 
        width:50,
        borderRadius:50, 
        backgroundColor:'brown',
        marginTop:-25,
        alignItems:'center',
        paddingTop:0,
        position:'absolute',
        left:'38%',
        zIndex:10,
        borderWidth:5,
        borderColor:'white'
    }
})
export default Home