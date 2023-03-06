import dataFunctions from "../data/demo.js"
import { socket_client } from "../../socket/socket.js"
export const  demoInsert =  async (req, res) => {
    try {
      const response = dataFunctions.uploadData(req.body)
      return res.render('home',{message:response.message})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error" + error
          })
    }
  }

  
export const demoGet =  async (req, res) => {
    try {
      const listingData = await dataFunctions.getAllDocuments()
    
      return res.render('list',{message:listingData})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error" + error
          })
    }
  }
  
export const demoGetByID =  async (req, res) => {
    try {
        console.log("CALLED");
      return res.render('home',{message:"success"})
    } catch (error) {
        return res.status(500).json({
            message:"Internal  server Error"
          })
    }
  }

 export const communicateWithServer = (req, res) => {
  try{
    let isCompleted = socket_client(req.body.data)
    res.send("TCP Handshake Successful")
  }catch(error) {
    return res.status(500).json({
      message:"Internal  server Error" + error
    })
  }
 }

//export default demoInsert