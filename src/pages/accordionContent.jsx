import Accordion from "../components/Accordion/Accordion";

const Content = () => {
  return (
    <div>
        <p className="text-center font-extrabold text-2xl my-4">Accordion Components</p>
        <Accordion 
        title="Product Info" content="This is product info content"
        subcontent="This is product info content" />
        <Accordion 
        title="Product Info" content="This is product info content" />
    </div>
    
  )
}

export default Content