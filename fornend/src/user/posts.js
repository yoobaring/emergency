import React from 'react';
import {Filter,TabbedForm,FormTab,DateInput,NumberInput
,required,DateField , Create, List, Datagrid, TextField,TextInput } from 'admin-on-rest';



const choices = [
    { id: 'ชาย', name: 'ชาย' },
    { id: 'หญิง', name: 'หญิง' },
 ];

 

//////////////////Listname////////////////

export const ListnametList = (props) => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="firstname" label="ชื่อ "/>
            <TextField source="surname" label="นามสกุล "/>
            <TextField source="phone" label="เบอร์ "/>
            <DateField source="date" label="วันที่ "/>
            <TextField source="time" label="เวลา "/>
            <TextField source="lgtext" label="เหตุผลที่ลา "/>
           


            
        </Datagrid>
    </List>
);

export const ListnameCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <TextInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <TextInput  source="lgtext" label="เหตุผลที่ลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               
                 
                
                    </FormTab>
                   
        </TabbedForm>
    </Create>
);


//////////////////Listname////////////////


//////////////////ค้นหารายชื่อ////////////////


const PostFilter = (props) => (
    <Filter {...props}>

        <DateInput 
                source="date" label="กรอกวันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />

                
        <TextInput label="กรองชื่อ" source="firstname" alwaysO />
        <TextInput label="กรองนามสกุล" source="surname" alwaysO />
        <TextInput label="กรองเบอร์โทร" source="phone" alwaysO />
        <TextField label="กรองเวลา" source="เวลา" alwaysO />
        <TextField label="กรองเพศ" source="เพศ" alwaysO />
    </Filter>
);



export const Searchname = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="firstname" label="ชื่อ "/>
            <TextField source="surname" label="นามสกุล "/>
            <TextField source="phone" label="เบอร์ "/>
            <DateField source="date" label="วันที่ "/>
            <TextField source="time" label="เวลา "/>
            <TextField source="sex" label="เพศ "/>
           


            
        </Datagrid>
    </List>
);


//////////////////Listname////////////////

