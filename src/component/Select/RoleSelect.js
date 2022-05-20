
import Form from 'react-bootstrap/Form';

export default function SeasonSelect({ roleSelect, setRoleSelect }) {

    console.log(roleSelect)

    return (

        <>
            <div className='mb-3'>
                <Form.Label>Role</Form.Label>
                <Form.Select onChange={(e) => setRoleSelect({
                    name: e.target.value
                }
                )} name="role">
                    <option value={"user"}>
                        Utilisateur
                    </option>
                    <option value={"admin"}>
                        Admin
                    </option>

                </Form.Select>
            </div>


        </>
    )

}