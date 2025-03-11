export function getGeolocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data) => {
                const { latitude, longitude } = data.coords;
                resolve({ latitude, longitude }); 
            }, 
            (err) => {
                reject(err)
            })
        }
    })
}