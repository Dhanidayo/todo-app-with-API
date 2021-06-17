import { useContext } from 'react';
import { AppContext } from '../components/StateProvider';
import { useHistory } from 'react-router-dom';

function Home() {

    const { state } = useContext(AppContext);
    const history = useHistory();

    history.push('/TodoList');

    return (
        <body>
            <div>
            <div className="bannerText">
            <h1 className="home-heading">My Todo List</h1>
            <p>List your plans and squash them!</p>
            </div>
            <div>
            {state.todoList.map(({id, item}) => (
                <div key={id} item={item} />
            ))}
        </div>
        </div>
        </body>
    );
}

export default Home;