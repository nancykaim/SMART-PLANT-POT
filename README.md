
# Smart Plant Pot

**Statement of Purpose:**
The Smart Plant Pot project addresses water scarcity by using Arduino-based soil moisture sensors to optimize plant care. Our goal is to enhance water management and promote sustainability by providing real-time notifications for plant watering needs.

**Background:**
Water scarcity and inefficient plant care are pressing issues. Many people forget to water their plants, leading to waste and neglect. Our solution, the Smart Plant Pot, uses sensors to help manage plant watering efficiently and raise environmental awareness.

**Objective:**
Create a Smart Plant Pot that detects soil moisture levels using Arduino, offering real-time alerts to optimize watering and conserve water.

**System Overview:**

- **Sensor Integration:** Soil moisture sensors connected to Arduino measure soil moisture.
- **Arduino Communication:** Arduino processes sensor data and determines watering needs.
- **Data Transmission:** Arduino sends data to a Node.js server via SerialPort.
- **Server Configuration:** Node.js server processes data and communicates updates to clients using WebSocket.
- **Client Interaction:** Web browser clients receive real-time updates and visual feedback on the plant's status.

**Hardware Used:**

- Arduino Uno
- Moisture Sensor
- Breadboard
- USB Cable
- Male-to-male Jumper Wires

**Software Required:**

- Arduino IDE
- Node.js
- JavaScript
- HTML
- CSS

**Procedure:**

1. **Circuit Setup:**
   - Connect Arduino and moisture sensor to a breadboard.
   - Wire sensor to Arduino (VCC to 5V, GND to GND, analog output to A0).

2. **Arduino Programming:**
   - Use Arduino IDE to write code for reading sensor data.
   - Define moisture thresholds and send data over serial port.

3. **Node.js Server Setup:**
   - Install Node.js and create a new project.
   - Install `serialport` and `socket.io` modules.
   - Write server code to handle serial data and WebSocket communication.

4. **Client Interface:**
   - Develop HTML, CSS, and JavaScript files.
   - Implement UI elements, animations, and WebSocket connection.

5. **Integration:**
   - Run the Node.js server.
   - Open client interface in a browser.
   - Connect and power the Arduino, and monitor real-time updates.

**Conclusion:**
The Smart Plant Pot improves water conservation and plant care by providing real-time feedback on soil moisture. This project advances sustainable practices and supports environmental consciousness through innovative technology.

---

Feel free to adjust or expand upon any sections as needed!
