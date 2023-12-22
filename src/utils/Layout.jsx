import TopNav from '../components/Navigations/topNav';
import Footer from '../components/Navigations/Footer';

const Layout = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <TopNav />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout