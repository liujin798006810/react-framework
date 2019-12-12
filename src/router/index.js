import Loadable from 'react-loadable';
import PageLoading from 'components/pageLoading/index';

const loadComponent = (loader,loading = PageLoading) =>{
    return Loadable({
        loader,
        loading
    })
}
//子路由
const ShowSubOne = loadComponent( () => import('views/show/one'))
const ShowSubTwo= loadComponent( () => import('views/show/two'))

export default{
    ShowSubOne,
    ShowSubTwo
}