export interface IVerifyOtp {
    mobileNumber: string;
    otp: string;
}

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobileNumber: string;
    college: string;
}

export interface IUserLoginIn {
    password: string;
    mobileNumber: string;
}
