const getData = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL); //  API endpoint
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error:', error);
        return null;
    }
};



export { getData };
