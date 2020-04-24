import React from 'react';
import {Edit, Create, List, Datagrid, TextField } from 'admin-on-rest';
import {SimpleForm} from 'admin-on-rest/lib/mui/form';
import {TextInput} from 'admin-on-rest/lib/mui/input';
import {EditButton} from 'admin-on-rest/lib/mui/button';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
            
        </Datagrid>
    </List>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Create>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Edit>
);