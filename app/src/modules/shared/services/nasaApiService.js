const cache = new Map();

const fetchNasaData = async (url) => {
    if (cache.has(url)) {
        return cache.get(url);
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    cache.set(url, data);
    return data;
};

export { fetchNasaData };