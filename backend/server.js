import http from "http";
import fs from "fs";
import writeHeaders from "./utils.js/headers.js";
import sendRes from "./utils.js/sendRes.js";

const PORT = 8000;


const server = http.createServer(async(req,res)=>{
    writeHeaders(res);

    if(req.method === "OPTIONS"){
        res.statusCode = 204;
        return res.end();
    }

    if(req.url === "/tasks" && req.method=="POST"){
        let body ="";

        try{
            for await (const chunk of req){
                body+=chunk;
            }

            if(!body){
                throw new Error("Failed to gather data");
            }

            const data = JSON.parse(body);

            if(!Array.isArray(data)){
                throw new Error("Invalid data format");
            }

            console.log(data);

            sendRes(res,200,"application/json",{message:"success"});

            fs.writeFileSync("tasks.json",JSON.stringify(data));

            sendRes(res,200,"application/json",{
                message:"tasks saved"
            });

            
        }catch(err){
            console.log(err.message);

            sendRes(res,400,"application/json",{error:err.message});
        }

        return;
    }

    if (req.url === "/get-tasks" && req.method === "GET") {
        try {
            const data = fs.readFileSync("tasks.json", "utf-8") || "[]";
            const tasks = JSON.parse(data);

            sendRes(res, 200, "application/json", tasks);

        } catch {
            sendRes(res, 200, "application/json", []);
        }
    }
})


server.listen(PORT, ()=>{
    console.log("Server is running");
})