//class taaki response ko ek format me return kar sake
class ApiResponse{
    constructor(statusCode, message, data){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode <400;
    }
}


export default ApiResponse