export default function HeaderBlock({props}){


return (

<div>

<img
src={props.avatar}
width="100"
/>

<h1>
{props.name}
</h1>


</div>

)

}