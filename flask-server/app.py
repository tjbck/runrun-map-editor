from flask import Flask, request, render_template
app = Flask(__name__)
app.secret_key = 'RUNRUN!'
app.debug = True

import time
import json
import datetime as dt

@app.route('/')
def index():
    return render_template('index.html')
