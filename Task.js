import Express from "express";
const app = Express()
const names = [
    "Akram", "Ahmed", "AboMera"
]
const namesList = (req, res) =>{
    let output = "<ul>"
    for (let i=0; i<names.length; i++){
        output += "<li>" + names[i] + "</li>";
    }
    output += "</ul>"
    res.send(output)
}
app.get("/students", namesList)
app.listen(5000)