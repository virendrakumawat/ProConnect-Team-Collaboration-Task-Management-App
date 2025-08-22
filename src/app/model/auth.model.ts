
//  sending at the registration data

export interface SignUpRequest{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    phoneNumber:string;
    role:string;
}


// getting the registration data 

export interface SignUpResponse{
    _id:string,
    firstName:string,
    lastName:string,
    email:string,
    profilePic:string,
    dob:string,
    phoneNumber:Number,
    token:string
}


//  sendign the login data 

export interface LoginRequest {
    email: string;
    password: string;
}

// getting the login data
export interface LoginResponse {
    _id:string,
    firstName:string,
    lastName:string,
    email:string ,
    profilePic:string | null,
    dob:string | null,
    phoneNumber:Number,
    gender: string | null
    role : string | null
    // token:string

}       

//  getting the Verfiy otp with email
export interface verfiyRequest{
    email:string,
    otp:string
}


// new password data 

export interface NewPassowrdRequest{
    email:string,
    newPassword:string,
    resetToken:string
}