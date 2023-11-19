import { createContext, useContext } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useToggle } from "../../hooks/useToggle";

// Create context api
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand
  };

  return (
    <Provider value={value}>
      <div className="bg-green-800 py-3 px-5 rounded-md mb-3">
        <AccordionHeader>{title}</AccordionHeader> 
        <AccordionContent>{content}</AccordionContent>
      </div>
    </Provider>
  );
};

// Header
const AccordionHeader = ({ children }) => {
  const { toggleExpand } = useContext(AccordionContext);

  return (
    <div className="flex justify-between">
      <p className="text-white font-semibold"> {children} </p> 
      <button onClick={toggleExpand}>
        <AccordionIcon className='shadow-md'
          iconOpened={<FaChevronRight />}
          iconClosed={<FaChevronDown />}
        />
      </button>
    </div>
  );
};

// Content
const AccordionContent = ({ children }) => {
  const { expand, toggleExpand } = useContext(AccordionContext);

  return (
    <div >
        {expand && (
            <div className="bg-green-100 py-4 px-6 mr-4 my-3 text-sm rounded-lg">
                {children}
            </div>
            
        )}
        
    </div>
  );
};

// Sub-Content
const AccordionSubContent = ({ children }) => {
  const { expand } = useContext(AccordionContext);

  return (
        <div >
            {expand && (
                <div className="bg-green-100 py-4 px-6 mr-4 my-3 text-sm rounded-lg">
                    { children}
                </div>
            )}
        </div>
    );
};

// Icon
const AccordionIcon = ({ iconOpened, iconClosed }) => {
  const { expand } = useContext(AccordionContext);

  return (
        <>
            <span className={` w-9 text-xs ${expand ? "text-lime-100" : "text-lime-200"}`}>
                {expand ? iconOpened : iconClosed}
            </span>
        </>
    )

};

export default Accordion;
