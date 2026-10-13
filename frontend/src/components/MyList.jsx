
import MyListItem from './MyListItem.jsx';

// MyListコンポーネントは、srcからfilterAge以上の年齢のアイテムだけを抽出し、MyListItemコンポーネントを使って表示する
export default function MyList({src, filterAge = 0})
{
    // filterAge以上の年齢のアイテムだけを表示するためのフィルタ関数
    const filteredSrc = src.filter(item => item.age >= filterAge);

    // フィルタ後のアイテムを年齢でソートするための関数
    const sortedSrc = [...filteredSrc].sort((a, b) => a.age - b.age); // 年齢でソートする

    // srcからfilterAge以上の年齢のアイテムだけを抽出し、MyListItemコンポーネントを使って表示する
    return (
        <>
            {sortedSrc.map((elm) => 
                <MyListItem key={elm.id} item={elm} />
            )}
        </>
    );
}