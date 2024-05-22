
export default async function GetPortfolio (){
        const response= await fetch('https://jsonplaceholder.typicode.com/users',{
        next: {revalidate: 60}
    });
    const result= await response.json();
    
    
    return(
        <div className="md:w-2/4">
      <h4>Name: </h4>
        <h4 >Age: </h4>
        <h4 >Email: </h4>
        <div>
          <h4 className="border-2 rounded-lg bg-red-200 ">Personal And Profiessinoal Achievements:</h4>
          {result.map(i=>
            <><li className="font-semibold ">title: {i.name}</li>
            <li>Discription: {i.name}</li></>
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