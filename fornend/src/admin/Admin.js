import React from 'react';
import {Delete ,Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import {nursesEdit ,nursesCreate, nursesList ,
        physicianEdit ,physicianCreate, physicianList ,
        adjutantEdit ,adjutantCreate, adjutantList,
       } from './posts';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Ad = () => (
    <Admin theme={getMuiTheme(darkBaseTheme)} restClient={loopbackRestClient('http://localhost:3000/api/')}>
        <Resource name="nurses" list={nursesList} create={nursesCreate} edit={nursesEdit} remove={Delete}/>
        <Resource name="physicians" list={physicianList} create={physicianCreate} edit={physicianEdit} remove={Delete}/>
        <Resource name="adjutants" list={adjutantList} create={adjutantCreate} edit={adjutantEdit} remove={Delete} />
    </Admin>
);

export default Ad;




