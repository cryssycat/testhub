export default function RowBlock({children}){

return (

<div
style={{
display:"flex",
gap:"20px",
border:"2px solid red",
padding:"20px"
}}
>

{children}

</div>

)

}
