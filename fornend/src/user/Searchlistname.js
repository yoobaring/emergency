


import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import {Searchname } from './posts';

import thaiMessages from './aor-language-thai';

const messages = {
    'th': thaiMessages,
};



const SearchtListname = () => (
    <Admin  locale="th" messages={messages} restClient={loopbackRestClient('https://apiminiyoo.herokuapp.com/api/')}>
        <Resource name="nurses" list={Searchname} />
        <Resource name="physicians" list={Searchname} />
        <Resource name="adjutants" list={Searchname}  />
    </Admin>
);

export default SearchtListname;






