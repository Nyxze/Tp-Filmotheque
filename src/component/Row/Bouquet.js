import { Link } from "react-router-dom";
export default function Fleur({ fleur }) {



    return (

        <>
            <tr>
                <td>

                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/fleur/${fleur.id}`}
                        key={fleur.id}
                    >
                        {fleur.titre} 
                    </Link>
                </td>

                <td>
                    {fleur.year}
                </td>

                <td>
                    {fleur.style.libelle}
                </td>

                <td>
                    {`${fleur.realisateur.nom} ${fleur.realisateur.prenom}`}
                </td>
                <td>

                </td>
                <td>
                    {fleur.vue ? "Oui" : "Non"}
                </td>

            </tr>
        </>
    )

}