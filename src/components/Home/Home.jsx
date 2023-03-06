import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

const Home = () => {

  
  return ( 
    <>
      <section className="home" data-testid="Home-component">
        <section className="welcome-container">
          <h2>Welcome!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            <br/>Dicta, ex magnam! Quisquam, fugit. <br/>Sunt assumenda facere nihil tempore corporis quaerat accusantium placeat veniam in. 
            Distinctio, nulla. Perferendis quas dignissimos voluptatibus.

          </p>
        </section>
        <section className="cards-section">
          <div className="card">
           <div className="card-inner">
              <h3>We have fun!</h3>
              <div className="icon-container">
                <SentimentVerySatisfiedOutlinedIcon fontSize='large' color="primary"  />
              </div>
           </div>
          </div>   
          <div className="card">
           <div className="card-inner">
              <h3>0ver 500 different courses!</h3>
              <div className="icon-container">
                <SchoolOutlinedIcon fontSize='large' color="secondary" />
              </div>
           </div>
          </div>      
          <div className="card">
           <div className="card-inner">
              <h3>Great teachers!</h3>
              <div className="icon-container">
                <Groups2OutlinedIcon fontSize='large' color="info"  />
              </div>
           </div>
          </div>     

        </section>
      </section>
    </>
   );
}
 
export default Home;