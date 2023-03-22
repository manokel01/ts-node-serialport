const {SerialPort} = require('serialport');
const fs = require('fs');

// Replace 'COM3' with the name of your serial port
const port = new SerialPort({ path: '/dev/cu.usbmodem143201', baudRate: 9600 })

// Create and write stream to the output file
const output = fs.createWriteStream('tinysensor.txt');

// Listen for data on the serial port
port.on('data', function (data) {
    // Convert the data to a string and remove any newline characters
    const csv = data.toString().replace(/\r?\n|\r/g, '');

    // Write the data to the output file
    output.write(csv + '\n');
});
