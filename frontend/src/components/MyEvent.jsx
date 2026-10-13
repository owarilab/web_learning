import { useState } from 'react'; // ReactのuseStateフックをインポート

// MyEventコンポーネントの定義
export default function MyEvent({type, initCount}) {

    // カウンターの状態を管理するためのuseStateフック
  const [count, setCount] = useState(initCount);

  // カウンターのクリックイベントハンドラー
  const handleClick = () => setCount(count + 1);

  // 現在の日時を表示する関数
  const current = () => {
    const date = new Date();
    switch (type) {
      case 'time':
        document.getElementById('result').textContent = date.toLocaleTimeString();
        break;
      case 'date':
        document.getElementById('result').textContent = date.toLocaleDateString();
        break;
      default:
        document.getElementById('result').textContent = 'Invalid type';
    }
  };

  // コンポーネントのレンダリング
    return (
        <div>
            <button onClick={current}>現在時刻</button>
            <p id="result"></p>
            <button onClick={handleClick}>Count: {count}</button>
        </div>
    );
}