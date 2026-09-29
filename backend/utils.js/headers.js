export default function writeHeaders(res){
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allowed headers
}