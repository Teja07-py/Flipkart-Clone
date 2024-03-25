import React from 'react';

// function Log1(){
//     return(
        
//     <div id="login1" style="background-color: lightgray;">
//         <div id="b1">
//             <button id="b1" class="btn btn-danger" onclick="red1()">X</button>
//         </div>

//     <div class="img1 ">
//         <img class="center" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
//         2wCEAAkGBw8QEA8PDg8QDRAPDxIVDg0PDxAQEA0PFhEWFhcVFhYYHiggGBolGxUWITEhJSwrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0dHSUtKy0tLy0tKy0tLSstLSstMi0rLSstLSstLSstLTctLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBEQACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQMFAgQHBgj/xABAEAACAQMABQoDBQUIAwAAAAAAAQIDBBEFEiExUQYHEyJBYXGBkaEyUrEUcoKSwSNCYnOiJEN0ssLD0fEzU2P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEBQIG/8QALBEBAAICAQMCBgICAwEAAAAAAAECAxEEEiExMkEFE1FhcYEi8CNCM7HRof/aAAwDAQACEQMRAD8A4HWcMAAAAAAAAgQBIAAgE
//         AgAgQJQCECAQJQAQIBAOIEAgADYHt5AAAAAAAQIAkAARgQCACBAlAIQIBAlABAgEA4gQCACBANiWPIAAAAAECAJAAEYEAgAgQJQCECAQJQAQIBAOIEAgAgQCAbIseQAAAAQIAkAAQCAQCSklvaXe3giZ0mImfDBK8pL+8h+ZM8fMp9VkYck+0oryk/7yH5kh8yn1Pk5PpLLGae5p+Dyet78PExMeQIQJQAQIBAOIEAgAgQDiwGQNmWPIAAAQIAkAAQCAY61aMFmUlHxZ5taK+Zeq0tbxG2nutLSeyn1V8z+J/8ABkvyJntXs34+JWO9u7XTm5PMm5Pi3kzzMz5aoiI7R2QhIATxtWx8VsBPfy7VHSFWP72suEtvvvLa5rx91F+PS3tpsbbSMJ7H1JcHufgzTTNW3aezJk41qd47w7hczoQIBxAgEAECAcWBGEoBtSx4AAECAJAAEAgGq0lpLDcKe9fFPg+CMubPr+NW3Bxtx1WaaTbeW2297e1sx+W6I12gCQAAAAAIBs9G3jzqTeflb7O404cv+ssXJwRrrr+2zNTE4gQCACBAOLAjCUIEA2xa8AECAJAAEAgHU0lcdHTbXxPZHub7fQqzX6arsGPrvqfD5w5zrAAAAAAAAAABtrK8ylGT29kuPczfS/VG3JyU6bTDuFitABAgHFgRhKECAMgbYteECAJAAEAgEIGm09PbCPBN+rx+hk5M94hv4cdplqzK2vpeS/I6teJVZy6ChnZUazKrx1Fw73s8SnLminbzK7Hhm/f2fSaY5u6XQ/2OU+mjt/azTVZfLuSi+D9eKppyZ3/Lwttx41/Hy85uKE6cpU6kZU5xeJQksSi+9GuJie8Msx
//         rtLgSgAAAAADLRew04Z7TDFyo/lEtha3X7sn4P9GaIljmHcJQgHFgRhKECARsCAbctVgSAAIBAIQAGj078cfufqzFyfVDo8P0T+Wfknof7ZdQpPPRrM6zX/rjjZ4ttLz7jHlv0V23Y6dVtPaqdOMUoxSjGKSjFLCiksJJHNdFyA1WnOT9teRxXh1kurWh1akPB9q7nlHumS1PDxfHW3l8Bpbm9uqbbt5RuodiyqdVLwex+T8jXXk1nz2Zbce0eO75e8sK9F4rUatHvqU5RXk2sMvi0T4lTNZjzDray4olDlShKbUYRc5PdGCcpPwSE9vJHdv7PkXpCrHXVDo1jYqs405S/C9q88FU56R7rYw3n2aO4oTpzlTqRcJweJwksOLLImJjcK5jXaUo9pfg8yycqP4xLKaWJ27a5x1Zbux8D1EomHbJeUYShAgEbAhAgG4LngAAQCAQgAIEtNp1daH3X9THyfMN/D9MvuOaqy1aNeu1tqVFBP+GEc/WT9Dk8q3eIdfjR2mX3JmaQAAAAYJ2dF7ZUqcu904v9CeqUdMMtOnGOyMVFcIpL6EbTpyA8751dHRToXUVhybpVH82FrQfopL04Gvi281ZeRXxZ8FR3+R0cPqczlej9sppYQDs29xjZLd2Pg
//         TEo07eSUIBGwIQIAyBuC54AIBAIQAECUA6el9G150lXhSlKlT1lUqJZUd2/tx39hi5V69UV33dDh0t02trs9D5v6Wro63/i6ST86sseyRxs8/5JdrB6IfRFS0AAAAAAAA+S5zoZsc/LXpv1Ul+pfxvWo5HoebR0bXjSVxKjONGTSjVccRk3ux3d+46eC1euY33crlVt0ROu22E1sAAAz0K+Nj3fQlDt5JQhAgEbAgG6LnhAIBCAAgSgEIHo/J2lFWlBYTUqeZJ7U9ZtvPqfO8uZnNb8vpeHWIwV/DtaNsoUKUKNPZCGtqLhFybS8s4KLWm07lorXpjTskPQAAAAAAAB0dMaMhdU1Sq7YdJCUo/OoS1tV9zxg9UtNZ3DzasWjUutyrpRdjdRaSUaEmljYnFa0ceaRZxpmM1fyp5cR8i34l40d984AAAGajWxse76EodpMIRsCAANyXPCAQgAIEoBCBAPQOR9wp2sY9tOUov11l7NHB59OnNM/Xu+h+H36sMR9OzdmNuAAAAAAAAAAD57l7eKlY1V21nGnFccvL/pUjVw6dWWPt3Y+dfpwz9+39/TyQ7bgAAAAAy0quNj3fQlDsoIRsDiBuy54QgAIEoBCBAIEtxyX0sreq1N/squFN/I1ul7vPj3GPmcf5tO3mGzhcj5N/5eJ8/+vQ4TUknFqSaymnlNdzODMTE6l9DExMbhQkAAAAAAAAk5qKbk1FJZcm0klxbERtEzry8o5caeV3WUaTzRo5UH2VJv4p+GxJefE7XEwfKrufMuDzeRGW+q+IfNmtjAA
//         AAAAyUqmNnZ9AhnJQAboteACBKAQgQCBKACB9byCu//ADUH24qRX9Mv9Jy/iWP03/TrfC8nqp+32BynYAAAAAAAAPg+dG+WrQtlvbdWa4JZjD3cvynS+H083/TlfE8npp+/7/fZ5+dNyQAAAAAAADJTqY8PoEMuuuJKG8LXhAlAIQIBAlABAgHb0PfdBXp1eyMuv3weyXs8+RVnxfMxzVdx8vyskX/unqUWmk1tT3NdqPm31CgAAAAAAN8dnfwA8W5SaS+1XVWsnmLlq0v5cdkfXf5n0GDH8vHFf7t81yMvzck29vb8NYWqQAAAAAAAAAA+kLlaAQgQCBKACBAIBxA9K5J1XOzoOTy0pR8ozlFeyR8/zKxXPbX97Po+DabYK7+//wAltzM1gAAAAAfMc4GlXQtejhlTuW4KS/dhjr+bTx5mzhYuvJufEMPPyzTHqPM9nlR2XCAAAAAAAAAAAB9GXK0IEAgSgAgQCAcQIB6LyJf9jh3Tqf5mzhc//mn9PoPh3/BH5n/tvTG3AAAAAAfC86b6lp9+r9InR+Hebfpy/ifiv7eenUcgAAAAAAAAAAAH0RarQCBKAQAQIBxAgGGtXUcLfJ7IxW9t7iu+SKeVuPFbJ4ewWGh42dOFCMpT2a0pSx8b34x2bDicy3Vk39nf4dIpj6Y+rsGVqAAAAAA+f5caDjc2davrSjOypzqQSxqTjjM1L
//         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"/>


//     </div>
//     <br/>
//     <div class="cred">
//         <h6>Username</h6>
//         <input id="p101" type="username" placeholder="Enter Username"/><br/>
//         <h6>Password</h6>
//         <input id="p102" type="password" placeholder="Enter Password"/>
        
//         <button onclick="login()" class="btn btn-success" >Login
//         </button><br/>
       
//         <div id="rem1">
//             <input class="rem2" type="checkbox" >Remember Me <a class="clr" href="">Forgot Password</a></input>
            
//         </div>
//         {/* <!-- <div class="clr">
//             <a href="">Forgot Password</a>
            
//             </div> --> */}
//         </div>
        


//     </div>

// )
// };
import Regist from './Regist';
import Modallog from './Logi1';
function FlipkartHome() {
  return (
    
    <div >

      
      
    
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
        <div className="container-fluid">
          <h1><a className="navbar-brand" href="#">Flipkart</a></h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-light" type="submit">Search</button>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'aliceblue' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'aliceblue' }}>Today's Deals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'aliceblue' }}>Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'aliceblue' }}>Become a seller</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{ color: 'aliceblue' }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  New Customer?
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">My Profile</a></li>
                  <li><a className="dropdown-item" href="#">Wishlist</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>                       
                    <button  className="dropdown-item" data-bs-toggle="modal" data-bs-target="#login1">Sign In</button></li>

                  <li>
                  <button  className="dropdown-item"  data-bs-toggle="modal" data-bs-target="#regist1">Sign Up</button></li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ecf4f27ed5376ef.jpg?q=20" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/26a151c733bd1852.png?q=20" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/97c710b1b8b764df.png?q=20" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <h3 style={{ marginLeft: '100px' }}>Best of Electronics</h3><br />
      <div className="container text-center">
        <div className="row">
      <div className="col"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0MTa-OlCjKiauoI1FhjqW096M3SunE79sA&s" style={{height: "180px"}}/>Camera</div>
      <div className="col"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWB6Ryo1Gylb7BPb8HSQ2_YPo3Z9r3hOm94Q&s" style={{height: "170px"}}/>Monitor</div>
      <div className="col"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1nMAUEhfmLxZdfVkE-WgtbaKqJ7rjYdExQ&s" style={{height: "180px"}}/>IPhone</div>
      <div className="col"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAbmLggJctPNBUWsDh3tT7dH5F8JPtt222w&s" style={{height: "150px"}}/>Printer</div>
      <div className="col"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUKxpmz_YTa5ik6r4PX9R1odq7NNNW2DrkA&s" style={{height: "150px"}}/>Keyboard</div>
      </div>
      </div>
      <br/>
      <hr/>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <div className="col">
                <div style={{ backgroundImage: 'url(https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/l/y/8-rsl021-red-tape-white-black-original-imagw6whg3ewycqu.jpeg?q=70)', height: '250px', width: '90%', backgroundSize: '100% 100%', borderRadius: '10px' }}>
                  <div style={{ position: 'relative', left: '10px', color: 'rgb(1, 10, 18)' }}>
                    <h3>Sneakers</h3>
                    <h5 style={{ marginTop: '180px' }}>From ₹5,999</h5>
                  </div>
                </div>
              </div>
              
            
              <div className="col">
                <div style={{ backgroundImage: 'url(https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/c/i/4/-original-imagxp8urwgc96cz.jpeg?q=70)', height: '250px', width: '90%', backgroundSize: '100% 100%', borderRadius: '10px' }}>
                  <div style={{ position: 'relative', left: '10px', color: 'aliceblue' }}>
                    <h3>Watches</h3>
                    <h5 style={{ marginTop: '180px' }}>From ₹1,999</h5>
                  </div>
                </div>
              </div>
              <hr />
              <hr />
              <div className="row">
                <div className="col">
                  <div style={{ backgroundImage: 'url(https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/8/l/m19-house-of-sound-original-imagr5tn9pwbgsxz.jpeg?q=70)', height: '270px', width: '95%', backgroundSize: '100% 100%', borderRadius: '30px' }}>
                    <div style={{ position: 'relative', left: '10px', color: 'aliceblue' }}>
                      <h3>Ear Pods</h3>
                      <h5 style={{ marginTop: '150px' }}>From ₹899</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                <div style={{ backgroundImage: 'url(https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/z/d/v/apollo-spin-bike-6-5-kg-flywheel-adjustable-resistance-lcd-original-imagqwsmuvfemg2g.jpeg?q=70)', height: '250px', width: '90%', backgroundSize: '100% 100%', borderRadius: '5px' }}>
                    <div style={{ position: 'relative', left: '10px', color: 'black' }}>
                      <h3>Fitness</h3>
                      <h5 style={{ marginTop: '210px' }}>From ₹4999</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div style={{ backgroundImage: 'url(https://rukminim2.flixcart.com/fk-p-flap/530/810/image/4e53722c1839b515.jpg?q=20)', height: '580px', width: '95%', backgroundSize: '100% 100%', borderRadius: '30px', color: 'aliceblue' }}>
              <div style={{ position: 'relative', top: '70%', left: '10px', color: 'black' }}>
                {/* Content for the second column */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <div className="card mx-auto p-2" style={{ border: '0', height: '300px' }}>
          <h5 className="card-header bg-dark text-light">Support</h5>
          <div className="card-body">
            <h5 className="card-title">Customer care Services</h5>
            <p className="card-text">For any queries, please do contact us by clicking on the below tab</p>
            <a href="#" className="btn btn-primary">Contact us</a>
          </div>
        </div>
        <div className="modal" tabIndex="-1" id="login1" data-bs-theme="dark">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" style={{color:"	 #2d8659"}}>Login Form</h2>
            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          <div className="modal-body">
            <div className="form-group">
            <h5 style={{color:"gray"}}>Username</h5>

              <input type="text" className="form-control" placeholder="Enter Username" />
            </div><br/>
            <div className="form-group">
            <h5 style={{color:"gray"}}>Password</h5>
                  <input type="password" className="form-control" placeholder="Enter Password" />
            </div><br/>
            <div className="form-group">
            <a style={{color:"	 #4747d1"}} href="#" >Forgot Password?</a>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  

      </footer>
      
      <div className="modal" tabIndex="-1" id="regist1" data-bs-theme="dark">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" style={{fontFamily:"unset",color:" 	 #2d8659"}}>Registration Form</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" >
            <div className="form-group">
            <h5 style={{fontFamily:"sans-serif" ,color:"gray"}}>First Name</h5>
            <input type="text" className="form-control" placeholder="FirstName" />
            </div><br/>
            <div className="form-group">
            <h5 style={{fontFamily:"sans-serif", color:"gray"}}>Last Name</h5>
            <input type="text" className="form-control" placeholder="LastName" />
            </div><br/>
            <div className="form-group">
            <h5 style={{fontFamily:"sans-serif",color:"gray"}}>Email</h5>
            <input type="email" className="form-control" placeholder="Eg: abc@gmail.com" />
            </div>
            <br/>
            <div className="form-group">
            <h5 style={{fontFamily:"sans-serif",color:"gray"}}>Password</h5>
            <input type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <br/>
            <div className="form-group">
            <h5 style={{fontFamily:"sans-serif",color:"gray"}}>Re-Enter Password</h5>
            <input type="password" className="form-control" placeholder="Re-Enter" />
            </div>
            <br/>
            <div className="form-group">
            <h5 style={{fontFamily:"sans-serif",color:"gray"}}>Phone Number</h5>
            <input type="text" className="form-control" placeholder="Mobile Number" />
            </div>
            <br/>
            
          </div>
          <div className="modal-footer" >
            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    
    
    
    
  );
}


export default FlipkartHome;

