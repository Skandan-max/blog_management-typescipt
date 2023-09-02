import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from '../src/interfaces/Hero'


const Dashboard = () => {
    const [data, setData] = useState<Hero[] | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch('http://localhost:7777/heroes', { signal: abortCont.signal })
        .then((res:Response):Promise<Hero[]> => {
            if (!res.ok) {
              throw Error("could not fetch the data for the given resource");
            }
            return res.json();
          })
          .then((data:Hero[]) => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err:Error) => {
            if (err.name === "AbortError") console.log("fetch aborted");
            else {
              setIsPending(false);
              setError(err);
            }
          });
    }, [])

    return ( <div className="dashboard">
    <h2>Dashboard</h2>
    {error && <div>{error.message}</div>}
    {isPending && <div>Loading...</div>}
    {data && <div className="listfour">
            {
                data.slice(0, 4).map((hero: Hero) => (
                    <div className="hero-preview" key={hero.id}>
                        <Link to={`/heroes/${hero.id}`}>
                            <button>{hero.name}</button>
                        </Link>
                    </div>
                ))
            }
        </div>}
</div> );
}
 
export default Dashboard;