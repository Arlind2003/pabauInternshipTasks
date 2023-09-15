import "../CSS/OptionContainer.css"
import Option from "./Option";
export default function OptionContainer({nextPage}){
    const example = [
        {image:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0014/4448/brand.gif?itok=_UxtTPow", text:"Anti Wrinkle Treatment"},
        {image:"https://nordicms.com/wp-content/uploads/slider1_tiny.png", text:"Dermal Fillers"},
        {image:"https://cmgsites.s3.us-west-1.amazonaws.com/northwesternplasticsurgery/wp-content/uploads/2022/03/01170629/botox.jpg", text:"Secret RF"},
        {image:"https://www.reliablemedicare.co.uk/media/catalog/product/cache/fdd9f7bb64f5ffba44c297316f9a0d17/h/a/harmonyca_with_lidocaine_02.jpg", text:"HArmonyCA"},
        {image:"https://skinspaceuk-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/08/11073807/Profhilo.jpeg", text:"Profhilo"}
    ];
   return(
       <div className="options-container">
           {example.map((element)=>{
               return <Option image={element.image} text={element.text} nextPage={()=>nextPage(element.text)}/>
           })}
       </div>
   );
}