const fs = require("fs").promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt", "Hello Students!", "utf8");
        console.log("File created and data written successfully");
    }catch(error){
        console.log("error:",error);
    }
}
writeFile();
