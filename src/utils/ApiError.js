//class taaki error ko ek format me return kar sake
class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        this.statusCode= statusCode
        this.data =  null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}