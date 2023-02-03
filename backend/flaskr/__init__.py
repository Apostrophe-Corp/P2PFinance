import os
import sys
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_
from flask_cors import CORS, cross_origin
import random

from models import setup_db, Loans, Users

LOANS_PER_PAGE = 5


def paginate(request, selection):
    page = request.args.get('page', 1, type=int)
    start = (page - 1) * LOANS_PER_PAGE
    end = start + LOANS_PER_PAGE
    loans = [loan.format() for loan in selection]
    current_page = loans[start:end]
    return current_page

# create and configure the app


def create_app(test_config=None):
    app = Flask(__name__)
    with app.app_context():
        setup_db(app)

    """
    setting up CORS Allow '*' for origins. 
    """
    cors = CORS(app, resources={r'/api/*':  {'origins': '*'}})

    """
    setting up Access-Control-Allow for headers and methods
    """

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,true')

        response.headers.add('Acess-Control-Allow-Methods',
                             'GET,POST,PATCH,DELETE,OPTIONS')

        return response

    """
    endpoint to handle GET requests for all
    available loans

    """

    @cross_origin
    @app.route('/api/v1.0/loans')
    def retrieve_loans():
        loans = Loans.query.filter(Loans.lender == '').order_by(Loans.id).all()

        if loans is None:
            abort(404)

        loans_f = [l.format() for l in loans]

        for loan in loans_f:
            borrower = loan.get('borrower')
            lender = loan.get('lender')

            borrower_dict = Users.query.filter(
                Users.address == borrower).one_or_none()

            lender_dict = Users.query.filter(
                Users.address == lender).one_or_none()

            if borrower_dict:
                loan['borrowerInfo'] = borrower_dict.format()

            if lender_dict:
                loan['lenderInfo'] = lender_dict.format()

        loans_f.sort(key=lambda x: x['id'], reverse=True)

        return (jsonify({
            'success': True,
            'loans': loans_f,
            'totalLoans': len(loans_f)
        }, 200))

    @cross_origin
    @app.route('/api/v1.0/loans', methods=['POST'])
    def create_new_loan():
        body = request.get_json()

        if body is None:
            abort(400)

        new_contract_info = body.get('contractInfo', None)
        new_token_requested = body.get('tokenRequested', None)
        new_token_offered = body.get('tokenOffered', None)
        new_amount_requested = body.get('amountRequested', None)
        new_amount_offered = body.get('amountOffered', None)
        new_payment_amount = body.get('paymentAmount', None)
        new_borrower = body.get('borrower', None)
        new_maturation = body.get('maturation', None)
        new_created = body.get('created', None)
        new_selected = body.get('selected', None)
        new_offered = body.get('offered', None)
        search = body.get('searchTerm', None)
        

        if search:
            user = Users.query.filter(
                Users.username == search).one_or_none()

            if not user:
                abort(404)

            loans = Loans.query.filter(
                or_(Loans.borrower == user.address, Loans.lender == user.address)).all()

            # if len(borrower_loans) == 0:
            #     abort(404)

            # lender_loans = Loans.query.filter(
            #     Loans.lender == user.address).all()

            # loans = []

            # if not len(loans):
            #     abort(404)

            # if lender_loans:
            #     loans.append(*lender_loans)

            # if borrower_loans:
            #     loans.append(*borrower_loans)

            loans_f = [loan.format() for loan in loans]

            # if len(loans_f) == 0:
            #     abort(404)

            for loan in loans_f:
                borrower = loan.get("borrower")
                lender = loan.get("lender")

                borrower_dict = Users.query.filter(
                    Users.address == borrower).one_or_none()

                lender_dict = Users.query.filter(
                    Users.address == lender).one_or_none()

                if borrower_dict:
                    loan['borrowerInfo'] = borrower_dict.format()

                if lender_dict:
                    loan['lenderInfo'] = lender_dict.format()
            # if len(loans_f) == 0:
            #     abort(404)

            loans_f.sort(key=lambda x: x['id'], reverse=True)

            return (jsonify({
                'success': True,
                'loans': loans_f,
                'totalLoans': len(loans_f)
            }, 200))
        else:
            if new_contract_info is None or new_token_requested is None or new_token_offered is None or new_amount_requested is None or new_amount_offered is None or new_payment_amount is None or new_borrower is None or new_maturation is None or new_created is None:
                abort(422)

            new_loan = Loans(contractInfo=new_contract_info, tokenRequested=new_token_requested, tokenOffered=new_token_offered, amountRequested=new_amount_requested,
                             amountOffered=new_amount_offered, paymentAmount=new_payment_amount, borrower=new_borrower, maturation=new_maturation, created=new_created, selected=new_selected, offered=new_offered)

            new_loan.insert()

            return (jsonify({
                'success': True,
                'created': new_loan.id
            }, 200))

    """
    end point to either update resolved or lender

    """

    @cross_origin
    @app.route('/api/v1.0/loans/<int:loan_id>', methods=['PATCH'])
    def update_loan(loan_id):
        body = request.get_json()
        if body is None:
            abort(400)

        if 'lender' not in body and 'resolved' not in body:
            abort(422)

        loan = Loans.query.filter(Loans.id == loan_id).one_or_none()
        if loan is None:
            abort(404)

        if 'lender' in body:
            loan.lender = body.get('lender')

        if 'resolved' in body:
            loan.resolved = body.get('resolved')

        loan.update()

        return (jsonify({
            'success': True,
            'id': loan.id
        }, 200))

    """
    end point to get a loan

    """
    @cross_origin
    @app.route('/api/v1.0/loans/<int:loan_id>')
    def get_loan(loan_id):
        loan = Loans.query.filter(Loans.id == loan_id).one_or_none()
        if loan is None:
            abort(404)
        return (jsonify({
            'success': True,
            'loan': loan.format()
        }, 200))

    """
    end point to get all users 

    """

    @cross_origin
    @app.route('/api/v1.0/users')
    def retrieve_users():
        selection = Users.query.order_by(Users.id.desc()).all()

        if selection is None:
            abort(404)

        current_users = [user.format() for user in selection]

        return (jsonify({
            'success': True,
            'users': current_users,
            'totalUsers': len(Users.query.all())
        }, 200))

    """
    endpoint to create new users

    """

    @cross_origin
    @app.route('/api/v1.0/users', methods=['POST'])
    def create_new_user():
        body = request.get_json()

        if body is None:
            abort(400)

        new_address = body.get('address', None)
        new_username = body.get('username', None)
        new_pfp = body.get('pfp', None)

        if new_address is None or new_username is None:
            abort(422)

        existing_users = Users.query.all()

        users_formatted = [user_f.format() for user_f in existing_users]

        # guard for if user address or username exists already (400 bad request)
        for formated_user in users_formatted:
            if formated_user.get('address') == new_address or formated_user.get('username') == new_username:
                abort(400)

        new_user = Users(address=new_address, username=new_username,
                         pfp=new_pfp)

        new_user.insert()

        return (jsonify({
            'success': True,
            'created': new_user.id
        }, 200))

    """
    endpoint to get user by address

    """

    @cross_origin
    @app.route('/api/v1.0/users/<user_address>')
    def get_user(user_address):
        user = Users.query.filter(
            Users.address == user_address).one_or_none()

        if user is None:
            abort(404)

        return (jsonify({
            'success': True,
            'user': user.format()
        }, 200))

    """
    end point to update pfrofile pictures

    """

    @cross_origin
    @app.route('/api/v1.0/users/<user_address>', methods=['PATCH'])
    def update_user(user_address):
        body = request.get_json()

        if body is None:
            abort(400)

        if 'pfp' not in body:
            abort(422)

        user = Users.query.filter(
            Users.address == user_address).one_or_none()
        if user is None:
            abort(404)

        new_pfp = body.get('pfp', None)

        if new_pfp is None:
            abort(422)

        user.pfp = new_pfp
        user.update()

        return (jsonify({
            'success': True,
            'id': user.id
        }, 200))

    """
    end point to delete resolved loans

    """

    @cross_origin
    @app.route('/api/v1.0/loans/<int:loan_id>', methods=['DELETE'])
    def delete_loan(loan_id):
        loan = Loans.query.filter(Loans.id == loan_id).one_or_none()
        if loan is None:
            abort(404)

        loan.delete()

        return (jsonify({
            'success': True,
            'deleted': loan.id,
        }, 200))

    """
    Common error handlers for all expected errors.
    """
    # Error Handling

    @app.errorhandler(404)
    def not_found(error):
        return (jsonify({
            "success": False,
            "error": 404,
            "message": "resource not found"
        }, 404))

    @app.errorhandler(422)
    def Unprocessable(error):
        return (jsonify({
            'success': False,
            'error': 422,
            'message': 'unprocessable'
        }, 422))

    @app.errorhandler(400)
    def bad_request(error):
        return (jsonify({
            'success': False,
            'error': 400,
            'message': 'bad request'
        }, 400))

    @app.errorhandler(500)
    def internal_server_error(error):
        return (jsonify({
            'success': False,
            'error': 500,
            'message': 'internal server error'
        }, 500))

    @app.errorhandler(405)
    def method_not_allowed(error):
        return (jsonify({
            'success': False,
            'error': 405,
            'message': 'method not allowed'
        }, 405))

    return app
