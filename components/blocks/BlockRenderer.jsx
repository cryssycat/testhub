export default function BlockRenderer({block,data}){

console.log("BLOCK RECEIVED:", block);

const Component = blocks[block.type];

if(!Component){
 console.log("NO COMPONENT FOUND:", block.type);
 return null;
}

return (
...
)

}

import blocks from "./blockRegistry";


export default function BlockRenderer({block,data}){


const Component = blocks[block.type];


if(!Component){
 return null;
}


return (

<Component props={block.props}>

{

block.children?.map((child,index)=>(

<BlockRenderer
key={index}
block={child}
data={data}
/>

))

}

</Component>

)

}
