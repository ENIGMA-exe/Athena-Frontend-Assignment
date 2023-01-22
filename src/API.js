
import axios from 'axios'

export default async function Getdata (){

    try{
      var result = await axios.get('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
      return result.data
      //console.log(result.data)
    }catch(error){
      console.log("getdata function",error)
    }  

}