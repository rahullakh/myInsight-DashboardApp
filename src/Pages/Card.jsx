

const Card = ({value, title, bg}) => {
  return (
       <div className={`p-5 ${bg} text-white rounded-xl shadow-md`}>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div> 
  )
}

export default Card

