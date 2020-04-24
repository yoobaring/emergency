import React from 'react';
import {Delete ,Admin, Resource } from 'admin-on-rest';
import {PostEdit ,PostCreate, PostList } from './posts';
import loopbackRestClient from 'aor-loopback';

const Ad = () => (
    <Admin restClient={loopbackRestClient('http://localhost:3000/api/')}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} remove={Delete}/>
    </Admin>
);

export default Ad;


