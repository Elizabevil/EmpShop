const LoadJs: (url: string) => Promise<any> = async (url: string) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
        script.onload = () => {
            resolve();
        }
        script.onerror = () => {
            reject();
        }
    })
}
LoadJs("").then((data) => {
})