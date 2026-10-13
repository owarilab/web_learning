import MyHello from '../components/MyHello.jsx'
import { Link } from 'react-router'

export default function MyPage() {
  return (
    <div>
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/mypage"><li>My Page</li></Link>
            </ul>
          </nav>
        <h1>My Page</h1>
        <p>Welcome to my page!</p>
        <MyHello myName="John Doe" />
    </div>
  )
}