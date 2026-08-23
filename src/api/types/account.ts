export type Account = {
    id:string,
    accountNumber:string,
    iban:string,
    expirationDate:string,
    status:boolean,
    customerName:string,
    bankName : string,
    singleService : SingleSettings | null,
    bantchService : BatchSettings | null
}

export type SingleSettings = {
 Status :boolean,  
 TerminalId :string,
 MerchantId :string,
 Username :string,
 Password :string,
 ExpireDate : string 
}

export type BatchSettings = {
 Status : boolean,
 MaxTransactionsCount: number ,
 MaxDailyAmount: number,
 MinSatnaAmount: number ,
 ExpireDate: string 
}