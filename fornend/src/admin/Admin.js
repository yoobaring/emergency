import React from 'react';
import {Delete ,Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import {nursesEdit ,nursesCreate, nursesList ,
        physicianEdit ,physicianCreate, physicianList ,
        adjutantEdit ,adjutantCreate, adjutantList,
        userEdit,userCreate,userList
       } from './posts';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import thaiMessages from './aor-language-thai';

const messages = {
    'th': thaiMessages,
};



const Ad = () => (
    <Admin  locale="th" messages={messages} theme={getMuiTheme(darkBaseTheme)} restClient={loopbackRestClient('https://apiminiyoo.herokuapp.com/api/')}>
        <Resource name="nurses" list={nursesList} create={nursesCreate} edit={nursesEdit} remove={Delete} />
        <Resource name="physicians" list={physicianList} create={physicianCreate} edit={physicianEdit} remove={Delete}/>
        <Resource name="adjutants" list={adjutantList} create={adjutantCreate} edit={adjutantEdit} remove={Delete} />
        <Resource name="Users" list={userList} create={userCreate} edit={userEdit} remove={Delete} />
    </Admin>
);

export default Ad;




