import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";
import moment from "moment";
import { actOnSpectrum } from '../services/spectrumActions';
import { getVelocityOptions, getAltitudeOptions, getTemperatureOptions } from '../services/chartOptions';

const StaticDataPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL);
      const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');

      setData(prevData => {
        const newData = [...prevData, { ...res.data, timestamp }];
        if (newData.length > 10) {
          return newData.slice(-10);
        }
        return newData;
      });
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-3">Static Data Page</h2>
      <button type="button" className="btn btn-primary mb-3" onClick={getData}>
        Update Data
      </button>

      <div className="d-flex justify-content-between">
        <HighchartsReact highcharts={Highcharts} options={getVelocityOptions(data)} />
        <HighchartsReact highcharts={Highcharts} options={getAltitudeOptions(data)} />
        <HighchartsReact highcharts={Highcharts} options={getTemperatureOptions(data)} />
      </div>

      <div className="mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Velocity</th>
              <th scope="col">Altitude</th>
              <th scope="col">Temperature</th>
              <th scope="col">Ascending</th>
              <th scope="col">Action Required</th>
              <th scope="col">Status Message</th>
            </tr>
          </thead>
          <tbody>
            {data.slice().reverse().map((item, index) => (
              <tr key={index}>
                <td>{moment(item.timestamp, 'MMMM Do YYYY, h:mm:ss a').format('h:mm:ss')}</td>
                <td>{item.velocity}</td>
                <td>{item.altitude}</td>
                <td>{item.temperature}</td>
                <td>{item.isAscending ? "Yes" : "No"}</td>
                <td style={{ backgroundColor: item.isActionRequired ? 'red' : 'transparent' }}>
                  {item.isActionRequired ? "Yes" : "No"}
                  {item.isActionRequired &&
                    <>
                      <br />
                      <button onClick={actOnSpectrum}>Act on Spectrum</button>
                    </>
                  }
                </td>
                <td>{item.statusMessage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaticDataPage;
