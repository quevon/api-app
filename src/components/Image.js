import './Image.css'
import InformationCat from "./InformationCat";
import InformationDog from "./InformationDog";

const Image = ({cat,dog}) => {

    return (   
        <div>
            <div>Random Photos of Cats and Dogs</div>  
            <div className='flex-container'>
                <div className="cat-flex">
                    {cat.map(user =>(
                        <img src={user.url}></img>
                    ))}
                    <InformationCat cat={cat}/>
                </div>
                <div className="dog-flex">
                    {dog.map(user =>(
                        <img src={user.url}></img>
                    ))}
                    <InformationDog dog={dog}/>  
                </div>
            </div>     
        </div>
           
    )
}

export default Image;