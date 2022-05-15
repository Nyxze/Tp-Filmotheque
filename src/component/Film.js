import { Link } from "react-router-dom";
export default function Film({ film }) {



    return (

        <>
            <tr>
                <td>

                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/film/${film.id}`}
                        key={film.id}
                    >
                        {film.titre} 
                    </Link>
                </td>

                <td>
                    {film.year}
                </td>

                <td>
                    {film.style.label}
                </td>

                <td>
                    {`${film.realisateur.nom} ${film.realisateur.prenom}`}
                </td>
                <td>

                </td>
                <td>
                    {film.vue ? "Oui" : "Non"}
                </td>

            </tr>
        </>
    )

}