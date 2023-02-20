import os
import numpy as np
from test2 import VideoCamera
from flask import (Flask,render_template, request,Response)
from flask import jsonify
import cv2
import time
from flask_cors import CORS

app = Flask(__name__, template_folder='D:\\Deshna\\flasapp\\templates') 
UPLOAD_FOLDER = "D:\\Deshna\\flasapp\\uploads"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

@app.route('/stress')
def predict():  
    return Response(gen(VideoCamera()), mimetype='multipart/x-mixed-replace; boundary=frame')

def gen(test):
    """Video streaming generator function."""
    while True:
        frame= test.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
       
# @app.route("/predict", methods=['POST', 'GET'])

@app.route("/spo2_flask", methods = ['POST'])  
def success():  
    if request.method == 'POST':  
        f = request.files['file']  
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], f.filename))
        filepath=os.path.join(app.config['UPLOAD_FOLDER'], f.filename)
        image_name = str(filepath)
        average_red = []
        std_red = []
        average_blue = []
        std_blue = []
        spo2= []
        image = cv2.imread(image_name)
        (B, G, R) = cv2.split(image)
        mean = average(B)
        std = stddev(B,mean)
        average_blue.append(mean)   
        std_blue.append(std)
        mean = average(R)
        std = stddev(R,mean)
        average_red.append(mean)
        std_red.append(std)
        print(image_name, "Under Processing")

        for i in range(0,len(std_blue)):
            spo2.append(100-5*(std_red[i]/average_red[i])/(std_blue[i]/average_blue[i]))
	    
        prediction=sum(spo2)/len(spo2)
        print("prediction",prediction)
    # return prediction

    return str(prediction)
    # return render_template("success.html", name = f.filename,pred_class=prediction,filepath=image_name)  
def average(image):
	width = image.shape[1]
	height = image.shape[0]
	sum =0
	for i in range(0,height):
		for j in range(0,width):
			sum = sum +image[i][j]
	return sum/(width*height)

def stddev(image, mean):
	width = image.shape[1]
	height = image.shape[0]
	sum =0
	for i in range(0,height):
		for j in range(0,width):
			sum = sum + (image[i][j]-mean)**2
	sum = sum/(width*height)
	return np.sqrt(sum)		


if __name__ == '__main__':  
    app.run(debug=False,threaded=False)