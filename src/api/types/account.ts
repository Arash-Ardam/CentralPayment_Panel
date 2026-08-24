export type Account = {
    id:string,
    accountNumber:string,
    iban:string,
    expirationDate:string,
    status:boolean,
    customerName:string,
    bankName : string,
    singleService : SingleSettings | null,
    batchService : BatchSettings | null
}

export type SingleSettings = {
 status :boolean,  
 terminalId :string,
 merchantId :string,
 username :string,
 password :string,
 expireDate : string 
}

export type BatchSettings = {
 status : boolean,
 maxTransactionsCount: number ,
 maxDailyAmount: number,
 minSatnaAmount: number ,
 expireDate: string 
}



export type CreateAccountRequest = {
  bankId: string;
  customerId: string;
  accountnumber: string;  
  iban: string;
  expireDate: string;
};