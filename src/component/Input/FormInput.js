import Form from 'react-bootstrap/Form';

export default function FormInput({ name, type, onChange }) {






    return (<div className='m-2 col-8 d-inline-flex align-items-center'>

        <Form.Label className='m-2' >{name}</Form.Label>
        {type === "textarea" ?
            <Form.Control
                onChange={onChange}
                name={name}
                as="textarea"
                rows={5}
            
            /> :
            <Form.Control
                onChange={onChange}
                name={name}
                type={type}
        
            />

        }

    </div>)

}