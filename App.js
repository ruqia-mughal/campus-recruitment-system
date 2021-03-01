import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image,ImageBackground } from 'react-native';
import { createStackNavigator,createAppContainer } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import  { Container, Header,Form, Item, Input, Label, Content, Footer, FooterTab, Button } from 'native-base';



// function Register({ navigation }) {

//    return(
//     <View style={container}>
//     <Content>
//     <Form>
//       <Item floatingLabel>
//         <Label>Full Name</Label>
//         <Input />
//       </Item>
//       <Item floatingLabel>
//         <Label> Email</Label>
//         <Input />
//       </Item>
//       <Item floatingLabel>
//         <Label>course</Label>
//         <Input />
//       </Item>
//       <Item floatingLabel>
//         <Label>contact number</Label>
//         <Input />
//       </Item>
//       <Item floatingLabel last>
//         <Label>Password</Label>
//         <Input />
//       </Item>
   
//       <Button primary block  full rounded style={styles.margin}>
//         <Text style={styles.text2} > Sign up  </Text></Button>
//     </Form>
       
//   </Content>
//     </View>
//     )
//   }
function Signup({ navigation })  { 
  return(
   <Container>
 
   <Content>
     <Form>
       <Item floatingLabel>
         <Label>Username</Label>
         <Input />
       </Item>
       <Item floatingLabel last>
         <Label>Password</Label>
         <Input />
       </Item>
       <Button primary block  full rounded style={styles.margin} >
           <Text style={styles.text2}> Login  </Text>
         </Button>
    
 
     </Form>
  
         
           <Button rounded block light bordered >
           
           <Text style={styles.text}> Login as student</Text>
         </Button>
         <Button rounded block success bordered >
           <Text  style={styles.text}>Company Login</Text>
         </Button>
         <Button rounded block dark bordered >
           <Text  style={styles.text}>  Login as Admin</Text>
         </Button>
         
   </Content>
         <Footer style={styles.rounded}>
         <FooterTab>
    
         <Button rounded  success  >
         <Text style={styles.text2} > Dont have account? Sign up</Text>
        </Button>
         </FooterTab>
          
         
         </Footer>
 </Container>
   )
 }
function Splash({ navigation }) {
    setTimeout(() => {
      navigation.replace("Login");
      
    }, 1000);
    return (
<ImageBackground source={require("./assests/download.png")}style={{ height: "100%", width: "100%",resizeMode:"contain" }}>   
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"red" }}>
   <Text style={styles.largest}>Campus</Text>
   <Text style={styles.largest}>Recuritment</Text>
   <Text style={styles.largest}>System</Text>
 
</View>
</ImageBackground>
)
}
function Login({ navigation })  { 
 
 return(
  <Container>

  <Content>
    <Form>
      <Item floatingLabel>
        <Label>Username</Label>
        <Input />
      </Item>
      <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item>
      <Button primary block  full rounded style={styles.margin} >
          <Text style={styles.text2}> Login  </Text>
        </Button>
   

    </Form>
 
        
          <Button rounded block light bordered >
          
          <Text style={styles.text}> Login as student</Text>
        </Button>
        <Button rounded block success bordered >
          <Text  style={styles.text}>Company Login</Text>
        </Button>
        <Button rounded block dark bordered >
          <Text  style={styles.text}>  Login as Admin</Text>
        </Button>
        
  </Content>
        <Footer style={styles.rounded}>
        <FooterTab>
   
        <Button rounded  success  >
        <Text style={styles.text2} > Dont have account? Sign up</Text>
       </Button>
        </FooterTab>
         
        
        </Footer>
</Container>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name={"College Recruitment system"} component={Splash} options={{
          title: '',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          }} />
   
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Sign up OR Register"} component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
  ,
  largest:{
    fontSize:60,
    fontStyle:"italic",
    color:"white"

  },
  rounded:{
    backgroundColor:"white",
    color:"red",
    paddingBottom:33
  },
  text:{
    color:"black",
    fontSize:18,
    
 
  },
  
  text2:{
    color:"black",
  
    fontWeight:"bold",
    fontSize:25
    
 
  },
  margin:{
    margin:33,
   
  },
})
export default App;
