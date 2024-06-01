
const [username, setUsername]= useState("");





const handleusername=(e)=>{
    console.log(e.target.value)
    setusername(e.target.value);
}


const handleemail=(e)=>{
    setemail(e.target.value);
}


const handlesubmit=(e)=>{
    e.preventDefault()
    setshow([username, email]);

}
return(
    <>
    <div></div>
    </>
)