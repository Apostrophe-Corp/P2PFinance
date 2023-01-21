import algosdk from "algosdk";

export function MakePeraConnect( PeraWalletConnect:any, options:{showShowSignTxnToast:boolean}) {
    return class PeraConnect {
        pc:any
        accounts: any[]

        constructor(pc:any = false) {
            this.pc = pc;
            this.accounts = [];
        }

        ensurePC = async() => {
            if ( this.pc ) { return; }
            this.pc = new PeraWalletConnect(options);
            this.pc.reconnectSession().then((accts:any) => {
                this.accounts = accts;
            });
        }

        disconnect = async() => {
            this.pc.disconnect();
            this.accounts = [];
        }

        ensureSession = async() => {
            await this.ensurePC();
            if( this.accounts.length === 0) {
                return new Promise<any>(async(resolve) => {
                    this.pc.connect()
                        .then((accounts:any) => {
                            this.accounts = accounts;
                            resolve(this.accounts[0]);
                        })
                        .catch((error:any) => {
                            console.log(error);
                            this.accounts = [];
                            resolve(this.accounts[0]);
                        })
                })
            }
        }

        getAddr = async(): Promise<string> => {
            await this.ensureSession();
            return this.accounts[0];
        }

        signTxns = async(txns: string[]): Promise<string[]> => {
            let userWallet = await this.ensureSession();
            let ntxns: any[] = txns.map((x: any) => {
                let txn = algosdk.decodeUnsignedTransaction(Buffer.from(x, "base64"));
                return {txn, signers: [userWallet]};
            });
            let stxns = await this.pc.signTransaction([ntxns]);
            const result: any[] = [];
            stxns.forEach((txn: any) => {
                result.push(Buffer.from(txn, 'base64'))
            });
            return result
        }
    }
}