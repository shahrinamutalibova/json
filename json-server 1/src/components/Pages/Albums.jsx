import React, { useEffect ,useState } from 'react';
import { Col, Divider, Row } from 'antd';
import axios from "axios";

const Albums = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        axios({
            url:"http://localhost:3333/albums",
            method:"get"
        }).then(res => setData(res.data))
    } ,[])
    return (
        <div>
           <Row>
               <Col>
                   {
                       data.map((item) => <div className={'card my-3'} key={item.id}>
                           <div className={'card-header'}>
                               {item.id}
                           </div>
                           <div className={'card-body'}>
                               {item.title}
                           </div>
                       </div>
                       )
                   }
               </Col>

           </Row>
        </div>
    )
}

export default Albums;