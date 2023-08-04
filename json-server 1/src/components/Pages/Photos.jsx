import React, { useEffect ,useState } from 'react';
import axios from 'axios'

const Photos = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        axios({
            url:"http://localhost:3333/photos",
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
                                {item.title}
                            </div>
                            <div className={'card-body'}>
                                <img src={item.thumbnailUrl}/>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Photos;