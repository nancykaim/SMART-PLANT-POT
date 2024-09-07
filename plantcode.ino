void setup()
{
	// Set the serial monitor baudrate to 9600
	Serial.begin(9600);
}

void loop()
{
	// Variable to store ADC value ( 0 to 1023 )
	int level;
	// analogRead function returns the integer 10 bit integer (0 to 1023)
	level = analogRead(0); 

	// Print analog value in serial monitor
	Serial.println(level);
  delay(500);
}
