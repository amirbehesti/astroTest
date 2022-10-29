function Suggestions({item}) {
  return (
    <>
            {item && <div className="small-card">
            {Object.keys(item).map((data,index)=>{
                return <p key={index}><b>{data.split("")[0].toUpperCase()+data.substring(1,data.length+1)}</b>: {item[data]}</p>
            })}
            </div>}
    </>
  )
}
export default Suggestions