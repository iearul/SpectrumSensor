# Spectrum Sensor Data Visualization

This project is a web-based GUI for visualizing sensor data from the Spectrum launch vehicle. It uses React and communicates with a backend API to fetch and display the data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies with the following command:

```bash
yarn install
```

### Running the Application
To start the application, run the following command:

```bash
npm start
```

This will start the application on port 3000. To view the application, navigate to http://localhost:3000 in your browser.

## Potential Improvements
1. Timestamp: Include a timestamp in the response for tracking when the data was generated or fetched.
2. Additional Information for Action Required: Provide additional information when isActionRequired is true. This could include a description of the action required. 
3. Consistent Casing: Ensure consistent casing in the JSON response keys across all APIs.
4. Use of RESTful principles: The API endpoints could be structured more according to RESTful principles. For example, instead of having a separate endpoint for ActOnSpectrum, it could be a PUT or POST request to the SpectrumStatus endpoint.
5. WebSocket Reconnection: If the SpectrumWS endpoint fails, the client has to manually reconnect. It would be better if the server could handle reconnections automatically.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Bootstrap](https://getbootstrap.com/) - CSS framework
* [Highcharts](https://www.highcharts.com/) - Charting library

## Authors

* **[Md Iearulislam](https://iearul.xyz)**

## License

This project is licensed under the MIT License