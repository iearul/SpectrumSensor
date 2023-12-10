import axios from 'axios';


export const actOnSpectrum = async () => {
    try {
        await axios.post(process.env.REACT_APP_ACTION_URL);
        alert('Action taken on Spectrum');
    } catch (error) {
        console.error(error);
        alert('Failed to act on Spectrum');
    }
};