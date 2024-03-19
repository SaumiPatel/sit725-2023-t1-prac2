
express=require("express");
port=3054;
app=express();
path=require('path');
const bodyParser=require('body-parser');


app.use(express.static(path.join(__dirname,'public_html')));
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.sendFile('calc.html',{root:'public_html'});
})

app.get('/addition',(req,res)=>{
    const n1=parseInt(req.query.val1);
    console.log(n1)
    const n2=parseInt(req.query.val2);

    const sum=n1+n2;
    console.log(req)

    res.send(`<h2>${n1} + ${n2} = ${sum}</h2>
    <input type="button" value="return" onclick="location.href='/'">`)

})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
