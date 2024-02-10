import pandas
import requests
from flask import Flask
from amadeus.api_call import Api_call
app = Flask(__name__)

@app.route('/')
def welcome():
    return 'Welcome!'

@app.route('/flight_searcher')
def flight_searcher():
    Api_call().flight_offers(departure_date="2024-11-02",access_token=Api_call().get_access_token())
    return 'Got flights now'



if __name__ == '__main__':
    app.run(debug=False)