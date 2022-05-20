import Card from "./Card";

export default function Gallery({ name, data }) {


    const buildCard = () => {

        return data.map((item) => {

            return <Card key={item.id} item={item}></Card>
        })
    }

    return (

        <div className="container mt-5 mb-3">
            <h2> Nos {name}</h2>
            {data.length > 0 ?
                <div className="row">
                  
                            {buildCard()}
                  
                </div>

                : <div>

                    Pas de  {name} disponible
                </div>}

        </div>)
}