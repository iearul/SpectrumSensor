import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { actOnSpectrum } from '../services/spectrumActions';
import { getVelocityOptions, getAltitudeOptions, getTemperatureOptions } from '../services/chartOptions';

const LiveDataPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_WEB_SOCKET);
    socket.onmessage = (event) => {
      const new_data = JSON.parse(event?.data);
      const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
      setData((prevData) => {
        const newData = [...prevData, { ...new_data, timestamp }];
        return newData.length > 10 ? newData.slice(-10) : newData;
      });
    };
  }, []);

  return (
    <div className="container">
      <h2 className="my-3">Live Data Page</h2>
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
                <td>{item.Velocity}</td>
                <td>{item.Altitude}</td>
                <td>{item.Temperature}</td>
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
                <td>{item.StatusMessage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveDataPage;
