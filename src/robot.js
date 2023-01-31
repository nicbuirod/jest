exports.createRobot =(x, y, orientation) => {
    
   
  
    function advance() {
        //función para avanzar
        if(orientation==="N"){y++}
        if(orientation==="S"){y--}
        if(orientation==="W"){x--}
        if(orientation==="E"){x++}
                            
     } 
    
       
    function turnRight() {
      // función para girar a la derecha
      if(orientation==="N"){orientation=orientation.replace('N','E')}else 
        if(orientation==="E"){orientation=orientation.replace('E','S')} else 
        if(orientation==="S"){orientation=orientation.replace('S','W')} else 
        if(orientation==="W"){orientation=orientation.replace('W','N')}
    }
  
    function turnLeft() {
      // función para girar a la izquierda
      if(orientation==="N"){orientation=orientation.replace('N','W')}else 
      if(orientation==="E"){orientation=orientation.replace('E','N')} else 
      if(orientation==="S"){orientation=orientation.replace('S','E')} else 
      if(orientation==="W"){orientation=orientation.replace('W','S')}
    }
  
    function instructions() {
      // función para recibir una serie de instrucciones Ejm: "RAALAL"
     const instruction= Array.from("RAALAL")
     instruction.map(e =>{
        if (e==='R'){turnRight()}
        if (e==='A'){advance()}
        if (e==='L'){turnLeft()}
        
     })
     
    }

    function getPosition(){
        try {
        instructions()
        if(x<0 || y<0 || x>10 || y>10){
            throw new myError("");
            
            
        } else
          return {x,y,orientation}
        } catch(error){
            return "fuera de los limites establecidos"
            
        }

    }
  
    return  getPosition()
}



