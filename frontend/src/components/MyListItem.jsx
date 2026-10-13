import MyStyle from './MyStyle.jsx';

export default function MyListItem({item})
{
    // item.isCheckerがtrueなら赤、falseなら青にする
    let color = item.isChecker ? 'red' : 'blue';

    if (item.age >= 50) {
        color = 'green';
    }

    return (
            <MyStyle>
            <dl style={{color: color}}>
                <dt>{item.id}</dt>
                <dd>{item.name}</dd>
                <dd>{item.age}</dd>
                <dd>{(() => { 
                    // item.hobbyの値に応じて、表示する文字列を変える
                    if (item.hobby === 'programming') {
                        return 'プログラミング';
                    } else if (item.hobby === 'reading') {
                        return '読書';
                    } else if (item.hobby === 'sports') {
                        return 'スポーツ';
                    } else if (item.hobby === 'cooking') {
                        return '料理';
                    } else {
                        return item.hobby;
                    }
                })()}</dd>
            </dl>
            </MyStyle>
    );
}