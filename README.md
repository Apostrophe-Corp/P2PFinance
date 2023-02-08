# P2PFinance

A fully decentralized peer-to-peer loan platform.

P2PFinance: The Future of Decentralized Lending and Borrowing

[link to P2PFinance DApp](https://p2pfinance.vercel.app/)

**<add demo video>**

The end game is for users to be able to create, buy and sell NFTs and other collectibles without a central dependency.

## Getting Started

### Pre-requisites

Users should have an Algorand wallet (preferably Pera Algo Wallet) installed on their phone and loaded with Testnet Algos in order to be able to sign transactions, share their NFTs and bid on auctions. The wallet can be installed from the App store (iPhone) or Google Play (Android) as is appropriate.

Of course users can also use other means of connecting to our dApp, as well as other wallets.  
Currently supported connection methods include:  

<!-- - **PeraConnect** -->
- **MyAlgoConnect**
- **WalletConnect**
- **Mnemonic**

[You can get some testnet Algos from the Algo Faucet here](https://bank.testnet.algorand.network/).

## Running the dApp

simply click on the project link, here: [link to DApp](https://p2pfinance.vercel.app/) 


In strict terms, the flow of P2PFinance DApp goes like this:

-User A connects their wallet, signs up or signs in, and then creates an advert by providing the required parameters to create an advert.
-In order to successfully create an advert, the collateral must be sent from the user’s wallet to the smart contract to be held in escrow.
-It should be noted that User A can cancel or remove the advert and collect back their collateral at any point before another user lends the money to them.
-Additionally, it should be noted that the term of the loan only starts counting down after a user has lent the funds to the borrower (User A).
-User B also connects their wallet, signs up, and navigates to the lending page where they can see the list of available adverts. User B can then select an advert (User A’s) and lend to them with the click of a button (after authorizing transactions in their wallet of course). When this happens:
-The countdown of the loan term commences.
-The payment of the loan amount is sent to the contract and the contract forwards the said amount to the borrower (User A).
-User A, having received the loan, can pay back the loan either in installments or lump sum at any point before the expiry of the loan term.
-If User A pays back in installments, each installment is held by the contract until the repayment amount is complete and then this amount is sent by the contract to the lender (User B), and the collateral is sent back to user A. Any payment in excess of the required amount is
  
 In today’s digital age, the world of finance is constantly evolving, and traditional financial institutions are no longer the only option for lending and borrowing. Decentralized finance (DeFi) has emerged as a new, innovative way of managing money, and P2PFinance is leading the way in this exciting new field.

P2PFinance is a decentralized peer-to-peer lending and borrowing platform that allows users to lend and borrow directly from each other. Unlike traditional loan DApps, P2PFinance does not pool customer deposits and then lend from this pool to other customers, instead, it allows users to lend and borrow directly to and from each other. This approach offers more flexibility and accessibility, making it perfect for anyone in need of liquidity for unexpected expenses, without the need to sell their assets at a loss.

The flow of the P2PFinance DApp is simple and easy to use. Users who need a loan to cover an urgent need for spending or liquidity, such as school fees, hospital bills, or any similar unforeseen contingency, can create an advert stating the amount they want to borrow and the assets they are offering as collateral. These assets can be tokens or NFTs, for example, which the borrower may not want to sell at the moment.

On the other hand, users who have excess liquidity at that moment and may be searching for a productive and relatively safe way to use or deploy that excess cash can search through the list of available adverts and choose one that fits their risk vs reward profile. They can then lend to the borrower, in this case, User A, with the click of a button.

P2PFinance provides a platform or marketplace for borrowers and lenders to interact and also provides a smart contract that holds the collateral in escrow pending the outcome of the loan (fully repaid within the term or not). This ensures the safety and security of the assets offered as collateral and provides peace of mind for both the borrower and the lender.

A platform such as this is important in places like Africa and Nigeria to be specific as individuals don't have access to credit such as credit cards, student loans, pawn shops, and others which tend to be available in the west and lines of credit tend to only be extended to large organizations.
  
  ## Authors

- [Owolabi Adeyemi](https://github.com/goonerlabs)

- [Emmanuel Agbavwe](https://github.com/Aro1914)
