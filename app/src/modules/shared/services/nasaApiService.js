const fetchNasaData = async (url) => {
    try {
        const response = await fetch(url);
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