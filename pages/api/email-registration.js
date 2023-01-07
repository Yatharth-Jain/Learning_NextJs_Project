import path from 'path';
import fs from 'fs';

function buildPath(){
    return path.join(process.cwd(),'data','data.json');
}

function extractData(filePath){
    const jsonData=fs.readFileSync(filePath);
    const data= JSON.parse(jsonData);
    return data;
}

export default function emailRegistration(req,res) {
    const {method} = req;
    const filePath = buildPath();
    const {events_categories,allEvents} = extractData(filePath);
    if(!allEvents){
        res.status(404).json({message:"Event Data Not found"});
    }
    if(method=='POST'){
        const{email,eventId}=req.body;
        const newData = allEvents.map((ev)=>{
            console.log(ev.id,eventId);
            if(ev.id===eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({message:'Email is already registered'})
                    return ev;
                }
                console.log(email);
                return{
                    
                    ...ev,emails_registered:[...ev.emails_registered,email]
                }
            }
            return ev;
        })
        fs.writeFileSync(filePath,JSON.stringify({events_categories,allEvents:newData}));
        res.status(200).json({message:`You has been registered Successfully for this event by Email:${email} for event ${eventId}`})

    }
    if(method=='GET'){

    }
}
