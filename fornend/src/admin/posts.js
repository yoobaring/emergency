import React from 'react';
import {Filter,TabbedForm,FormTab,DisabledInput,DateInput,RadioButtonGroupInput,NumberInput
,EditButton,required,DateField ,Edit, Create, List, Datagrid, TextField,TextInput,DeleteButton } from 'admin-on-rest';



const choices = [
    { id: 'ชาย', name: 'ชาย' },
    { id: 'หญิง', name: 'หญิง' },
 ];

//////////////////Purses////////////////

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="firstname" alwaysOn />
        <TextInput label="Title" source="surname" alwaysO />
    </Filter>
);

export const nursesList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstname" label="ชื่อ "/>
            <TextField source="surname" label="นามสกุล "/>
            <TextField source="phone" label="เบอร์ "/>
            <DateField source="date" label="วันที่ "/>
            <TextField source="time" label="เวลา "/>
            <TextField source="sex" label="เพศ "/>
            <EditButton/>
            <DeleteButton/>


            
        </Datagrid>
    </List>
);

export const nursesCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                
                    </FormTab>
                   
        </TabbedForm>
    </Create>
);

export const nursesEdit = (props) => (
    <Edit {...props}>
        
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <DisabledInput source="id" style={{display: 'inline-block',marginRight:32}}/>
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
               
                    </FormTab>
                    <FormTab label="อื่นๆ" >

                    </FormTab>
        </TabbedForm>
    </Edit>
);


//////////////////Physician////////////////




export const physicianList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstname" label="ชื่อ "/>
            <TextField source="surname" label="นามสกุล "/>
            <TextField source="phone" label="เบอร์ "/>
            <DateField source="date" label="วันที่ "/>
            <TextField source="time" label="เวลา "/>
            <TextField source="sex" label="เพศ "/>
            <EditButton/>
            <DeleteButton/>
            
        </Datagrid>
    </List>
);

export const physicianCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                    </FormTab>
        </TabbedForm>
    </Create>
);

export const physicianEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <DisabledInput source="id" style={{display: 'inline-block',marginRight:32}}/>
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                    </FormTab>
        </TabbedForm>
    </Edit>
);



//////////////////Adjutants////////////////



export const adjutantList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstname" label="ชื่อ "/>
            <TextField source="surname" label="นามสกุล "/>
            <TextField source="phone" label="เบอร์ "/>
            <DateField source="date" label="วันที่ "/>
            <TextField source="time" label="เวลา "/>
            <TextField source="sex" label="เพศ "/>
            <EditButton/>
            <DeleteButton/>
            
        </Datagrid>
    </List>
);

export const adjutantCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                    </FormTab>
        </TabbedForm>
    </Create>
);

export const adjutantEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <DisabledInput source="id" style={{display: 'inline-block',marginRight:32}}/>
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                    </FormTab>
        </TabbedForm>
    </Edit>
);





//////////////////publish////////////////



export const publishesList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="หัวเรื่อง "/>
            <TextField source="subject" label="ข้อความประกาศ "/>  
            <EditButton/>
            <DeleteButton/>
            
        </Datagrid>
    </List>
);

    export const publishesCreate = (props) => (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="ข้อมูลทั่วไป" >
                <TextInput source="title" label="หัวเรื่อง "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
                <TextInput source="subject" label="ข้อความประกาศ " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
                    
                        </FormTab>
                       
            </TabbedForm>
        </Create>
    );
    
    export const publishesEdit = (props) => (
        <Edit {...props}>
            
            <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
                <TextInput source="title" label="หัวเรื่อง "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
                <TextInput source="subject" label="ข้อความประกาศ " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
                    
                        </FormTab>
            </TabbedForm>
        </Edit>
    );
    
//////////////////Users////////////////



export const userList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="realm" label="ชื่อ "/>
            <TextField source="username" label="ชื่อผู้ใช้ "/>
            <TextField source="email" label="อีเมล์ "/>
            <EditButton/>
            <DeleteButton/>
            
        </Datagrid>
    </List>
);

export const userCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                    </FormTab>
        </TabbedForm>
    </Create>
);

export const userEdit = (props) => (
    
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
            <DisabledInput source="id" style={{display: 'inline-block',marginRight:32}}/>
            <TextInput source="firstname" label="ชื่อ "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
            <TextInput source="surname" label="นามสกุล " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
            <TextInput source="phone" label="เบอร์ " style={{display: 'inline-block',marginRight:32}}/><br/>
            <NumberInput  source="time" label="เวลา " style={{display: 'inline-block',marginRight:32}} />
            <DateInput 
                source="date" label="วันที่ " style={{display: 'inline-block',marginRight:32}} validate={[required]}
                options={{
                    mode:'landscape',
                    cancelLabel:'ยกเลิก',
                    locale:'th'
                }}
                />
               <RadioButtonGroupInput source="sex" label="เพศ "  choices={choices} translateChoice={false}
               
               style={{display: 'inline-block',marginRight:32}} validate={[required]}
                    options={{
                        labelPosition:'right'
                    }}
               />
                    </FormTab>
        </TabbedForm>
    </Edit>
    
);




//////////////////listnames////////////////



export const listnamesList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="หัวเรื่อง "/>
            <TextField source="subject" label="ข้อความประกาศ "/>  
            <EditButton/>
            <DeleteButton/>
            
        </Datagrid>
    </List>
);

   
    
    export const listnamesEdit = (props) => (
        <Edit {...props}>
            
            <TabbedForm>
            <FormTab label="ข้อมูลทั่วไป" >
                <TextInput source="title" label="หัวเรื่อง "style={{display: 'inline-block',marginRight:32}} validate={[required]}/><br/>
                <TextInput source="subject" label="ข้อความประกาศ " style={{display: 'inline-block',marginRight:32}} validate={[required]}/>
                    
                        </FormTab>
            </TabbedForm>
        </Edit>
    );