const fetchNasaData = async (url) => {
    const apiKey = '?api_key=REPLACED';
    try {
        const response = await fetch(`${url + apiKey}`);
        if (!response.ok) {
            throw new Error("Error in response!");
        } else {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.error('Error:', error)
    }
}

export {
    fetchNasaData
};