import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { Modal, Input } from 'antd';

const App = () => {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [selectedUserId, setSelectedUserId] = useState(null);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'username',
            dataIndex: 'username',
            render: (text) => text,
        },
        {
            title: 'email',
            dataIndex: 'email',
            render: (text) => text,
        },
        {
            title: 'actions',
            render: (text, record) => (
                <>
                    <button onClick={() => editItem(record)} className={'btn btn-primary'}>
                        Edit
                    </button>
                    <button onClick={() => deleteItem(record.id)} className={'btn btn-danger mx-1'}>
                        Delete
                    </button>
                </>
            ),
        },
    ];

    function getPosts() {
        axios({
            url: 'http://localhost:3333/users',
            method: 'get',
        }).then((res) => setData(res.data));
    }

    function deleteItem(id) {
        axios({
            url: `http://localhost:3333/users/${id}`,
        method: 'delete',
    }).then(() => {
            getPosts();
        });
    }

    function editItem(record) {
        setSelectedUserId(record.id);
        setEditedName(record.name);
        setModalVisible(true);
    }

    function handleModalOk() {
        axios({
            url: `http://localhost:3333/users/${selectedUserId}`,
        method: 'put',
            data: {
            name: editedName,
                email:'Sincere@april.biz',
                username:'Bret'
        },
    }).then(() => {
            getPosts();
            setModalVisible(false);
            setEditedName('');
            setSelectedUserId(null);
        });
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Modal
                title="Edit Name"
                visible={modalVisible}
                onOk={handleModalOk}
                onCancel={() => {
                    setModalVisible(false);
                    setEditedName('');
                    setSelectedUserId(null);
                }}
            >
                <Input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
            </Modal>
        </div>
    );
};
export default App