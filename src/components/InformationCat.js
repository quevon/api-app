import "./Information.css";

const InformationCat = ({cat}) => {
    return(
        <ul>
            <li>
                {cat.map(user =>(
                    <div><span>Name: </span>{user.breeds.map(item =>item.name)}</div>
                ))}
            </li>
            <li>
                {cat.map(user =>(
                    <div><span>Temperament: </span>{user.breeds.map(item => item.temperament)}</div>
                ))}
            </li>
            <li>
                {cat.map(user =>(
                    <div><span>Origin: </span>{user.breeds.map(item =>item.origin)}</div>
                ))}
            </li>
            <li>
                {cat.map(user =>(
                    <div><span>Description: </span>{user.breeds.map(item =>item.description)}</div>
                ))}
            </li>
            <li>
                {cat.map(user =>(
                    <div><span>Life Span: </span>{user.breeds.map(item =>item.life_span)}</div>
                ))}
            </li>
        </ul>
    ) 
};

export default InformationCat;