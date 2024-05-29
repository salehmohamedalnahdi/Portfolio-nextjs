
export default async function GetPortfolio (){
        const response= await fetch('https://personal-portfolio-backend-9t80.onrender.com/users',{
        next: {revalidate: 60}
    });
    const result= await response.json();
    const achievement= await result[0].achievements
    
    return(
        <div className="md:w-2/4">
      <h4>Name: {result[0].name}</h4>
        <h4 >Age: {result[0].age}</h4>
        <h4 >Email: {result[0].email}</h4>
        <div>
          <h4 className="border-2 rounded-lg bg-red-200 ">Personal And Profiessinoal Achievements:</h4>
          {achievement.map(i=>
            <><li className="font-semibold ">title: {i.title}</li>
            <li>Discription: {i.content}</li></>
          )}
        </div>
    </div>
    );
}
/*  const [data,setData]= useState({});
    const get=async()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/users',{
        next: {revalidate:1}
    });
    const result= await response.json();
    setData(result);
    }
    useEffect( () =>{
        get()
    },[]); */