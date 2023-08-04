
import React, { useEffect ,useState } from 'react';
import axios from 'axios'

const Todo = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        axios({
            url:"http://localhost:3333/todos",
            method:"get"
        }).then(res => setData(res.data))
    } ,[])
    return (
        <div>
            <div className={'row'}>
                <div className={'col-md-4'}>
                    {
                        data.map((item) => <div className={'card my-3'} key={item.id}>
                            <div className={'card-header'}>
                                {item.id}
                                {item.title}
                            </div>
                            <div className={'card-footer'}>
                                <input type={"checkbox"} checked={item.completed}/>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;