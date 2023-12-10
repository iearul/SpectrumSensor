import moment from 'moment';

export const getVelocityOptions = (data) => ({
    title: {
        text: "Velocity",
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Time'
        }
    },
    series: [
        {
            name: "Velocity",
            type: "line",
            color: '#FF0000', // Red
            data: data.map(item => [moment(item.timestamp, 'MMMM Do YYYY, h:mm:ss a').valueOf(), item.Velocity || item.velocity]),
        },
    ],
});

export const getAltitudeOptions = (data) => ({
    title: {
        text: "Altitude",
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Time'
        }
    },
    series: [
        {
            name: "Altitude",
            type: "line",
            color: '#00FF00', // Green
            data: data.map(item => [moment(item.timestamp, 'MMMM Do YYYY, h:mm:ss a').valueOf(), item.altitude || item.Altitude]),
        },
    ],
});

export const getTemperatureOptions = (data) => ({
    title: {
        text: "Temperature",
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Time'
        }
    },
    series: [
        {
            name: "Temperature",
            type: "line",
            color: '#0000FF', // Blue
            data: data.map(item => [moment(item.timestamp, 'MMMM Do YYYY, h:mm:ss a').valueOf(), item.temperature || item.Temperature]),
        },
    ],
});