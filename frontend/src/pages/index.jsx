import MyEvent from '../components/MyEvent.jsx'
import MyList from '../components/MyList.jsx'
import myData from '../const/myData.jsx'
import decoCircles from '../assets/deco-circles.svg'
import decoZigzag from '../assets/deco-zigzag.svg'
import decoDots from '../assets/deco-dots.svg'
import decoShapes from '../assets/deco-shapes.svg'
import { Link } from 'react-router'

export default function Index() { 
  const testVal = 'test'
  return (
    <>
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/mypage"><li>My Page</li></Link>
            </ul>
          </nav>
          
          <p>{testVal + (() => { /*簡単な計算結果*/ return 1 + 1 })()}</p>
          <div className="ticks"></div>

          <section>
            <img src={decoCircles} alt="" className="deco" />
            <img src={decoZigzag} alt="" className="deco" />
            <img src={decoDots} alt="" className="deco" />
            <img src={decoShapes} alt="" className="deco" />
          </section>

          <div className="ticks"></div>
          <section id="spacer"></section>
          
          {/* MyEventコンポーネントを使用して、現在の時刻を表示し、カウンターを管理する */}
          <MyEvent type="time" initCount={0} />
          {/* MyListコンポーネントを使用して、リストを表示する */}
          <MyList src={myData} filterAge={(()=>{let age=28;return age;})()} />
    </>
  );
}