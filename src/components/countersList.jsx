import React, {useState} from 'react';
import { Counter } from './counter';

export const CountersList = () => {

    const initialState = [
        {id:0, value:0, name:'Ненужная вещь',price:200},
        {id:1, value:4, name:'Вилка'},
        {id:2, value:0, name:'Ложка'},
        {id:3, value:4, name:'Набор туриста'},
        {id:4, value:0, name:'Ведро'},
    ];

   

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        //console.log('handleDelete', id);
        const newCounters = counters.filter((c) => c.id !== id);
        //console.log(newCounters);
        setCounters(newCounters);
    };

    const handleIncremetn = (id) => {
        const newValue = counters.map((f) => {
            if(f.id === id){                
                f.value = f.value + 1;
            }
            return f
        });        
        setCounters(newValue);
    };

    const handleDecriment = (id) => {
        const newValue = counters.map((f) => {
            if(f.id === id){
                if(f.value > 0)
                    f.value = f.value - 1;
            }
            return f
        });
        setCounters(newValue);
    }

    const handleReset = () => {
        console.log('handle reset...')
        setCounters(initialState);
    }
    // const handleUpdate = () => {
    //     const updateState = [
    //         {id:0, value:1, name:'Ненужная вещь',price:200},
    //         {id:1, value:2, name:'Вилка'},
    //         {id:2, value:3, name:'Ложка'},
    //         {id:3, value:5, name:'Набор туриста'},
    //         {id:4, value:10, name:'Ведро'},
    //     ];
    //     setCounters(updateState);
    // }
    return (
        <>
            {counters.map((count) => (
                <Counter 
                key = {count.id} 
                // id = {count.id} 
                // value = {count.value} 
                // name = {count.name} 
                onDelete = {handleDelete}
                onIncrement = {handleIncremetn}
                onDecriment = {handleDecriment}
                {...count}
                
                />
            ))}
            <button className="btn btn-primary btn-sm m-2 shadow" onClick={handleReset}>Сброс</button>
            {/*<button className="btn btn-primary btn-sm m-2 shadow" onClick={handleUpdate}>Обновить состояние</button>*/}
        </>
        
    );
}