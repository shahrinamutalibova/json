import React, { useEffect ,useState } from 'react';
import axios from "axios";

const Comments = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        axios({
            url:"http://localhost:3333/comments",
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
                                {item.name}
                            </div>
                            <div className={'card-body'}>
                                {item.body}
                            </div>
                            <div className={'card-body'}>
                                {item.email}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments;