import Form from 'react-bootstrap/Form';

export default function Auteur() {

    


    return(<div className='m-2 col-8 d-inline-flex align-items-center'>

        <Form.Label className='m-2'>Acteur 1</Form.Label>
        <Form.Control
            name="acteurs[0]nom"
            className="m-2"
            type="text"
            placeholder="Nom" />

        <Form.Control
            name="acteurs[0]prenom"
            type="text"
            placeholder="Prénom" />
    </div>)

}