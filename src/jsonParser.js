
const getLocalGeoJsonData = () => {
    return fetch("pakData.json",{
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
        }
    }).then(
        (resp) => {
            return resp.json();
        }
    )
    
}

export default getLocalGeoJsonData;