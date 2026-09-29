export default async function getTasks(){
    try{
        const res = await fetch("http://localhost:8000/get-tasks");
        if(!res.ok){
            throw new Error("Failed to fetch");
        }
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err.message);
    }
}
