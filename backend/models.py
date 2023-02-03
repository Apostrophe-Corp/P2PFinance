import os
from sqlalchemy import Column, String, Integer, Boolean, create_engine
from flask_sqlalchemy import SQLAlchemy
import json
from settings import DB_PATH

database_path = DB_PATH

db = SQLAlchemy()

"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()


"""
Users

"""


class Users(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    address = Column(String, nullable=False, unique=True)
    username = Column(String, nullable=False, unique=True)
    pfp = Column(Integer, nullable=True, default=0)

    def __init__(self, address, username, pfp):
        self.address = address
        self.username = username
        self.pfp = pfp

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def format(self):
        return {
            "id": self.id,
            "address": self.address,
            "username": self.username,
            "pfp": self.pfp,
        }


"""
Loans

"""


class Loans(db.Model):
    __tablename__ = "loans"

    id = Column(Integer, primary_key=True)
    contractInfo = Column(String, nullable=False)
    tokenRequested = Column(Integer, nullable=False)
    tokenOffered = Column(Integer, nullable=False)
    amountRequested = Column(Integer, nullable=False)
    amountOffered = Column(Integer, nullable=False)
    paymentAmount = Column(Integer, nullable=False)
    maturation = Column(Integer, nullable=False)
    created = Column(Integer, nullable=False)
    borrower = Column(String, nullable=False)
    lender = Column(String, nullable=True, default="")
    resolved = Column(Boolean, nullable=True, default=False)
    selected = Column(Boolean, nullable=True, default=False)
    offered = Column(Boolean, nullable=True, default=False)

    def __init__(self, contractInfo, tokenRequested, tokenOffered, amountRequested, amountOffered, paymentAmount, maturation, created, borrower, selected, offered):
        self.contractInfo = contractInfo
        self.tokenRequested = tokenRequested
        self.tokenOffered = tokenOffered
        self.amountRequested = amountRequested
        self.amountOffered = amountOffered
        self.paymentAmount = paymentAmount
        self.maturation = maturation
        self.created = created
        self.borrower = borrower
        self.selected = selected
        self.offered = offered

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            "id": self.id,
            "contractInfo": self.contractInfo,
            "tokenRequested": self.tokenRequested,
            "tokenOffered": self.tokenOffered,
            "amountRequested": self.amountRequested,
            "amountOffered": self.amountOffered,
            "paymentAmount": self.paymentAmount,
            "maturation": self.maturation,
            "created": self.created,
            "borrower": self.borrower,
            "lender": self.lender,
            "resolved": self.resolved,
            "selected": self.selected,
            "offered": self.offered
        }
