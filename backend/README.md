# urgent2k

A fully decentralize peer to peer loan DApp

## Local Setup for Flask App

```sh
sudo apt-get update

sudo apt-upgrade

cd backend

python3 -m venv venv

source venv/bin/activate

python3 -m pip install pip --upgrade

python3 -m pip install -r requirements.txt

export FLASK_APP=flaskr

export FLASK_DEBUG=true

flask run 

```

## Local Setup for DB

open another instance of Ubuntu20.04

```sh

which postgres

#delete any instance of postgres you have (would likely be postgres 12 so that we can install the latest version)

sudo apt-get --purge auto-remove postgresql*

#install latest version of postgres

sudo apt install wget ca-certificates

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'

sudo apt update

sudo apt install postgresql postgresql-contrib

#check postgres status
service postgresql status

#starting up command line tool as user postgres
sudo -u postgres psql

#check connection info while in psql
\conninfo

#please pay attention to the port postgres is listening on in the return of the previous command. you may have to make changes to your models.py file, line 10 to reflect this mine is 5433 but it tends to be 5432.

#create password
\password <password>

# i used love as my password but you can use any as long as you remeber to change it in .env file

#create DB (i used urgent you can use any name as long as you remeber to change it in .env)
CREATE DATABASE urgent;

#move to urgent DB
\c urgent

#go to other instance of ubuntu and  kill server (ctrl + c)
#run flask run to set up the DB relations 
flask run

```

Now you can test the endpoints

## Endpoints

### /api/v1.0/loans

### GETS all loans

curl -X GET <http://127.0.0.1:5000/api/v1.0/loans>

#### example return

```js
{
 loans: [
  {
   amountOffered: 100,
   amountRequested: 100,
   borrower: 'testadress1',
   borrowerInfo: {
    address: 'testadress1',
    id: 1,
    pfp: 1,
    pfpContract: 'testpfpcontract1',
    username: 'labs',
   },
   contractInfo: 'testcontractinfo1',
   created: 1,
   id: 1,
   lender: 'testadress5',
   lenderInfo: {
    address: 'testadress5',
    id: 5,
    pfp: 9,
    pfpContract: 'testpfpcontractpatch',
    username: 'siju',
   },
   maturation: 10,
   offeredContract: 'testofferedcontract1',
   paymentAmount: 150,
   resolved: true,
   tokenContract: 'testtokencontract1',
   tokenOffered: 10,
   tokenRequested: 1,
  },
  {
   amountOffered: 100,
   amountRequested: 100,
   borrower: 'testadress2',
   borrowerInfo: {
    address: 'testadress2',
    id: 2,
    pfp: 2,
    pfpContract: 'testpfpcontract2',
    username: 'love',
   },
   contractInfo: 'testcontractinfo1',
   created: 1,
   id: 2,
   lender: 'testadress4',
   lenderInfo: {
    address: 'testadress4',
    id: 4,
    pfp: 4,
    pfpContract: 'testpfpcontract4',
    username: 'emmanuel',
   },
  },
 ],
 success: true,
 totalLoans: 2,
}
```

### /api/v1.0/users

### GETS all users

curl -X GET <http://127.0.0.1:5000/api/v1.0/users>

#### example return

```js
{
 success: true,
 totalUsers: 5,
 users: [
  {
   address: 'testadress1',
   id: 1,
   pfp: 1,
   pfpContract: 'testpfpcontract1',
   username: 'labs',
  },
  {
   address: 'testadress2',
   id: 2,
   pfp: 2,
   pfpContract: 'testpfpcontract2',
   username: 'love',
  },
  {
   address: 'testadress3',
   id: 3,
   pfp: 3,
   pfpContract: 'testpfpcontract3',
   username: 'stevo',
  },
  {
   address: 'testadress4',
   id: 4,
   pfp: 4,
   pfpContract: 'testpfpcontract4',
   username: 'emmanuel',
  },
  {
   address: 'testadress5',
   id: 5,
   pfp: 9,
   pfpContract: 'testpfpcontractpatch',
   username: 'siju',
  },
 ],
}
```

### /api/v1.0/users

### POST users creates a new user

curl -X POST -H "Content-Type: application/json" -d '{"address": "testadress1", "username": "labs", "pfp": 1, "pfpContract": "testpfpcontract1"}' <http://localhost:5000/api/v1.0/users>

#### example return (success and user id)

```js
{
  'success': True,
  'created': 6
}
```

### /api/v1.0/loans

### POST loans creates a new loan or searches for loan based on username (searchTerm) (could be borrower or lender)

curl -X POST -H "Content-Type: application/json" -d '{"contractInfo": "testcontractinfo1", "tokenRequested": 122, "tokenOffered": 200, "tokenContract": "testtokencontract18", "offeredContract": "testofferedcontract5", "amountRequested": 100, "amountOffered": 1000, "paymentAmount": 1500, "maturation": 100, "created": 1}' <http://localhost:5000/api/v1.0/loans>

curl -X POST -H "Content-Type: application/json" -d '{"searchTerm": "shola"}' <http://localhost:5000/api/v1.0/loans>

#### example return (success and loan id, if search then similar result to GET loans but for only loans associated with username)

```js
{
  'success': True,
  'created': 6
}
```

### /api/v1.0/loans/<int: loanid>

### PATCH loan updates a loan

curl -X PATCH -H "Content-Type: application/json" -d '{"lender": "testadress5", "resolved": true}' <http://localhost:5000/api/v1.0/loans/1>

#### example return (success and loan id)

```js
{
  'success': True,
  'id': 1
}
```

### /api/v1.0/users/<user_address>

### PATCH user updates a user's pfp details

curl -X PATCH -H "Content-Type: application/json" -d '{"pfp": 9, "pfpContract": "testpfpcontractpatch"}' <http://localhost:5000/api/v1.0/users/>"testadress5"

#### example return (success and user id)

```js
{
  'success': True,
  'id': 5
}
```

### /api/v1.0/users/<user_address>

### GETs a specific user's details

curl -X GET <http://127.0.0.1:5000/api/v1.0/users/>"testadress1"

#### example return (success and user's details)

```js
{
 success: true,
 users: {
  address: 'testadress1',
  id: 1,
  pfp: 1,
  pfpContract: 'testpfpcontract1',
  username: 'labs',
 },
}
```

### /api/v1.0/loans/<int: loanid>

### DELETE loan

curl -X DELETE <http://127.0.0.1:5000/api/v1.0/loans/5>

#### example return (success and deleted loan id)

```js
{
  'success': True,
  'id': 5
}
```
