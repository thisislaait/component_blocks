import CircleMenu from "../components/Buttons/CircleMenu";
import BigScreen from "../Screens/BigScreen";
import MediumScreen from "../Screens/MediumScreen";
import XXScreen from "../Screens/XXScreen";

const landingPage = () => {
  return (
    <main>
      <section className='flex flex-col py-3 px-8 text-black bg-white my-5 mx-6 rounded-[3.5rem]'>
        <div className="primary flex justify-between items-center">
          <h1>
            Ugo Ogadi
          </h1>
          <CircleMenu />
        </div>
        <XXScreen />
        <BigScreen />
        <MediumScreen /> 
      </section>
      
    </main>
  )
}

export default landingPage