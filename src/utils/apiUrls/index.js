export let api_urls;

if (window.location.protocol === 'http:') {
    api_urls = 'http://192.168.29.99:5000/'
    console.log('Running HTTP', api_urls);

} else if (window.location.protocol === 'https:') {
    api_urls = 'https://api.biovisuals.in/'
    console.log('Running HTTPS', api_urls);
    
} else {
    console.log('Unknown protocol');
}
