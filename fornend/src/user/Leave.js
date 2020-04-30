import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import { ListnameCreate, ListnametList } from './posts';

import thaiMessages from './aor-language-thai';

const messages = {
    'th': thaiMessages,
};



const Leave = () => (
    <Admin  locale="th" messages={messages} restClient={loopbackRestClient('https://apiminiyoo.herokuapp.com/api/')}>
        <Resource name="listnames" list={ListnametList}  create={ListnameCreate} />
    </Admin>
);

export default Leave;




