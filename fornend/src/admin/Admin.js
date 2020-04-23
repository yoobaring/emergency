import React from 'react';
import {Admin, Resource } from 'admin-on-rest';
import { PostList } from './posts';
import loopbackRestClient from 'aor-loopback';

const Ad = () => (
    <Admin restClient={loopbackRestClient('http://localhost:3000/api/')}>
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default Ad;


