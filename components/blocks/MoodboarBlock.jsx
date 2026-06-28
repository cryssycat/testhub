export default function MoodboardBlock({props}){


return (

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"10px"
}}
>


{
props.images.map((img,index)=>(

<img
key={index}
src={img}
/>

))

}


</div>

)

}