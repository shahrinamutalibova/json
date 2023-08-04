import React, { useEffect ,useState } from 'react';
import axios from 'axios'

const Posts = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        axios({
            url:"http://localhost:3333/posts",
            method:"get"
        }).then(res => setData(res.data))
    } ,[])
    return (
        <div>
            <div className={'row'} style={{display:"flex"}}>
                <div className={'col-md-4'}>
                    {
                        data.map((item) => <div className={'card my-3'} key={item.id}>
                            <div className={'card-header'}>
                                {item.title}
                            </div>
                            <div className={'card-body'}>
                                {item.body}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts;