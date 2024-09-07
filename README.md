# SMART-PLANT-POT
**Statement of Purpose:**
In an era defined by climate change and the imperative of sustainable practices, we are compelled to address the pressing issue of water scarcity. Recognizing the inefficiency inherent in traditional plant care methods, we seek to pioneer innovative solutions. Inspired by the urgent need for efficient water management, we embarked on the development of a Smart Plant Pot. Our goal is to revolutionize plant care by leveraging Arduino-based soil moisture sensors, thereby optimizing water usage and empowering individuals to actively contribute to environmental sustainability. Through this project, we aim to bridge the gap between technology and ecological responsibility, driving positive change in our communities and beyond.
**Background:**
In a world increasingly affected by climate change, we've noticed a big problem: water scarcity and inefficient plant care. Many plants suffer because people forget to water them regularly. We decided to tackle this problem by creating a Smart Plant Pot. With Arduino-based sensors, it helps plants communicate their water needs. Our goal is simple: to make plant care easier and more sustainable, while also helping people become more environmentally conscious
**Objective:**
Develop a Smart Plant Pot that utilizes Arduino to detect soil moisture levels, providing real-time notifications for timely watering. The solution will be user-friendly, promoting water conservation in both agricultural and domestic settings.

**Working of the Smart Plant System:**
**Sensor Integration:**
The Smart Plant system incorporates soil moisture sensors connected to an Arduino board.
These sensors measure the moisture level in the soil surrounding the plant. Arduino Communication:
The Arduino board communicates with the soil moisture sensors to gather data regarding the moisture levels.Upon obtaining sensor readings, the Arduino processes the data and determines whether the plant requires watering based on predefined thresholds. Data Transmission:
Using the SerialPort module in Node.js, the Arduino sends the moisture level data to the Node.js server over a serial connection. Server Configuration:
The Node.js server, established with the http module, receives data from the Arduino through the serial port.Upon receiving sensor data, the server processes it and emits relevant information to connected clients via a WebSocket connection using the socket.io module.
**Client Interaction:**
Clients, typically web browsers, establish WebSocket connections with the Node.js server to receive real-time updates about the plant's moisture levels.The client-side JavaScript code listens for incoming data events from the server and updates the user interface accordingly. Visual Feedback:
The HTML interface displays animations representing the plant's happiness or sadness based on the received sensor data.Using CSS and JavaScript, the animations transition smoothly between states to visually indicate the plant's condition. User Action:
Upon observing the plant's status through the interface, users can take appropriate actions, such as watering the plant if it appears sad or allowing it to rest if it appears happy. Continuous Monitoring:
The system continuously monitors the plant's moisture levels, providing real-time feedback to users and enabling proactive plant care.

**HARDWARE USED:**
●	Arduino Uno
●	Moisture Sensor
●	Bread Board
●	USB Cable
●	Male to male jumper wires
Software Required:
●	Arduino IDE
●	Node.js
●	Javascript
●	HTML
●	CSS

**PROCEDURE:**
	 	**Circuit Setup:**
●	Connect the Arduino Uno to the breadboard.
●	Connect the soil moisture sensor to the breadboard using jumper wires.
●	Connect the VCC pin of the soil moisture sensor to the 5V pin on the Arduino.
●	Connect the GND pin of the soil moisture sensor to the GND pin on the Arduino.
●	Connect the analog output pin of the soil moisture sensor to analog pin A0 on the Arduino.
●	Ensure all connections are secure and there are no loose wires.
	 	**Arduino Programming:**
●	Open the Arduino IDE.
●	Write the code to read analog data from the soil moisture sensor.
●	Define thresholds for moisture levels to determine when the plant needs watering.
●	Program the Arduino to send moisture level data over the serial port.
●	Upload the code to the Arduino Uno.
	 	**Node.js Server Setup:**
●	Install Node.js on your computer if not already installed.
●	Create a new directory for your project.
●	Initialize a new Node.js project using npm init.
●	Install the serialport and socket.io modules using npm install serialport socket.io.
●	Write the Node.js code to create a server that listens for data from the Arduino over the serial port.
●	Configure the server to emit data to connected clients using WebSocket connections.
●	Save the Node.js code in a file named server.js.  Client Interface:
●	Create HTML, CSS, and JavaScript files for the client-side interface.
●	Write HTML code to create the user interface elements such as animations and status indicators.
●	Use CSS to style the interface and create animations for visual feedback.
●	Write JavaScript code to establish a WebSocket connection with the Node.js server and update the interface based on received data.
	 	**Integration:**
●	Run the Node.js server using the command node server.js.
●	Open the client interface in a web browser.
●	Ensure the Arduino is connected to the computer via USB.
●	Power on the Arduino.
●	Monitor the interface for real-time updates on the plant's moisture levels.
●	Take appropriate actions such as watering the plant based on the displayed status.

**CONCLUSION:**
In conclusion, the development of the Smart Plant Pot represents a significant step towards addressing water scarcity and promoting sustainable plant care practices. By integrating Arduino-based soil moisture sensors with a Node.js server and client interface, we have created a system that empowers users to monitor and respond to their plants' water needs in real-time. This innovative solution not only simplifies plant care but also encourages environmental consciousness by promoting water conservation. As we continue to refine and enhance the Smart Plant Pot, we envision its widespread adoption contributing to a greener and more sustainable future for generations to come.
