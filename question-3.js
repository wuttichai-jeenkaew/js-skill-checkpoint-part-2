// เริ่มเขียนโค้ดตรงนี้
    const getUser = () => fetch ("https://jsonplaceholder.typicode.com/users")


const sucess = async (data) => {
    const res = await data.json()
    const name = res.reduce((acc, user) => {
    if(user.name.length > 17){
       
        acc.push(user.name)
        

    }
    return acc
    },[])
    console.log(name);
}






getUser().then(sucess)