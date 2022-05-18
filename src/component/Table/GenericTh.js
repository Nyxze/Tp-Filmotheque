export default function GenericForm({ name, isSortable = true, onClick}) {


    return (
        <>

            {isSortable
                ?
                <th>
                    <i onClick={onClick} className="bi bi-arrow-up"></i>
                    {name}
                    <i onClick={onClick}className="bi bi-arrow-down"></i>
                </th>
                :
                <th>
                    {name}
                </th>}
        </>


    );
}

