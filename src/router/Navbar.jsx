import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { subscribeLikes } from '../router/LikeBos'
import '../components/Navbar.css'

function Navbar({ onSearch }) {
  const [likes, setLikes] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    const unsubscribe = subscribeLikes(setLikes)
    return unsubscribe
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)
    onSearch(e.target.value)  
  }

  return (
    <>
      <nav>
        <div className="nav">
          <h1>Exclusive</h1>
        </div>

        <div className="middle-nav">
          <Link to={'/'}>Home</Link>
          <Link to={'/Contact'}>Contact</Link>
          <Link to={'/About'}>About</Link>
          <Link to={'/SignUp'}>SignUp</Link>
        </div>

        <div className="right-nav">
          <div className="naw">
            <Link to='/Details'>
            <button>
              <input 
                type="text"
                placeholder="Cart o`tsangiz bosing"
                value={text}
                onChange={handleChange}
                
              />
            </button>
            </Link>
            <Link to="/cart">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
              </svg>
            </button>
            </Link>
          </div>

          <div className="naw1">
            <Link to="/wishlist">
              <FaHeart />
              {likes > 0 ? <span>{likes}</span> : null}
            </Link>
          </div>

          <Link to="/Trolley">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
            </svg>
          </button>
          </Link>
          <div className="naw3">
            <Link to="/Contoct">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                  <path d="M185-80q-17 0-29.5-12.5T143-122v-105q0-90 56-159t144-88q-40 28-62 70.5T259-312v190q0 11 3 22t10 20h-87Zm147 0q-17 0-29.5-12.5T290-122v-190q0-70 49.5-119T459-480h189q70 0 119 49t49 119v64q0 70-49 119T648-80H332Zm148-484q-66 0-112-46t-46-112q0-66 46-112t112-46q66 0 112 46t46 112q0 66-46 112t-112 46Z"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
