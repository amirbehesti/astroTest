import Suggestions from "./Suggestions"

const Details = ({ birth, astro, gem }) => {

   if(!gem.length) {
    return <div className="spinner">Not Found</div>
   }

    return (
        <>
        <div><h1  className="header-text">Vedic Horoscope</h1></div>
       <div className="birth-astro">
        {Object.keys(birth).length !== 0 && <div>
            <h2 className="card-heading">Birth Details:</h2>
            {Object.keys(birth).map((item,index)=>{
                return <p key={index}><b>{item.split("")[0].toUpperCase()+item.substring(1,item.length+1)}</b>: {birth[item]}</p>
            })}
            </div>}

        {astro && <div>
            <h2 className="card-heading">Astro Details:</h2>
            {Object.keys(astro).map((item,index)=>{
                return <p key={index}><b>{item.split("")[0].toUpperCase()+item.substring(1,item.length+1)}</b>: {astro[item]}</p>
            })}
            </div>}
       </div>
       <div><h1 className="header-text">Gem Suggestions</h1></div>
       <div className="gem-suggestion">
            {gem && gem.map((item,index)=>{
                return <Suggestions key={index}item={item}/>
            })}

       </div>
       </>
    );
  };
  
  export default Details;  