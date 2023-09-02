import { useState,useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { Hero } from '../src/interfaces/Hero';

const HeroDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [newName, setNewName] = useState<string>('');
    const  navigate=useNavigate();

    useEffect((): void => {
        fetch(`http://localhost:7777/heroes/${id}`)
        .then((res: Response): Promise<Hero> => {
            return res.json()
        }).then((data : Hero) => {
            setNewName(data.name);
        }).catch((err: Error) => console.log(err))
    }, [id])

    const updateHandler = (e: React.FormEvent) => {
        e.preventDefault();

        fetch(`http://localhost:7777/heroes/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({name: newName})
        })
        .then(() => {
            console.log("name updated");
            navigate(-1);
        })
        .catch((err: Error) => console.log(err));
    }

    return (  <div className="hero-details">
    
    <h2>{newName}</h2>
    <form onSubmit={updateHandler}>
        <label>superhero name:</label>
        <input
            type="text"
            required
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
        />
        <button>change name</button>
    </form>
</div>);
}
 
export default HeroDetails;