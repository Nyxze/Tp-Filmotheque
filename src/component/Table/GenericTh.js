import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function GenericForm({ name, isSortable = true, value, handleSorting }) {


    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "desc" ? "asc" : "desc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return (
        <>

            {isSortable
                ?
                <th>
                    <Button value={value} onClick={() => handleSortingChange(value)} size="sm" variant="dark" className="m-2" >
                        <i className={order==="asc"?"bi bi-arrow-up":"bi bi-arrow-down"}></i>
                    </Button>
                    {name}
                </th>
                :
                <th>
                    {name}
                </th>}
        </>


    );
}

