import "./Information.css";

const InformationDog = ({dog}) => {
    return(
        <ul>
            <li>
                {dog.map(user =>(
                    <div><span>Name: </span>{user.breeds.map(item => item.name)}</div>
                ))}
            </li>
            <li>
                {dog.map(user =>(
                    <div><span>Temperament: </span>{user.breeds.map(item => item.temperament)}</div>
                ))}
            </li>
            <li>
                {dog.map(user =>(
                    <div><span>Breed Group: </span>{user.breeds.map(item => item.breed_group)}</div>
                ))}
            </li>
            <li>
                {dog.map(user =>(
                    <div><span>Life Span: </span>{user.breeds.map(item => item.life_span)}</div>
                ))}
            </li>
        </ul>  
    ) 
};

export default InformationDog;