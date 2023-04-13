/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
export const Counter = (props) =>{
    
    const {value} = props
    //const [value, setValue] = useState(props.value);
   // const [tags, setTags] = useState(['tag1','tag2','tag3']);


    const formatValue = () =>{
        return value <= 0 ? 'empty' : value;
    }
    //const imageUrl = 'https://picsum.photos/200';
    const getBageClasses = () =>{
        let classes = "badge m-2 p-2 shadow text-center fw-normal ";
        classes += value <= 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    const handleIncrement = () =>{
        //setCount(count + 1);
        //setValue((prevState) => prevState + 1);//prevState - предыдущее состояние переменной
        console.log(value);
        props.onIncrement(props.id);
    }
    const handleDicrement = () =>{
        //setValue((prevState) => prevState - 1)
        console.log(value);
        props.onDecriment(props.id);
    }
    // const handleTagChange = (id) => {
    //     //setTags(["tag1","tag2","tag3"]);
    //     //setTags((prevState) => prevState.push(id + '1'));
    //     setTags(prevState => prevState.filter(tag => tag !== id));

    //     console.log(id);
    // }

    /*const renderTags = () => {
        if(tags.length === 0) return "No Tags";
        return tags.map((tag) => (
            <li key={tag} className='btn btn-primary btn-sm m-2 pb-2 shadow' onClick={() => handleTagChange(tag)}>{tag}</li>
        ));
    }*/

    /*if(tags.length !== 0){
        return <ul>
            {renderTags()}
           {/* <li>{tags[0]}</li>
            <li>{tags[1]}</li>
            <li>{tags[2]}</li>}*/
       /* </ul>
    }*/

    return (
    <div>{/*используется если не нужно создавать дополнительный div контейнер*/ }
        {/*<img src={imageUrl} alt='image'/>*/}
        <span className = 'd-inline-block w-25 p-3'>{props.name}</span>
        <span className={getBageClasses()}>{formatValue()}</span>
        <button className='btn btn-primary btn-sm m-2 pb-2 shadow' onClick={handleIncrement}>+</button>
        <button className='btn btn-primary btn-sm m-2 pb-2 shadow' onClick={handleDicrement}>-</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
    
    );
}