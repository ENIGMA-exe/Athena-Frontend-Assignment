var visible = {0:true,1:false,2:false}

export default function VisibleBox(state=visible,action){

  switch(action.type){
    case "update":
        var temp = {...state}
        for(var key in temp){
          temp[key] = false
        }
        temp[action.payload] = true

        //console.log("reducer",temp)
        return temp

    default:
        return state
  }
}