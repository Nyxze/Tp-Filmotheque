
import Form from 'react-bootstrap/Form';

export default function FormInput({ name, type, onChange,title,value }) {



   


    return (<div className='m-2 col-8 d-inline-flex align-items-center'>

        <Form.Label className='m-2' >{title}</Form.Label>
        {type === "textarea" ?
            <Form.Control
                onChange={onChange}
                name={name}
                as="textarea"
                rows={5}
                value={value}
            
            /> :
            <Form.Control
                onChange={onChange}
                name={name}
                type={type}
                value={value}
            />

        }

    </div>)

}